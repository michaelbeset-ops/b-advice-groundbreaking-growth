import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Recycle, Wrench, ClipboardList, TrendingUp, Settings, FileText, Users, Monitor, ChevronDown, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const iconComponents: Record<string, React.ReactNode> = {
  Recycle: <Recycle className="w-7 h-7" />,
  Wrench: <Wrench className="w-7 h-7" />,
  ClipboardList: <ClipboardList className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Settings: <Settings className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Monitor: <Monitor className="w-7 h-7" />,
};

const Diensten: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <SEOHead title="Diensten | B-Advice" description="Ontdek het complete dienstenpakket van B-Advice: van afvalinzameling en projectmanagement tot onderhoud en aanbesteding." />
      <PageHero title="Onze Diensten" subtitle="Een compleet pakket voor duurzaam afvalbeheer." />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <div className="rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card-hover">
                  <button
                    onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                    className="w-full p-6 flex items-start gap-4 text-left"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {iconComponents[s.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform ${expanded === s.id ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === s.id && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">{s.fullDescription}</p>
                        <Link to="/contact" className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm hover:text-secondary transition-colors">
                          Meer informatie <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Diensten;
