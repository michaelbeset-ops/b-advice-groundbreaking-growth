import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const values = [
  { icon: <Target className="w-7 h-7" />, title: "Missie", desc: "Wij maken Nederland schoner door innovatieve, duurzame afvaloplossingen die de leefomgeving verbeteren en de circulaire economie bevorderen." },
  { icon: <Heart className="w-7 h-7" />, title: "Passie", desc: "Afvalbeheer is meer dan een vak — het is onze passie. Wij geloven dat slim afvalbeheer de sleutel is tot een duurzame toekomst." },
  { icon: <Users className="w-7 h-7" />, title: "Samenwerking", desc: "Wij werken nauw samen met gemeenten, woningcorporaties en bewoners om oplossingen te realiseren die écht werken." },
];

const OverOns: React.FC = () => (
  <>
    <SEOHead title="Over ons | B-Advice" description="Leer meer over B-Advice: uw specialist in duurzame afvalinzameling en ondergrondse containersystemen in Nederland." />
    <PageHero title="Over ons" subtitle="Ontdek wie wij zijn en waar wij voor staan." />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-foreground mb-6">Wie wij zijn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                B-Advice is opgericht vanuit de overtuiging dat afvalinzameling slimmer, schoner en duurzamer kan. 
                Met jarenlange ervaring in de afvalbranche adviseren en begeleiden wij gemeenten, woningcorporaties 
                en bedrijven bij het realiseren van efficiënte afvaloplossingen.
              </p>
              <p>
                Ons specialisme ligt in ondergrondse containersystemen — de toekomst van afvalinzameling in de 
                bebouwde omgeving. Van eerste advies en ontwerp tot plaatsing, beheer en onderhoud: B-Advice 
                is uw partner in elke fase van het traject.
              </p>
              <p>
                Vanuit ons kantoor in Nieuwland bedienen wij opdrachtgevers in heel Nederland. Met ons digitale 
                platform B-Organized bieden wij daarnaast een unieke tool voor het real-time beheer van containerparken.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-foreground mb-12 text-center">Onze waarden</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Samenwerken?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Wij denken graag met u mee over de beste oplossing voor uw afvalbeheer.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all text-sm">
            Neem contact op <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default OverOns;
