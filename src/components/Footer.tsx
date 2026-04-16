import React from "react";
import { Link } from "react-router-dom";
import { TreePine, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <TreePine className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">B-Advice</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Uw specialist in duurzame afvalinzameling en ondergrondse containersystemen. Wij maken Nederland schoner, groener en efficiënter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-secondary mb-4">Navigatie</h3>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Over ons", to: "/over-ons" },
              { label: "Diensten", to: "/diensten" },
              { label: "Producten", to: "/producten" },
              { label: "B-Organized", to: "/b-organized" },
              { label: "Nieuws", to: "/nieuws" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-secondary mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              Achterdijk 26, Nieuwland (UT) – Nederland
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <a href="tel:+31643125245" className="hover:text-secondary transition-colors">+31 (6) 431 25 245</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a href="mailto:info@b-advice.info" className="hover:text-secondary transition-colors">info@b-advice.info</a>
            </li>
          </ul>
        </div>

        {/* B-Organized */}
        <div>
          <h3 className="font-semibold text-secondary mb-4">B-Organized</h3>
          <p className="text-primary-foreground/70 text-sm mb-4">
            Beheer uw containerpark digitaal via ons platform.
          </p>
          <a
            href="https://b-organized.info/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-secondary text-secondary-foreground font-semibold text-sm rounded-lg hover:brightness-110 transition-all"
          >
            Login B-Organized
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} B-Advice. Alle rechten voorbehouden.
        </p>
        <div className="flex gap-4 text-sm text-primary-foreground/50">
          <Link to="/contact" className="hover:text-secondary transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Voorwaarden</Link>
        </div>
      </div>
    </div>

    {/* Schema.org LocalBusiness markup */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "B-Advice",
          description: "Specialist in duurzame afvalinzameling en ondergrondse containersystemen",
          url: "https://b-advice.info",
          telephone: "+31643125245",
          email: "info@b-advice.info",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Achterdijk 26",
            addressLocality: "Nieuwland",
            addressRegion: "UT",
            addressCountry: "NL",
          },
        }),
      }}
    />
  </footer>
);

export default Footer;
