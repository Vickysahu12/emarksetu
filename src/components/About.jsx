import { FiShoppingCart, FiTruck, FiTrendingUp, FiTarget } from "react-icons/fi";
import { Container, Eyebrow, GhostButton, Reveal } from "./ui";
import hero1 from "../assets/image/hero1.webp";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">

        {/* Illustration */}
        <Reveal className="relative mx-auto w-full max-w-[520px]">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-50 blur-3xl" />

          <img
            src={hero1}
            alt="eMark Setu team managing an ecommerce store"
            className="relative z-10 h-auto w-full object-contain"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-4 right-2 z-20 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 text-white shadow-soft sm:-right-4">
            <span className="text-center font-display text-lg font-bold leading-tight">
              8+
              <br />
              yrs
            </span>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.1}>
          <Eyebrow>About Us</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            eMark <span className="text-blue-600">Setu</span>
          </h2>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
            We're an ecommerce marketing company that builds, manages,
            operates, fulfils and advertises your online, ready-to-go turnkey
            store. Our agency delivers full service from strategy to shipping,
            entirely in-house — no third parties, no hand-offs, no guesswork.
          </p>

          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Founded in Surat in 2021, we approach every brand with fresh eyes
            and a customised roadmap, so the strategy fits your business —
            not the other way around.
          </p>

          <GhostButton href="#services" className="mt-7 text-blue-600">
            Read More
          </GhostButton>
        </Reveal>

      </Container>
    </section>
  );
}