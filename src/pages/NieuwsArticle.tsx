import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { articles } from "@/data/articles";

const NieuwsArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artikel niet gevonden</h1>
          <Link to="/nieuws" className="text-primary hover:text-secondary transition-colors font-semibold">Terug naar nieuws</Link>
        </div>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id);

  return (
    <>
      <SEOHead title={`${article.title} | B-Advice`} description={article.excerpt} />
      <div className="bg-hero pt-28 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/nieuws" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Terug naar nieuws
          </Link>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="aspect-[16/9] rounded-2xl bg-muted overflow-hidden mb-8">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString("nl-NL")}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
                <span className="px-2 py-0.5 bg-secondary/15 text-secondary text-xs font-semibold rounded-full">{article.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">{article.title}</h1>
              {/* ARTICLE CONTENT — full content area, easy to edit */}
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                {article.content.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {related.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-2xl font-extrabold text-foreground mb-6">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((a) => (
                  <Link key={a.id} to={`/nieuws/${a.slug}`} className="group rounded-xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all">
                    <div className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NieuwsArticle;
