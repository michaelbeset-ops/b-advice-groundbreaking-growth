import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Lightbulb, Shield, Recycle, Wrench, ClipboardList, TrendingUp, Settings, FileText, ArrowRight, Phone, Mail, MapPin, Monitor } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Recycle: <Recycle className="w-7 h-7" />,
  Wrench: <Wrench className="w-7 h-7" />,
  ClipboardList: <ClipboardList className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Settings: <Settings className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
};

const features = [
  { icon: <Leaf className="w-8 h-8" />, title: "Duurzaamheid", desc: "Wij zetten ons in voor een circulaire economie en minimaliseren de ecologische voetafdruk van afvalbeheer." },
  { icon: <Lightbulb className="w-8 h-8" />, title: "Innovatie", desc: "Met slimme technologie en digitale platforms tillen wij afvalinzameling naar het volgende niveau." },
  { icon: <Shield className="w-8 h-8" />, title: "Betrouwbaarheid", desc: "Al jaren de vertrouwde partner van gemeenten en organisaties in heel Nederland." },
];

// Eerste 6 diensten voor de homepage
const homeServices = services.slice(0, 6);

const Index: React.FC = () => {
  return (
    <>
      <SEOHead
        title="B-Advice | Uw afval en container specialist"
        description="B-Advice is dé specialist in duurzame afvalinzameling en ondergrondse containersystemen in Nederland. Ontdek onze producten en diensten."
      />

      {/* Hero — split layout: tekst links, foto rechts */}
      <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
        {/* Animated bg elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Linker kolom: tekst */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full mb-6 border border-secondary/20">
                  Uw afval en container specialist
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                De toekomst van{" "}
                <span className="text-gradient">afvalinzameling</span>
                , onder de grond
              </motion.h1>

              <motion.p
                className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                B-Advice ontwikkelt duurzame oplossingen voor afvalinzameling met ondergrondse containersystemen.
                Innovatief, betrouwbaar en met respect voor de leefomgeving.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              >
                <Link
                  to="/producten"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-accent text-sm"
                >
                  Bekijk onze producten
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://b-organized.info/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/20 text-primary-foreground font-bold rounded-xl hover:border-secondary hover:text-secondary transition-all text-sm"
                >
                  <Monitor className="w-4 h-4" />
                  Login B-Organized
                </a>
              </motion.div>

              {/* Statistieken */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {[
                  { num: "15+", label: "Jaar ervaring" },
                  { num: "50+", label: "Gemeenten" },
                  { num: "5000+", label: "Containers geplaatst" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-extrabold text-secondary">{stat.num}</div>
                    <div className="text-xs text-primary-foreground/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Rechter kolom: foto */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* Rechtenvrije foto: moderne duurzame stad / groene infrastructuur */}
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
                  alt="Duurzame afvalinzameling en groene infrastructuur"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback naar tweede optie als eerste niet laadt
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85";
                    }
                  }}
                />
                {/* Overlay gradient voor overgang naar achtergrond */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20" />
              </div>

              {/* Badge over de foto */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Duurzaam gecertificeerd</div>
                    <div className="text-xs text-muted-foreground">ISO 14001 gecertificeerd</div>
                  </div>
                </div>
              </motion.div>

              {/* Tweede badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-xl font-extrabold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Klanttevredenheid</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-center">
              Onze Diensten
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Van advies tot uitvoering — B-Advice biedt een compleet pakket aan diensten voor duurzaam afvalbeheer.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.1}>
                <Link
                  to={`/diensten/${s.slug}`}
                  className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    {iconMap[s.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold group-hover:text-secondary transition-colors">
                    Meer informatie <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              Bekijk alle diensten <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* B-Organized banner */}
      <section className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full mb-6 border border-secondary/20">
                Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
                B-Organized: uw containerpark digitaal beheerd
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Met B-Organized beheert u uw volledige containerpark vanuit één overzichtelijk dashboard.
                Real-time data, onderhoudsplanning en rapportages — alles op één plek.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://b-organized.info/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-accent text-sm"
                >
                  Login B-Organized
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/b-organized"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/20 text-primary-foreground font-bold rounded-xl hover:border-secondary hover:text-secondary transition-all text-sm"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Interesse gewekt?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Neem vrijblijvend contact met ons op. Wij vertellen u graag meer over onze producten en diensten.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:info@b-advice.info" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">info@b-advice.info</a>
                </div>
                <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50">
                  <Phone className="w-6 h-6 text-primary" />
                  <a href="tel:+31643125245" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">+31 (6) 431 25 245</a>
                </div>
                <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground text-center">Achterdijk 26, Nieuwland</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all text-sm"
              >
                Neem contact op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
