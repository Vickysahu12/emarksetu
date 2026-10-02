import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";
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
    title: "7 Proven Ways to Increase Your Ecommerce Sales",
    content:
      "Scaling an ecommerce store requires optimizing conversion rates, leveraging targeted marketplace ads, improving product pages, and retaining existing customers with automated email flows and loyalty perks.",
  },
  {
    id: 2,
    image: brand2,
    date: "14 May, 2026",
    title: "How Facebook Ads Can Scale Your Online Store",
    content:
      "Facebook Ads remain one of the most effective tools for acquiring high-intent e-commerce shoppers. Focus on high-converting ad creatives, retargeting website visitors, and optimizing custom audiences.",
  },
  {
    id: 3,
    image: brand3,
    date: "08 May, 2026",
    title: "The Power of Data-Driven Marketing in 2026",
    content:
      "Leveraging real-time analytics allows ecommerce brands to make informed decisions on ad spend, inventory planning, customer lifetime value optimization, and omnichannel sales growth.",
  },
  {
    id: 4,
    image: brand4,
    date: "02 May, 2026",
    title: "Branding Tips for Your Ecommerce Business",
    content:
      "Consistent visual design, a compelling brand story, and exceptional customer experience build strong customer loyalty, higher repeat purchase rates, and superior brand recognition.",
  },
];

export default function Insights() {
  const [selectedPost, setSelectedPost] = useState(null);

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
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <button
                onClick={() => setSelectedPost(post)}
                className="group block w-full text-left overflow-hidden rounded-2xl border border-navy-900/[0.06] shadow-card transition-shadow hover:shadow-soft focus:outline-none"
              >
                <div className="relative h-40 overflow-hidden bg-sky-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-navy-900 backdrop-blur">
                    {post.date}
                  </span>
                </div>
                <div className="bg-white p-5">
                  <h3 className="font-display text-[14.5px] font-bold leading-snug text-navy-900">
                    {post.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-600">
                    Read More
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/40 text-white backdrop-blur transition hover:bg-slate-900/60"
                >
                  <FiX size={18} />
                </button>

                <div className="relative h-56 w-full bg-slate-100">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-4 rounded-lg bg-navy-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {selectedPost.date}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                    {selectedPost.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {selectedPost.content}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}