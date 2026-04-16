import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", telefoon: "", bericht: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bericht verzonden! Wij nemen zo snel mogelijk contact met u op.");
    setForm({ naam: "", bedrijf: "", email: "", telefoon: "", bericht: "" });
  };

  return (
    <>
      <SEOHead title="Contact | B-Advice" description="Neem contact op met B-Advice voor al uw vragen over afvalinzameling en ondergrondse containers." />
      <PageHero title="Contact" subtitle="Neem gerust contact met ons op. Wij helpen u graag." />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card border border-border/50 p-8 space-y-6">
                  <h2 className="text-2xl font-extrabold text-foreground mb-2">Stuur ons een bericht</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Naam *</label>
                      <input type="text" name="naam" value={form.naam} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Bedrijf</label>
                      <input type="text" name="bedrijf" value={form.bedrijf} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">E-mailadres *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Telefoonnummer</label>
                      <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Bericht *</label>
                    <textarea name="bericht" value={form.bericht} onChange={handleChange} required rows={5} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors text-sm">
                    <Send className="w-4 h-4" /> Verzenden
                  </button>
                </form>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 space-y-4">
                  <h3 className="font-bold text-foreground text-lg">Contactgegevens</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Adres</p>
                        <p className="text-muted-foreground">Achterdijk 26<br />Nieuwland (UT) – Nederland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Telefoon</p>
                        <a href="tel:+31643125245" className="text-muted-foreground hover:text-secondary transition-colors">+31 (6) 431 25 245</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">E-mail</p>
                        <a href="mailto:info@b-advice.info" className="text-muted-foreground hover:text-secondary transition-colors">info@b-advice.info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                {/* Google Maps embed placeholder — Achterdijk 26, Nieuwland */}
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card">
                  <iframe
                    title="Locatie B-Advice — Achterdijk 26, Nieuwland"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.5!2d5.1!3d51.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzQ4LjAiTiA1wrAwNicwMC4wIkU!5e0!3m2!1snl!2snl!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
