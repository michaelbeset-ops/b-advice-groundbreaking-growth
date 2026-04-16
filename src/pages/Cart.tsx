import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <>
        <SEOHead title="Winkelwagen | B-Advice" description="Uw winkelwagen is leeg. Bekijk ons assortiment ondergrondse containers." />
        <PageHero title="Winkelwagen" />
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Uw winkelwagen is leeg</h2>
            <Link to="/producten" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm">
              Bekijk producten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title="Winkelwagen | B-Advice" description="Bekijk en beheer de producten in uw winkelwagen." />
      <PageHero title="Winkelwagen" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card border border-border/50">
                  <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 h-fit">
              <h3 className="font-bold text-foreground text-lg mb-4">Overzicht</h3>
              <div className="space-y-2 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                    <span className="text-foreground font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between font-bold text-foreground">
                  <span>Subtotaal</span>
                  <span>Op aanvraag</span>
                </div>
              </div>
              <Link to="/checkout" className="block w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl text-center hover:bg-primary/90 transition-colors text-sm">
                Doorgaan naar bestelling
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
