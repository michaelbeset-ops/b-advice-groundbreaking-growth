import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { articles } from "@/data/articles";

const Nieuws: React.FC = () => (
  <>
    <SEOHead title="Nieuws | B-Advice" description="Lees het laatste nieuws over ondergrondse afvalinzameling, duurzaamheid en het B-Organized platform." />
    <PageHero title="Nieuws" subtitle="Het laatste nieuws over afvalinzameling en duurzaamheid." />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <AnimatedSection key={a.id} delay={i * 0.1}>
              <Link to={`/nieuws/${a.slug}`} className="group block rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all h-full">
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(a.date).toLocaleDateString("nl-NL")}</span>
                    <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {a.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
                    Lees meer <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Nieuws;
