import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

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
          <Route path="/Login" element={<Auth/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}