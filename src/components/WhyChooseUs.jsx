import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiUsers, FiTrendingUp, FiRepeat, FiAward, FiDatabase, FiEye, FiHeadphones, FiTarget, FiArrowRight } from "react-icons/fi";
import { Container, Eyebrow, PrimaryButton, Reveal } from "./ui";
import GrowthLine from "./GrowthLine";

const stats = [
  { icon: FiUsers, value: 250, suffix: "+", label: "Happy Clients" },
  { icon: FiTrendingUp, value: 350, suffix: "+", label: "Projects Delivered" },
  { icon: FiRepeat, value: 98, suffix: "%", label: "Client Retention" },
  { icon: FiAward, value: 8, suffix: "+", label: "Years Experience" },
];

const points = [
  { icon: FiDatabase, title: "Data-Driven Strategies", body: "Every decision is backed by data and performance insights." },
  { icon: FiEye, title: "Transparent Reporting", body: "Clear insights and reporting you can trust, always." },
  { icon: FiHeadphones, title: "Dedicated Support", body: "Our team is always here to support your growth." },
  { icon: FiTarget, title: "ROI Focused", body: "We focus on what matters most — your return." },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1400;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
      {n}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* subtle ambient accent, top-left, echoes hero's mesh language */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Why Choose Us?</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Solutions that drive <span className="text-blue-600">real growth</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              We combine data-driven strategy with creative excellence to
              deliver measurable results that help your brand stand out and
              scale faster.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7">
              {points.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="group flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-sky-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-navy-900">{title}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {stats.map(({ icon: Icon, value, suffix, label }, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-2xl border border-navy-900/[0.06] bg-sky-100 p-5 shadow-card"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                      <Icon size={16} />
                    </span>
                    <div className="mt-4">
                      <Counter value={value} suffix={suffix} />
                    </div>
                    <p className="mt-1 text-[12.5px] font-medium text-slate-500">{label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl bg-navy-900 p-7 shadow-soft">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600/30 blur-3xl transition-transform duration-500 group-hover:scale-110" />
                <GrowthLine className="pointer-events-none absolute -bottom-2 right-0 h-24 w-40 opacity-70" />
                <p className="font-display text-lg font-bold text-white">
                  Ready to grow your business online?
                </p>
                <p className="mt-2 max-w-xs text-[13px] text-slate-400">
                  Let's build, scale and grow your brand with strategies that
                  actually work.
                </p>
                <PrimaryButton
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 !bg-white !text-navy-900 !shadow-none hover:!bg-sky-50"
                >
                  Get Free Consultation
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={15} />
                </PrimaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}