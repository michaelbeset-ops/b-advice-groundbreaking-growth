import React from "react";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => (
  <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">{subtitle}</p>
        )}
      </AnimatedSection>
    </div>
  </section>
);

export default PageHero;
