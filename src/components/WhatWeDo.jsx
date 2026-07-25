import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap,
  FiLayers,
  FiAward,
  FiTrendingDown,
  FiX,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import {
  Container,
  Eyebrow,
  GhostButton,
  Reveal,
} from "./ui";

import hero2 from "../assets/image/hero2.webp";

const cards = [
  {
    icon: FiZap,
    title: "We complete creatives to boost your business online",
    body: "Sales and branding are just part of the story. We work to understand your ecommerce and marketing goals, then use that knowledge to refine your website and craft creatives that get real, measurable results.",
    process: [
      {
        step: "Discovery Call",
        detail: "We dig into your brand, audience and current creative performance to find the gaps.",
      },
      {
        step: "Creative Strategy",
        detail: "We map out concepts, hooks and formats tailored to your ecommerce goals — not generic templates.",
      },
      {
        step: "Production & Testing",
        detail: "Our team produces the creatives and runs structured A/B tests to find what actually converts.",
      },
      {
        step: "Scale What Works",
        detail: "Winning creatives get scaled across channels while we keep refining the rest.",
      },
    ],
  },
  {
    icon: FiLayers,
    title: "We understand core business principles, not just marketing acronyms",
    body: "We continually test, track and optimise your ad spend for maximum profitability on your ecommerce brand — which basically just means we hate wasting money.",
    process: [
      {
        step: "Audit Your Spend",
        detail: "We review existing ad accounts and identify exactly where budget is being wasted.",
      },
      {
        step: "Profitability Mapping",
        detail: "We tie every campaign back to real margins, not vanity metrics like clicks or impressions.",
      },
      {
        step: "Continuous Optimisation",
        detail: "Weekly tracking and adjustments keep your spend efficient as market conditions shift.",
      },
      {
        step: "Transparent Reporting",
        detail: "You get clear numbers on what's working, so decisions are backed by data, not guesswork.",
      },
    ],
  },
  {
    icon: FiAward,
    title: "We are the top digital ecommerce marketing company",
    body: "We're the top choice for ecommerce and done-for-you brand building and Facebook ads. But it's our done-for-you methods that set us apart from the rest of the field.",
    process: [
      {
        step: "Brand Foundation",
        detail: "We build out positioning, visual identity and messaging that fits your market.",
      },
      {
        step: "Done-For-You Setup",
        detail: "We handle store setup, ad accounts and tracking so nothing slows down your launch.",
      },
      {
        step: "Campaign Launch",
        detail: "Facebook and other ad campaigns go live with structured testing built in from day one.",
      },
      {
        step: "Ongoing Management",
        detail: "We manage day-to-day performance so you can focus on running your business.",
      },
    ],
  },
  {
    icon: FiTrendingDown,
    title: "We help you cut costs while you climb the search results",
    body: "Sales and branding are just part of the story. We work to understand your ecommerce and marketing goals, then refine your website and craft creatives that get real, measurable results.",
    process: [
      {
        step: "Technical SEO Audit",
        detail: "We find what's holding your site back in search rankings and load performance.",
      },
      {
        step: "On-Page Optimisation",
        detail: "Content, structure and metadata get refined to match what your customers are searching for.",
      },
      {
        step: "Cost-Efficient Scaling",
        detail: "We prioritise fixes with the best ranking-to-effort ratio, so budget isn't wasted on low-impact work.",
      },
      {
        step: "Rank & Monitor",
        detail: "We track rankings and traffic monthly, adjusting strategy as search results shift.",
      },
    ],
  },
];

function ProcessModal({ card, onClose }) {
  useEffect(() => {
    if (!card) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [card, onClose]);

  if (!card) return null;
  const Icon = card.icon;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 p-4 backdrop-blur-sm sm:p-6"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-soft"
        >
          {/* header */}
          <div className="relative bg-navy-900 px-7 pb-8 pt-7">
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FiX size={16} />
            </button>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Icon size={19} />
            </span>
            <h3 className="mt-4 max-w-sm font-display text-lg font-bold leading-snug text-white">
              {card.title}
            </h3>
          </div>

          {/* body */}
          <div className="max-h-[65vh] overflow-y-auto px-7 py-6">
            <p className="text-[13.5px] leading-relaxed text-slate-500">{card.body}</p>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-blue-600">
              How it works
            </p>

            <div className="mt-4 flex flex-col gap-5">
              {card.process.map((p, i) => (
                <div key={p.step} className="flex gap-4">
                  <div className="flex flex-none flex-col items-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-blue-600">
                      {i + 1}
                    </span>
                    {i < card.process.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-navy-900/10" />
                    )}
                  </div>
                  <div className="pb-1">
                    <p className="text-[13.5px] font-bold text-navy-900">{p.step}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-blue-700"
            >
              <FiCheck size={15} />
              Get Started With This
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="bg-sky-100 py-24 sm:py-28">
      <Container>

        {/* Intro Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              What <span className="text-blue-600">We Do?</span>
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
              We're passionate about helping brands find their creative voice.
              Our one-stop ecommerce marketing company helps clients thrive in
              a changing digital world by leveraging their unique strengths to
              build a customised roadmap to success.
            </p>

            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
              Think of our team as an extension of your marketing department —
              dedicated to growing your business, whether you're an established
              brand or a young startup finding its footing.
            </p>

            <GhostButton href="#services" className="mt-7 text-blue-600">
              Explore Services
            </GhostButton>
          </Reveal>


          {/* Illustration */}
          <Reveal
            delay={0.1}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Soft background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

            <img
              src={hero2}
              alt="eMark Setu store performance and growth strategy"
              className="relative z-10 h-auto w-full object-contain"
            />
          </Reveal>

        </div>


        {/* Feature Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={19} />
                  </span>

                  <h3 className="mt-5 font-display text-[15px] font-bold leading-snug text-navy-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                    {card.body}
                  </p>

                  <button
                    onClick={() => setActiveCard(card)}
                    className="mt-5 flex items-center gap-1.5 text-[12.5px] font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Learn More
                    <FiArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                </div>
              </Reveal>
            );
          })}
        </div>

      </Container>

      <ProcessModal card={activeCard} onClose={() => setActiveCard(null)} />

    </section>
  );
}