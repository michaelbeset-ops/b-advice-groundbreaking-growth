import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import Producten from "./pages/Producten";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import BOrganized from "./pages/BOrganized";
import Nieuws from "./pages/Nieuws";
import NieuwsArticle from "./pages/NieuwsArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/diensten" element={<Diensten />} />
                <Route path="/producten" element={<Producten />} />
                <Route path="/producten/:slug" element={<ProductDetail />} />
                <Route path="/winkelwagen" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/bestelling-bevestigd" element={<OrderConfirmation />} />
                <Route path="/b-organized" element={<BOrganized />} />
                <Route path="/nieuws" element={<Nieuws />} />
                <Route path="/nieuws/:slug" element={<NieuwsArticle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
