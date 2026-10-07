import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight, FiCheck, FiClock } from "react-icons/fi";
import { Container, Eyebrow, Reveal } from "./ui";
import brand1 from "../assets/image/brand1.webp";
import brand2 from "../assets/image/brand2.webp";
import brand3 from "../assets/image/brand3.webp";
import brand4 from "../assets/image/brand4.webp";

const posts = [
  {
    id: 1,
    image: brand1,
    date: "20 May, 2026",
    readTime: "4 min read",
    tag: "Sales Growth",
    title: "7 Proven Ways to Increase Your Ecommerce Sales",
    intro:
      "More traffic rarely fixes a store that doesn't convert. The sellers we see grow fastest fix the basics first, then spend on ads.",
    points: [
      "Rewrite titles and bullets around the words buyers actually search, not your internal product names.",
      "Use 6–8 images per listing: white-background main shot, lifestyle, size chart and a close-up of the fabric or finish.",
      "Price within 5–8% of the top three competitors, then win with bundles and coupons rather than deep discounts.",
      "Keep at least 30 days of stock on bestsellers; going out of stock quietly kills marketplace ranking.",
      "Ask every happy buyer for a review: listings with 4+ stars and 50+ reviews convert dramatically better.",
      "Run sponsored ads only on listings that already convert organically.",
      "Track returns by reason code. Most return problems are really listing problems.",
    ],
  },
  {
    id: 2,
    image: brand2,
    date: "14 May, 2026",
    readTime: "5 min read",
    tag: "Paid Ads",
    title: "How Facebook Ads Can Scale Your Online Store",
    intro:
      "Facebook and Instagram are still the cheapest place to find buyers who don't know your brand yet, as long as the creative does the heavy lifting.",
    points: [
      "Start with broad audiences and let strong creative find the buyer; over-narrow targeting raises costs.",
      "Test 3–5 creatives per ad set. Short vertical video with the product in use in the first 2 seconds usually wins.",
      "Retarget site visitors and add-to-carts with a reason to come back today: an offer, a review or free shipping.",
      "Judge campaigns on ROAS and contribution margin, not clicks or likes.",
      "Scale winners by 20–30% every few days instead of doubling budgets overnight.",
    ],
  },
  {
    id: 3,
    image: brand3,
    date: "08 May, 2026",
    readTime: "4 min read",
    tag: "Analytics",
    title: "The Power of Data-Driven Marketing in 2026",
    intro:
      "Every marketplace dashboard is full of numbers. A handful of them decide whether you are actually making money.",
    points: [
      "Know your true profit per order after commission, shipping, returns and ad spend: per SKU, not on average.",
      "Watch TACoS (ad spend ÷ total sales) to see whether ads are building organic sales or replacing them.",
      "Plan inventory from sell-through rate so cash isn't stuck in slow stock.",
      "Compare repeat-purchase rate across channels to see where your loyal customers come from.",
      "Review one simple weekly report with your team, and act on it.",
    ],
  },
  {
    id: 4,
    image: brand4,
    date: "02 May, 2026",
    readTime: "3 min read",
    tag: "Branding",
    title: "Branding Tips for Your Ecommerce Business",
    intro:
      "On a marketplace you are one thumbnail among hundreds. A consistent brand is what makes shoppers stop scrolling, and come back.",
    points: [
      "Register your trademark early; it unlocks Amazon Brand Registry, A+ content and protection from copycats.",
      "Keep colours, fonts and photo style identical across every listing and platform.",
      "Use A+ / enhanced content to tell your brand story and cross-sell the rest of the range.",
      "Packaging is marketing: a thank-you card with care tips and a review request costs rupees and earns repeat orders.",
    ],
  },
];

function PostModal({ post, onClose }) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.article
            key={post.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`post-${post.id}-title`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close article"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/50 text-white backdrop-blur transition hover:bg-navy-950/70"
            >
              <FiX size={18} />
            </button>

            <div className="relative h-48 flex-none bg-sky-100 sm:h-60">
              <img src={post.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-white">
                <span className="rounded-md bg-blue-600 px-2 py-1">{post.tag}</span>
                <span className="rounded-md bg-white/15 px-2 py-1 backdrop-blur">{post.date}</span>
                <span className="flex items-center gap-1 rounded-md bg-white/15 px-2 py-1 backdrop-blur">
                  <FiClock size={11} /> {post.readTime}
                </span>
              </div>
            </div>

            <div className="overflow-y-auto px-6 pb-7 pt-6 sm:px-9">
              <h3 id={`post-${post.id}-title`} className="font-display text-xl font-bold leading-snug text-navy-900 sm:text-2xl">
                {post.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{post.intro}</p>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-blue-600">Key takeaways</p>
              <ul className="mt-3 flex flex-col gap-3">
                {post.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                      <FiCheck size={11} />
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-slate-600">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-sky-100 p-5 sm:flex-row sm:items-center">
                <p className="text-[13.5px] font-semibold text-navy-900">
                  Want us to do this for your store?
                </p>
                <Link
                  to="/contact-us#inquiry"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Talk to our team
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Insights() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Our Latest Insights</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Tips, trends &amp; insights to <span className="text-blue-600">grow your brand</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08} className="h-full">
              <button
                onClick={() => setSelectedPost(post)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-navy-900/[0.06] bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-40 w-full overflow-hidden bg-sky-100">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-navy-900 backdrop-blur">
                    {post.date}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">{post.tag}</p>
                  <h3 className="mt-1.5 flex-1 font-display text-[14.5px] font-bold leading-snug text-navy-900">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-600">
                    Read More
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
