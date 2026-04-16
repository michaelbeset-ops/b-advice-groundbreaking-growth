import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Recycle, Wrench, ClipboardList, TrendingUp, Settings, FileText, Users, Monitor } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const iconComponents: Record<string, React.ReactNode> = {
  Recycle: <Recycle className="w-10 h-10" />,
  Wrench: <Wrench className="w-10 h-10" />,
  ClipboardList: <ClipboardList className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
  Settings: <Settings className="w-10 h-10" />,
  FileText: <FileText className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
  Monitor: <Monitor className="w-10 h-10" />,
};

const DienstDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Dienst niet gevonden</h1>
          <Link to="/diensten" className="text-primary hover:text-secondary transition-colors font-semibold">
            Terug naar diensten
          </Link>
        </div>
      </div>
    );
  }

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${service.title} | B-Advice`}
        description={service.shortDescription}
      />

      {/* Hero banner */}
      <div className="bg-hero pt-28 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/diensten"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar diensten
          </Link>

          <div className="flex items-start gap-6 max-w-3xl">
            <div className="w-20 h-20 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 border border-secondary/20">
              {iconComponents[service.icon]}
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-secondary/15 text-secondary text-xs font-semibold rounded-full border border-secondary/20 mb-3">
                Dienst
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Artikel inhoud */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="prose prose-lg max-w-none">
                  {service.fullDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Voordelen */}
              <AnimatedSection delay={0.1}>
                <div className="mt-10 p-8 rounded-2xl bg-muted/50 border border-border/50">
                  <h2 className="text-xl font-extrabold text-foreground mb-6">
                    Wat levert het u op?
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Zijbalk: CTA + contact */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                {/* Offerte aanvragen */}
                <div className="rounded-2xl bg-hero p-6 border border-primary-foreground/10">
                  <h3 className="text-lg font-extrabold text-primary-foreground mb-2">
                    Interesse in {service.title}?
                  </h3>
                  <p className="text-sm text-primary-foreground/70 mb-5">
                    Neem contact op voor een vrijblijvend gesprek. Wij denken graag met u mee.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-secondary text-secondary-foreground font-bold rounded-xl hover:brightness-110 transition-all text-sm"
                  >
                    Neem contact op
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Direct contact */}
                <div className="rounded-2xl bg-card p-6 border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-4">Direct contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+31643125245"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      +31 (6) 431 25 245
                    </a>
                    <a
                      href="mailto:info@b-advice.info"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      info@b-advice.info
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde diensten */}
      {related.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-extrabold text-foreground mb-8">Andere diensten</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((s) => (
                  <Link
                    key={s.id}
                    to={`/diensten/${s.slug}`}
                    className="group p-6 rounded-xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      {React.cloneElement(iconComponents[s.icon] as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{s.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-semibold group-hover:text-secondary transition-colors">
                      Lees meer <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
};

export default DienstDetail;
