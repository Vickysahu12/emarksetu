import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
import { Container, Eyebrow, Reveal } from "./ui";

const cases = [
  {
    brand: "UrbanVibes",
    industry: "Fashion & Apparel",
    color: "bg-blue-600",
    before: { label: "ROAS", value: "1.8x" },
    after: { label: "ROAS", value: "4.2x" },
    result: "Scaled monthly ad spend 3x while more than doubling return, in under 90 days.",
  },
  {
    brand: "FitGlow",
    industry: "Health & Wellness",
    color: "bg-gold-500",
    before: { label: "Conversion Rate", value: "1.1%" },
    after: { label: "Conversion Rate", value: "3.6%" },
    result: "A full storefront redesign plus creative overhaul tripled on-site conversions.",
  },
  {
    brand: "Luxe & Co.",
    industry: "Home & Lifestyle",
    color: "bg-emerald-500",
    before: { label: "Monthly Revenue", value: "₹4L" },
    after: { label: "Monthly Revenue", value: "₹12L+" },
    result: "Combined SEO, paid social and retention flows to 3x monthly revenue in one quarter.",
  },
];

function CaseCard({ c }) {
  return (
    <div className="flex w-[320px] flex-none flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:w-[360px]">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-[13px] font-bold text-white ${c.color}`}>
          {c.brand.slice(0, 2).toUpperCase()}
        </span>
        <div>
          <p className="text-[13.5px] font-bold text-white">{c.brand}</p>
          <p className="text-[11.5px] text-slate-400">{c.industry}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 rounded-xl bg-navy-900/60 p-4">
        <div className="flex-1 text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-500">Before</p>
          <p className="mt-1 font-display text-lg font-bold text-slate-400">{c.before.value}</p>
        </div>
        <FiArrowUpRight className="flex-none text-blue-400" size={18} />
        <div className="flex-1 text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-wide text-blue-400">After</p>
          <p className="mt-1 font-display text-lg font-bold text-white">{c.after.value}</p>
        </div>
      </div>
      <p className="mt-1.5 text-center text-[10.5px] text-slate-500">{c.before.label}</p>

      <p className="mt-5 flex-1 text-[13px] leading-relaxed text-slate-400">{c.result}</p>

      <div className="mt-5 flex items-center gap-1.5 text-[12px] font-semibold text-blue-400">
        <FiTrendingUp size={13} />
        Verified growth
      </div>
    </div>
  );
}

export default function CaseStudies() {
  // duplicate the list so the strip can loop seamlessly with a -50% translate
  const track = [...cases, ...cases];

  return (
    <section className="overflow-hidden bg-navy-900 py-24 sm:py-28">
      <style>{`
        @keyframes emark-case-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .emark-case-marquee-track {
          animation: emark-case-marquee 34s linear infinite;
        }
        .emark-case-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .emark-case-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <Eyebrow light>Proven Results</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              Real brands, <span className="text-blue-400">real growth</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-400">
              We don't just promise strategy — here's what happened when
              brands actually put it to work.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* full-bleed marquee, breaks out of Container padding on purpose */}
      <div className="relative mt-14">
        {/* edge fade so cards don't feel like they're cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy-900 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy-900 to-transparent sm:w-24" />

        <div className="flex w-max gap-6 emark-case-marquee-track px-6 sm:px-10">
          {track.map((c, i) => (
            <CaseCard key={`${c.brand}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}