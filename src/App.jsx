import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA"; // Import Here
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfServices";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="overflow-x-hidden font-body">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Login" element={<Auth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Floating CTA Speed Dial */}
      <FloatingCTA />
    </div>
  );
}