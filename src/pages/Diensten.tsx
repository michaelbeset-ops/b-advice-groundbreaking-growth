import React from "react";
import { Link } from "react-router-dom";
import { Recycle, Wrench, ClipboardList, TrendingUp, Settings, FileText, Users, Monitor, ArrowRight } from "lucide-react";
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
  return (
    <>
      <SEOHead
        title="Diensten | B-Advice"
        description="Ontdek het complete dienstenpakket van B-Advice: van afvalinzameling en projectmanagement tot onderhoud en aanbesteding. Klik door voor uitgebreide informatie per dienst."
      />
      <PageHero
        title="Onze Diensten"
        subtitle="Een compleet pakket voor duurzaam afvalbeheer — van advies tot uitvoering."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <div className="group rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card-hover h-full flex flex-col">
                  <div className="p-6 flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      {iconComponents[s.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-foreground mb-2">{s.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.shortDescription}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      to={`/diensten/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-secondary transition-colors"
                    >
                      Meer informatie <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
