import { Container, Eyebrow, GhostButton, Reveal } from "./ui";
import brand1 from "../assets/image/brand1.webp"
import brand2 from "../assets/image/brand2.webp"
import brand3 from "../assets/image/brand3.webp"
import brand4 from "../assets/image/brand4.webp"

const posts = [
  {
    image: brand1,
    date: "20 May, 2026",
    title: "7 Proven Ways to Increase Your Ecommerce Sales",
  },
  {
    image: brand2,
    date: "14 May, 2026",
    title: "How Facebook Ads Can Scale Your Online Store",
  },
  {
    image: brand3,
    date: "08 May, 2026",
    title: "The Power of Data-Driven Marketing in 2026",
  },
  {
    image: brand4,
    date: "02 May, 2026",
    title: "Branding Tips for Your Ecommerce Business",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Our Latest Insights</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Tips, trends &amp; insights to <span className="text-blue-600">grow your brand</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <GhostButton href="#blog" className="rounded-xl border border-navy-900/10 !px-5 !py-2.5 text-navy-900">
              View All Blog
            </GhostButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map(({ image, date, title }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <a href="#blog" className="group block overflow-hidden rounded-2xl border border-navy-900/[0.06] shadow-card transition-shadow hover:shadow-soft">
                <div className="relative h-40 overflow-hidden bg-sky-100">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-navy-900 backdrop-blur">
                    {date}
                  </span>
                </div>
                <div className="bg-white p-5">
                  <h3 className="font-display text-[14.5px] font-bold leading-snug text-navy-900">
                    {title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-600">
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}