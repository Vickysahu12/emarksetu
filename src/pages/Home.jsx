import SEO from "../components/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Insights from "../components/Insights";

export default function Home() {
  return (
    <>
      <SEO 
        title="eMark Setu — Build, Manage & Scale Ecommerce Brands"
        description="Full-service ecommerce agency in Surat. Amazon account management, Flipkart cataloging, PPC marketing, and multi-channel scaling."
        keywords="eMark Setu, Amazon seller agency, Flipkart account manager, e-commerce company Surat"
        canonicalUrl="https://emarksetu.com"
      />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyChooseUs />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Insights />
    </>
  );
}