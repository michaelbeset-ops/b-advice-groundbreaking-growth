import React, { useEffect, useRef } from 'react';

type V3 = { x: number; y: number; z: number };

// hsl(72 72% 56%) ≈ rgb(191,224,62)
const ACCENT = '#bfe03e';
const accentA = (a: number) => `rgba(191,224,62,${a})`;

const rotY = (x: number, y: number, z: number, a: number): V3 => ({
  x: x * Math.cos(a) + z * Math.sin(a),
  y,
  z: -x * Math.sin(a) + z * Math.cos(a),
});

interface Particle {
  x: number; y: number; z: number;
  vy: number; life: number; maxLife: number; size: number;
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let angle = 0.5;
    const particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Perspective projection with downward camera tilt
    const project = (v: V3): [number, number, number] => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const TILT = 0.35; // ~20° downward tilt
      const ty = v.y * Math.cos(TILT) - v.z * Math.sin(TILT);
      const tz = v.y * Math.sin(TILT) + v.z * Math.cos(TILT);
      const fov = Math.min(w, h) * 0.75;
      const denom = Math.max(tz + 5.5, 0.1);
      const s = fov / denom;
      const cx = w > 768 ? w * 0.7 : w * 0.5;
      return [v.x * s + cx, -ty * s + h * 0.44, s];
    };

    const poly = (pts: V3[], fill: string, stroke?: string, sw = 1) => {
      const pp = pts.map(project);
      ctx.beginPath();
      ctx.moveTo(pp[0][0], pp[0][1]);
      for (let i = 1; i < pp.length; i++) ctx.lineTo(pp[i][0], pp[i][1]);
      ctx.closePath();
      if (fill !== 'none') { ctx.fillStyle = fill; ctx.fill(); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = sw; ctx.stroke(); }
    };

    const avgZ = (pts: V3[]) => pts.reduce((s, p) => s + p.z, 0) / pts.length;

    let frame = 0;

    const tick = () => {
      frame++;
      angle += 0.004;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Spawn particles from container opening
      if (frame % 7 === 0) {
        particles.push({
          x: (Math.random() - 0.5) * 1.2,
          y: 0.05,
          z: (Math.random() - 0.5) * 1.2,
          vy: -(0.009 + Math.random() * 0.013),
          life: 0,
          maxLife: 70 + Math.random() * 80,
          size: 1.5 + Math.random() * 2.5,
        });
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].y += particles[i].vy;
        particles[i].life++;
        if (particles[i].life >= particles[i].maxLife) particles.splice(i, 1);
      }

      const r = (x: number, y: number, z: number) => rotY(x, y, z, angle);

      // Container and ground dimensions
      const CW = 0.8, CD = 0.8, CH = 1.85, GS = 3.5;

      const T = [r(-CW, 0, -CD), r(CW, 0, -CD), r(CW, 0, CD), r(-CW, 0, CD)];
      const B = [r(-CW, -CH, -CD), r(CW, -CH, -CD), r(CW, -CH, CD), r(-CW, -CH, CD)];
      const G = [r(-GS, 0, -GS), r(GS, 0, -GS), r(GS, 0, GS), r(-GS, 0, GS)];

      type Face = { pts: V3[]; fill: string; stroke?: string; sw?: number; glow?: boolean; z: number };

      const faces: Face[] = [
        { pts: G, fill: '#0e1a12', stroke: accentA(0.08), sw: 0.5, z: avgZ(G) },
        { pts: B, fill: '#080e0a', stroke: accentA(0.12), sw: 0.5, z: avgZ(B) },
        { pts: [T[0], T[1], B[1], B[0]], fill: '#0f1c13', stroke: accentA(0.22), sw: 0.5, z: avgZ([T[0], T[1], B[1], B[0]]) },
        { pts: [T[1], T[2], B[2], B[1]], fill: '#16281a', stroke: accentA(0.28), sw: 0.5, z: avgZ([T[1], T[2], B[2], B[1]]) },
        { pts: [T[3], T[2], B[2], B[3]], fill: '#1c3320', stroke: accentA(0.38), sw: 0.5, z: avgZ([T[3], T[2], B[2], B[3]]) },
        { pts: [T[0], T[3], B[3], B[0]], fill: '#0f1c13', stroke: accentA(0.22), sw: 0.5, z: avgZ([T[0], T[3], B[3], B[0]]) },
        { pts: T, fill: '#0b1510', stroke: ACCENT, sw: 2, glow: true, z: avgZ(T) },
      ];
      faces.sort((a, b) => b.z - a.z);

      for (const f of faces) {
        if (f.glow) { ctx.save(); ctx.shadowBlur = 20; ctx.shadowColor = ACCENT; }
        poly(f.pts, f.fill, f.stroke, f.sw);
        if (f.glow) ctx.restore();
      }

      // Ground grid overlay
      ctx.save();
      ctx.globalAlpha = 0.055;
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 0.5;
      for (let i = -8; i <= 8; i += 2) {
        const t = (i / 8) * GS;
        const [ax, ay] = project(r(t, 0, -GS)), [bx, by] = project(r(t, 0, GS));
        const [cx, cy] = project(r(-GS, 0, t)), [dx, dy] = project(r(GS, 0, t));
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(dx, dy); ctx.stroke();
      }
      ctx.restore();

      // LED strips on 4 vertical edges
      ctx.save();
      ctx.shadowBlur = 10;
      ctx.shadowColor = ACCENT;
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 1.5;
      for (const [ex, ez] of [[-CW + 0.07, CD], [CW - 0.07, CD], [CW - 0.07, -CD], [-CW + 0.07, -CD]] as [number, number][]) {
        const [ax, ay] = project(r(ex, 0, ez));
        const [bx, by] = project(r(ex, -CH, ez));
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      }
      ctx.restore();

      // Animated scan line sweeping down the front face
      const scanProgress = (frame * 0.8 % 200) / 200;
      const sy = -CH * scanProgress;
      const SL = [r(-CW, sy + 0.08, CD), r(CW, sy + 0.08, CD), r(CW, sy - 0.08, CD), r(-CW, sy - 0.08, CD)];
      const slp = SL.map(project);
      const slg = ctx.createLinearGradient(slp[0][0], slp[0][1], slp[2][0], slp[2][1]);
      slg.addColorStop(0, accentA(0));
      slg.addColorStop(0.5, accentA(0.28));
      slg.addColorStop(1, accentA(0));
      ctx.beginPath();
      ctx.moveTo(slp[0][0], slp[0][1]);
      slp.forEach(p => ctx.lineTo(p[0], p[1]));
      ctx.closePath();
      ctx.fillStyle = slg;
      ctx.fill();

      // Depth measurement annotation on right edge
      const [x1, y1] = project(r(CW + 0.28, 0, 0));
      const [x2, y2] = project(r(CW + 0.28, -CH, 0));
      ctx.save();
      ctx.strokeStyle = accentA(0.4);
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x1 - 4, y1); ctx.lineTo(x1 + 4, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2 - 4, y2); ctx.lineTo(x2 + 4, y2); ctx.stroke();
      ctx.fillStyle = accentA(0.65);
      ctx.font = `${Math.max(10, w * 0.012)}px Inter,sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText('2.2m', (x1 + x2) / 2 + 8, (y1 + y2) / 2 + 4);
      ctx.restore();

      // Floating particles rising from container opening
      ctx.save();
      ctx.shadowBlur = 8;
      ctx.shadowColor = ACCENT;
      for (const p of particles) {
        const rp = rotY(p.x, p.y, p.z, angle);
        const [px, py, ps] = project(rp);
        const alpha = (1 - p.life / p.maxLife) * 0.75;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(p.size * ps * 0.022, 0.8), 0, Math.PI * 2);
        ctx.fillStyle = accentA(alpha);
        ctx.fill();
      }
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
