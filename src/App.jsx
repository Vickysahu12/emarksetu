import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <WhyChooseUs />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}