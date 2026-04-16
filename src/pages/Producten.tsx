import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Producten: React.FC = () => {
  const { addItem } = useCart();

  const handleAdd = (p: typeof products[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image });
    toast.success(`${p.name} toegevoegd aan winkelwagen`);
  };

  return (
    <>
      <SEOHead title="Producten | B-Advice" description="Bekijk ons assortiment ondergrondse containers: restafval, GFT, papier, glas en textiel. Duurzaam en innovatief." />
      <PageHero title="Producten" subtitle="Hoogwaardige ondergrondse containers voor elke afvalstroom." />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.1}>
                <div className="group rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <Link to={`/producten/${p.slug}`} className="block aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} — ondergrondse container van B-Advice`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <Link to={`/producten/${p.slug}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{p.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">{p.price}</span>
                      <button
                        onClick={() => handleAdd(p)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        In winkelwagen
                      </button>
                    </div>
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

export default Producten;
