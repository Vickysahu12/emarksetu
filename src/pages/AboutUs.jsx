import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckDouble } from "react-icons/fa";
import {
  FiUsers,
  FiCompass,
  FiTarget,
  FiBarChart2,
  FiMonitor,
  FiCoffee,
  FiArrowRight,
  FiAward,
  FiGlobe,
  FiShoppingBag,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import SEO from "../components/SEO";
import hero from "../assets/image/bg-image.webp";
import { Container, Eyebrow, PrimaryButton, Reveal } from "../components/ui";

// Marketplace Logo Fallback Component
const MarketplaceLogo = ({ name, domain }) => {
  const [hasError, setHasError] = useState(false);
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
      {!hasError ? (
        <img
          src={logoUrl}
          alt={`${name} E-commerce Platform`}
          onError={() => setHasError(true)}
          className="h-4 w-4 object-contain"
        />
      ) : (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
          {name.charAt(0)}
        </span>
      )}
      <span className="text-[13px] font-semibold text-slate-800">{name}</span>
    </div>
  );
};

const marketplaces = [
  { name: "Amazon", domain: "amazon.in" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Myntra", domain: "myntra.com" },
  { name: "Nykaa", domain: "nykaa.com" },
  { name: "eBay", domain: "ebay.com" },
  { name: "Ajio", domain: "ajio.com" },
];

const encompassing = [
  "Encompassing Sales",
  "Item Listing",
  "Order Management",
  "Customer Support",
  "Procurement",
  "Automated Tools",
  "Digital Marketing & Promotion",
];

const stats = [
  { value: "450+", label: "Team Members", icon: FiUsers },
  { value: "950+", label: "Happy Clients", icon: FiAward },
  { value: "200+", label: "Integrations", icon: FiGlobe },
];

const values = [
  {
    icon: FiUsers,
    title: "Who We Are",
    body: "eMark Setu is a group of companies that deals in all sorts of branding, advertisement and ecommerce solutions. We provide a 360-degree solution for all your business growth needs.",
  },
  {
    icon: FiCompass,
    title: "Our Philosophy",
    body: "We believe the best solutions come from people who are determined enough to solve problems. That's why we brainstorm every detail to create marketing that people actually enjoy.",
  },
  {
    icon: FiTarget,
    title: "Our Approach",
    body: "Our approach combines strategy, creativity and technology to build solutions that are effective, memorable and difficult to replicate.",
  },
];

function DottedRule() {
  return (
    <div className="mt-4 flex gap-1.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="h-[3px] w-[3px] rounded-full bg-blue-600/40"
        />
      ))}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <FaCheckDouble size={10} />
      </span>
      <span className="text-[13.5px] font-semibold text-slate-800">
        {children}
      </span>
    </div>
  );
}

// Animation variants specifically for Our Story Grid
const storyGridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const storyCardVariant = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function AboutUs() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "eMark Setu",
    "url": "https://emarksetu.com",
    "logo": "https://emarksetu.com/logo.webp",
    "founder": {
      "@type": "Person",
      "name": "Karan Manishkumar Pathak"
    },
    "description": "Full-service e-commerce management agency specializing in Amazon, Flipkart, Myntra, and multi-channel brand scaling.",
    "sameAs": [
      "https://www.linkedin.com/company/emarksetu",
      "https://www.instagram.com/emarksetu"
    ]
  };

  return (
    <>
      <SEO
        title="About Us — E-Commerce Growth Agency"
        description="Learn about eMark Setu, founded by Karan Manishkumar Pathak. We provide 360-degree e-commerce solutions to launch, manage, and scale brands online."
        keywords="eMark Setu About, E-commerce Agency Surat, Karan Pathak eMark Setu, Amazon Partner Agency India"
        canonicalUrl="https://emarksetu.com/about-us"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="bg-white font-sans text-slate-800">
        {/* HERO SECTION */}
        <section
          className="relative overflow-hidden bg-slate-900 bg-cover bg-center bg-no-repeat pb-28 pt-[140px] sm:pb-32"
          style={{ backgroundImage: hero ? `url(${hero})` : undefined }}
        >
          <div className="pointer-events-none absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[130px]" />

          <Container className="relative z-10">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-400">
                  <FiZap size={13} />
                  About eMark Setu
                </span>

                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
                  We Build Brands That{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                    Grow Online.
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300">
                  We help businesses launch, manage and scale their ecommerce
                  journey with the right combination of technology, creativity and
                  strategy.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <PrimaryButton href="/contact-us">
                    Let's Work Together
                    <FiArrowRight size={15} />
                  </PrimaryButton>

                  <a
                    href="#our-story"
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-white/15"
                  >
                    Discover Our Story
                    <FiArrowRight size={14} />
                  </a>
                </div>

                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-7">
                  {stats.map(({ value, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
                    >
                      <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-400 border border-white/10 sm:flex">
                        <Icon size={18} />
                      </span>

                      <div className="text-center sm:text-left">
                        <p className="font-display text-2xl font-black text-white sm:text-3xl">
                          {value}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase font-semibold text-slate-400 tracking-wider sm:text-[11px]">
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* OUR STORY */}
        <section id="our-story" className="bg-white py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>

                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  A Young Team With A{" "}
                  <span className="text-blue-600">Big Vision.</span>
                </h2>

                <DottedRule />

                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  We are a young startup founded by{" "}
                  <strong className="font-bold text-slate-900">
                    Karan Manishkumar Pathak
                  </strong>
                  , built with a simple mission — make it easier for businesses to
                  sell, grow and succeed online.
                </p>

                <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-slate-500">
                  From launching marketplace accounts to managing products, orders,
                  marketing and customer support, we provide complete end-to-end
                  ecommerce solutions under one roof.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5 max-w-lg">
                  {marketplaces.map((item) => (
                    <MarketplaceLogo
                      key={item.name}
                      name={item.name}
                      domain={item.domain}
                    />
                  ))}
                </div>
              </Reveal>

              {/* ANIMATED GRID CARDS */}
              <motion.div
                variants={storyGridContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div
                  variants={storyCardVariant}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-3xl bg-blue-600 p-6 shadow-lg shadow-blue-600/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiUsers size={36} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="text-4xl font-black text-white">15+</p>
                    <p className="mt-1 text-[12px] font-medium text-blue-100">
                      People building better solutions
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={storyCardVariant}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex aspect-square flex-col justify-between rounded-3xl bg-slate-900 p-6 shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiCoffee size={36} className="text-blue-400" />
                  </motion.div>
                  <div>
                    <p className="text-2xl font-bold text-white">Young</p>
                    <p className="mt-1 text-[12px] text-slate-400">
                      Curious minds. Big ideas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={storyCardVariant}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex aspect-square flex-col justify-between rounded-3xl border border-slate-200 bg-sky-50/70 p-6 shadow-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiBarChart2 size={36} className="text-blue-600" />
                  </motion.div>
                  <div>
                    <p className="text-3xl font-black text-slate-900">250+</p>
                    <p className="mt-1 text-[12px] font-medium text-slate-600">
                      Businesses supported
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={storyCardVariant}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex aspect-square flex-col justify-between rounded-3xl border border-blue-200 bg-blue-50/60 p-6 shadow-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiMonitor size={36} className="text-blue-600" />
                  </motion.div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">360°</p>
                    <p className="mt-1 text-[12px] font-medium text-slate-600">
                      End-to-end ecommerce solutions
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* OUR SOLUTION */}
        <section className="bg-slate-50/80 py-20 sm:py-28 border-y border-slate-100">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <div className="relative mx-auto max-w-[460px]">
                  <div className="absolute inset-8 rounded-full bg-blue-300/30 blur-3xl" />

                  <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
                    <div className="rounded-2xl bg-slate-900 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-blue-400">
                            Ecommerce Operations
                          </p>
                          <p className="mt-1 text-2xl font-extrabold text-white">
                            All In One
                          </p>
                        </div>

                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                          <FiLayers size={19} />
                        </span>
                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        {[
                          [FiShoppingBag, "Sales"],
                          [FiMonitor, "Listings"],
                          [FiBarChart2, "Growth"],
                          [FiUsers, "Support"],
                        ].map(([Icon, label]) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                          >
                            <Icon size={18} className="text-blue-400" />
                            <p className="mt-3 text-[12px] font-bold text-white">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <Eyebrow>Our Solution</Eyebrow>

                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  Everything You Need To{" "}
                  <span className="text-blue-600">Sell Better Online.</span>
                </h2>

                <DottedRule />

                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  eMark Setu is your one-stop solution for managing products,
                  marketplaces and digital growth. We combine people, processes
                  and technology to help businesses stay competitive.
                </p>

                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {encompassing.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* VALUES */}
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>What We Stand For</Eyebrow>

              <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                The Values Behind <span className="text-blue-600">Our Work.</span>
              </h2>

              <p className="mt-4 text-[14px] leading-relaxed text-slate-500">
                Everything we do is driven by curiosity, creativity and a commitment
                to helping businesses grow better.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, body }, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl">
                    <div>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={24} />
                      </span>

                      <h3 className="mt-6 font-display text-lg font-bold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                        {body}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-[12px] font-bold text-blue-600">
                      <span>Learn More</span>
                      <FiArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-slate-900 py-20 sm:py-24">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

                <div className="relative flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
                  <div>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      <FiZap size={13} />
                      Let's grow together
                    </span>

                    <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
                      Ready to build something bigger?
                    </h2>

                    <p className="mt-2 text-[13.5px] text-slate-400">
                      Your next stage of growth starts with one conversation.
                    </p>
                  </div>

                  <PrimaryButton href="/contact-us">
                    Talk To Us
                    <FiArrowRight size={15} />
                  </PrimaryButton>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}