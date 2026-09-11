import { FiStar } from "react-icons/fi";
import { Container, Eyebrow, Reveal } from "./ui";

const testimonials = [
  {
    quote:
      "The team at eMark Setu completely transformed our online presence and helped us scale our store to six figures in just a few months.",
    name: "Rahul Mehta",
    role: "Founder, UrbanVibes",
    initials: "RM",
    color: "bg-blue-600",
  },
  {
    quote:
      "Professional, responsive and result-oriented. Their strategies helped us increase our ROAS by 300% within a single quarter.",
    name: "Sneha Kapoor",
    role: "Co-founder, FitGlow",
    initials: "SK",
    color: "bg-gold-500",
  },
  {
    quote:
      "From branding to ads, everything was handled perfectly. Highly recommend eMark Setu for any ecommerce brand ready to grow.",
    name: "Vikram Singh",
    role: "CEO, Luxe & Co.",
    initials: "VS",
    color: "bg-emerald-500",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="flex w-[320px] flex-none flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-7 shadow-card sm:w-[360px]">
      <span className="font-display text-4xl leading-none text-blue-600/25">&ldquo;</span>
      <div className="mt-2 flex gap-0.5 text-gold-500">
        {Array.from({ length: 5 }).map((_, s) => (
          <FiStar key={s} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[14px] leading-relaxed text-slate-500">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-navy-900/[0.06] pt-5">
        <span
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-[13px] font-bold text-white ${t.color}`}
        >
          {t.initials}
        </span>
        <div>
          <p className="text-[13.5px] font-bold text-navy-900">{t.name}</p>
          <p className="text-[12px] text-slate-400">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // duplicate the list so the strip can loop seamlessly with a -50% translate
  const track = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-sky-100 py-24 sm:py-28">
      <style>{`
        @keyframes emark-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .emark-marquee-track {
          animation: emark-marquee 32s linear infinite;
        }
        .emark-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .emark-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <Container>
        <Reveal>
          <Eyebrow>What Our Clients Say</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Trusted by brands <span className="text-blue-600">that grow</span>
          </h2>
        </Reveal>
      </Container>

      {/* full-bleed marquee, breaks out of Container padding on purpose */}
      <div className="relative mt-12">
        {/* edge fade so cards don't feel like they're cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-sky-100 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-sky-100 to-transparent sm:w-24" />

        <div className="flex w-max gap-6 emark-marquee-track px-6 sm:px-10">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}