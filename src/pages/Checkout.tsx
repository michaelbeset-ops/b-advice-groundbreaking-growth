import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";

const Checkout: React.FC = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", telefoon: "", straat: "", postcode: "", plaats: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Hier wordt de betaling afgehandeld via WooCommerce + Mollie/iDEAL
    clearCart();
    navigate("/bestelling-bevestigd");
  };

  return (
    <>
      <SEOHead title="Afrekenen | B-Advice" description="Rond uw bestelling af bij B-Advice." />
      <PageHero title="Afrekenen" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">Uw gegevens</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Naam *", name: "naam", type: "text", required: true },
                    { label: "Bedrijf", name: "bedrijf", type: "text", required: false },
                    { label: "E-mailadres *", name: "email", type: "email", required: true },
                    { label: "Telefoonnummer", name: "telefoon", type: "tel", required: false },
                    { label: "Straat + huisnummer *", name: "straat", type: "text", required: true },
                    { label: "Postcode *", name: "postcode", type: "text", required: true },
                    { label: "Plaats *", name: "plaats", type: "text", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-medium text-foreground mb-1">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        required={f.required}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment gateway placeholder */}
              <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">Betaalmethode</h3>
                <div className="p-4 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground">
                  {/* PLACEHOLDER: Koppel hier Mollie/iDEAL via WooCommerce voor live betalingen */}
                  <p className="font-medium text-foreground mb-1">⚠️ Betaalgateway nog niet gekoppeld</p>
                  <p>Sluit Mollie of een andere iDEAL-provider aan via WooCommerce om online betalingen te ontvangen. Dit is een placeholder voor de betaalmodule.</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors text-sm"
              >
                Bestelling plaatsen
              </button>
            </form>

            <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 h-fit">
              <h3 className="font-bold text-foreground text-lg mb-4">Besteloverzicht</h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                    <span className="text-foreground font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-bold text-foreground">
                  <span>Totaal</span>
                  <span>Op aanvraag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
