import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product niet gevonden</h1>
          <Link to="/producten" className="text-primary hover:text-secondary transition-colors font-semibold">
            Terug naar producten
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
    toast.success(`${qty}x ${product.name} toegevoegd aan winkelwagen`);
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${product.name} | B-Advice`}
        description={product.shortDescription}
      />
      <div className="bg-hero pt-28 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/producten" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Terug naar producten
          </Link>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              {/* PRODUCT IMAGE PLACEHOLDER — replace with actual product photo */}
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} — ondergrondse container van B-Advice`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/15 text-secondary text-xs font-semibold rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{product.name}</h1>
                {/* PRODUCT DESCRIPTION PLACEHOLDER — easy to fill in */}
                <p className="text-muted-foreground leading-relaxed mb-8">{product.fullDescription}</p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Specificaties</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map((spec) => (
                        <tr key={spec.label} className="border-b border-border">
                          <td className="py-3 font-medium text-foreground w-1/3">{spec.label}</td>
                          <td className="py-3 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors font-bold">−</button>
                    <span className="w-12 text-center font-semibold text-foreground">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors font-bold">+</button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors text-sm w-full justify-center sm:w-auto"
                >
                  <ShoppingCart className="w-5 h-5" />
                  In winkelwagen
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground mb-8">Gerelateerde producten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/producten/${p.slug}`} className="group rounded-xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
