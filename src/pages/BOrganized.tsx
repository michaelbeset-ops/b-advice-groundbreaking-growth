import React from "react";
import { ArrowRight, Monitor, BarChart3, Wrench, Database, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const features = [
  { icon: <Database className="w-6 h-6" />, title: "Beheer inzamelmiddelen", desc: "Registreer en beheer al uw containers, inwerpzuilen en accessoires op één plek." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Overzichtelijk dashboard", desc: "Real-time inzicht in de status van uw volledige containerpark via een intuïtief dashboard." },
  { icon: <Monitor className="w-6 h-6" />, title: "Real-time data", desc: "Ontvang live meldingen over vullingsgraden, storingen en onderhoudsbehoefte." },
  { icon: <Wrench className="w-6 h-6" />, title: "Onderhoudsplanning", desc: "Plan preventief onderhoud en houd bij welke containers wanneer onderhoud nodig hebben." },
  { icon: <Shield className="w-6 h-6" />, title: "Rapportages", desc: "Genereer uitgebreide rapportages voor verantwoording en optimalisatie van uw afvalbeheer." },
];

const BOrganized: React.FC = () => (
  <>
    <SEOHead title="B-Organized | B-Advice" description="B-Organized is het digitale platform van B-Advice voor het beheren en monitoren van uw containerpark. Real-time data en overzichtelijk dashboard." />
    <PageHero title="B-Organized" subtitle="Uw containerpark digitaal beheerd." />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-6">Eén platform voor al uw containerbeheer</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                B-Organized is het door B-Advice ontwikkelde managementplatform waarmee u uw volledige containerpark digitaal beheert. 
                Van registratie en monitoring tot onderhoud en rapportage — alles vanuit één overzichtelijke omgeving. 
                Geschikt voor gemeenten, afvalinzamelaars en woningcorporaties.
              </p>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {/* SCREENSHOT/MOCKUP PLACEHOLDER — vervang met een schermafbeelding van het B-Organized platform */}
            <div className="aspect-[4/3] rounded-2xl bg-muted border-2 border-border flex items-center justify-center">
              <div className="text-center px-8">
                <Monitor className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Platform screenshot placeholder</p>
                <p className="text-sm text-muted-foreground/60 mt-1">Vervang met een schermafbeelding van B-Organized</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-hero">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-6">Direct aan de slag?</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Log in op B-Organized en start met het digitaal beheren van uw containerpark.
          </p>
          <a
            href="https://b-organized.info/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-accent"
          >
            Login B-Organized <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default BOrganized;
