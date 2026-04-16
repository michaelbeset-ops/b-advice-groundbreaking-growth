import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Over ons", to: "/over-ons" },
  { label: "Diensten", to: "/diensten" },
  { label: "Producten", to: "/producten" },
  { label: "B-Organized", to: "/b-organized" },
  { label: "Nieuws", to: "/nieuws" },
  { label: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — SVG schaalbaar en scherp op elk scherm */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo.svg"
              alt="B-Advice Project & Wastemanagement"
              className="h-11 w-auto transition-transform group-hover:scale-105"
              width="220"
              height="55"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + "/") && link.to !== "/"
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/winkelwagen"
              className="relative p-2 text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <a
              href="https://b-organized.info/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground font-semibold text-sm rounded-lg hover:brightness-110 transition-all glow-accent"
            >
              Login B-Organized
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-primary-foreground"
              aria-label="Menu openen"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-lg border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-secondary/20 text-secondary"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://b-organized.info/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-secondary text-secondary-foreground font-semibold text-sm rounded-lg text-center mt-2"
              >
                Login B-Organized
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
