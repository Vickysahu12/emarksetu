import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Container, Eyebrow, Reveal } from "./ui";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most brands start seeing measurable improvements in ad performance or traffic within the first 3-4 weeks. Bigger shifts — like revenue growth or ranking improvements — typically show up within 60-90 days, depending on your starting point and industry.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. We work month-to-month by default. If a plan isn't working for your brand, you can pause or cancel anytime — we'd rather earn your business every month than lock you in.",
  },
  {
    q: "What platforms do you manage ads on?",
    a: "We primarily manage Facebook, Instagram and Google Ads, with support for Pinterest and TikTok depending on your brand and audience. We'll recommend the right mix based on where your customers actually are.",
  },
  {
    q: "Will I get reports on how my campaigns are performing?",
    a: "Yes — every plan includes performance reporting, and Growth and Scale plans include regular strategy calls where we walk you through the numbers and what we're doing next.",
  },
  {
    q: "I already have a store built. Can you just handle marketing?",
    a: "Absolutely. Many of our clients come to us with an existing store. We'll audit what's there, fix anything holding back conversions, and take over marketing without needing a full rebuild.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "Since there's no long-term lock-in, you're never stuck. That said, our first step is always to diagnose what's not working and adjust — most concerns get resolved within a strategy call rather than a cancellation.",
  },
];

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-navy-900/[0.08] py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[14.5px] font-bold text-navy-900">{faq.q}</span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sky-100 text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <FiPlus size={14} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pt-3 text-[13.5px] leading-relaxed text-slate-500">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-sky-100 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Questions? <span className="text-blue-600">We've got answers</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-500">
              Can't find what you're looking for? Reach out and our team will
              get back to you within a business day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white px-7 shadow-card sm:px-8">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}