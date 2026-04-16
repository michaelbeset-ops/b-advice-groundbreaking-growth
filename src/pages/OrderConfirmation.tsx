import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const OrderConfirmation: React.FC = () => (
  <>
    <SEOHead title="Bestelling bevestigd | B-Advice" description="Uw bestelling is succesvol geplaatst. Wij nemen zo snel mogelijk contact met u op." />
    <div className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20">
      <div className="text-center max-w-md mx-auto px-4">
        <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold text-foreground mb-4">Bedankt voor uw bestelling!</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Uw bestelling is succesvol ontvangen. Wij nemen zo snel mogelijk contact met u op om de details te bespreken en de levering in te plannen.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm">
          Terug naar home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </>
);

export default OrderConfirmation;
