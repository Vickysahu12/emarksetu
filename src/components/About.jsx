import { FiShoppingCart, FiTruck, FiTrendingUp, FiTarget } from "react-icons/fi";
import { Container, Eyebrow, GhostButton, Reveal } from "./ui";
import hero1 from "../assets/image/hero1.webp";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">

        {/* Illustration Section */}
        <Reveal className="group relative mx-auto w-full max-w-[520px]">
          
          {/* 1. Pulsing Soft Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sky-100 to-blue-100/60 blur-3xl animate-pulse transition-opacity duration-500" />

          {/* 2. Main Image with Hover Float & Elevation */}
          <div className="relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
            <img
              src={hero1}
              alt="eMark Setu team managing an ecommerce store"
              className="h-auto w-full object-contain drop-shadow-sm transition-all duration-500 group-hover:drop-shadow-xl"
            />
          </div>

          {/* 3. Floating Interactive Badge - Top Right */}
          <div className="absolute -top-3 right-2 z-20 flex items-center gap-2.5 rounded-xl bg-white/90 p-2.5 pr-4 shadow-lg backdrop-blur-md ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:scale-105 sm:-right-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <FiTrendingUp className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Store Growth</p>
              <p className="text-xs font-bold text-navy-900">Scale Fast</p>
            </div>
          </div>

          {/* 4. Floating Interactive Badge - Bottom Left */}
          <div className="absolute bottom-10 -left-2 z-20 flex items-center gap-2.5 rounded-xl bg-white/90 p-2.5 pr-4 shadow-lg backdrop-blur-md ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-1 hover:scale-105 sm:-left-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FiShoppingCart className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Full Service</p>
              <p className="text-xs font-bold text-navy-900">100% In-House</p>
            </div>
          </div>

          {/* 5. Experience Badge with Interactive Hover Scale */}
          <div className="absolute -bottom-4 right-2 z-20 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 text-white shadow-soft transition-all duration-300 hover:scale-110 hover:rotate-3 sm:-right-4 cursor-pointer">
            <span className="text-center font-display text-lg font-bold leading-tight">
              8+
              <br />
              yrs
            </span>
          </div>

        </Reveal>

        {/* Content Section */}
        <Reveal delay={0.1}>
          <Eyebrow>About Us</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Who is <span className="text-blue-600">eMark Setu?</span>
          </h2>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
            At eMark Setu, an ecommerce marketing company, we build, manage,
            operate, fulfil and advertise your online, ready-to-go turnkey
            ecommerce store. Our agency provides full service from start to
            finish — all in-house.
          </p>

          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
            No third parties, no hand-offs, no guesswork — just one dedicated
            team taking your brand from strategy to shipping.
          </p>

          <GhostButton href="/aboutus" className="mt-7 text-blue-600">
            Read More
          </GhostButton>
        </Reveal>

      </Container>
    </section>
  );
}