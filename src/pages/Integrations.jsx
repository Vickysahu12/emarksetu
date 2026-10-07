import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhoneCall, FiArrowRight, FiSearch, FiXCircle } from "react-icons/fi";

import { Container, Eyebrow, PrimaryButton, Reveal } from "../components/ui";
import LogoTile from "../components/LogoTile";
import bg from "../assets/image/hero-bg.webp";
import { marketplaces, marketplaceBySlug, CATEGORIES } from "../utils/Logos";

function IntegrationTile({ m, highlighted }) {
  return (
    <motion.div
      layout
      id={`brand-${m.slug}`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.25 }}
      title={m.name}
      className={`group relative flex h-24 scroll-mt-40 flex-col items-center justify-center rounded-2xl border bg-white px-4 pb-6 pt-4 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:shadow-soft sm:h-28 ${
        highlighted
          ? "border-blue-600 shadow-soft ring-4 ring-blue-600/15"
          : "border-navy-900/[0.06] shadow-card"
      }`}
    >
      <LogoTile
        slug={m.slug}
        className="h-full max-h-14 w-full"
        imgClassName="transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className={`absolute inset-x-0 bottom-2 truncate px-2 text-center text-[10.5px] font-semibold transition-colors ${
          highlighted ? "text-blue-600" : "text-slate-400 group-hover:text-navy-900"
        }`}
      >
        {m.name}
      </span>
    </motion.div>
  );
}

export default function Integrations() {
  const [params] = useSearchParams();
  const brand = params.get("brand");
  const brandCategory = marketplaceBySlug[brand]?.category;

  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  // Coming from "Meesho" etc. elsewhere on the site: scroll to that logo and highlight it.
  useEffect(() => {
    if (!brandCategory) return;
    setCategory("all");
    setQuery("");
    const t = setTimeout(() => {
      document.getElementById(`brand-${brand}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 350);
    return () => clearTimeout(t);
  }, [brand, brandCategory]);

  const counts = useMemo(() => {
    const c = { all: marketplaces.length };
    for (const m of marketplaces) c[m.category] = (c[m.category] || 0) + 1;
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return marketplaces.filter(
      (m) => (category === "all" || m.category === category) && (!q || m.name.toLowerCase().includes(q))
    );
  }, [category, query]);

  const pageTitle = "150+ E-commerce Platform Integrations | eMark Setu";
  const pageDescription =
    "Sell everywhere your customers shop. eMark Setu manages Amazon, Flipkart, Myntra, Meesho, Shopsy, Shopify and 100+ marketplaces, carts and logistics partners.";
  const canonicalUrl = "https://emarksetu.com/integrations";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: marketplaces.slice(0, 20).map((m, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: m.name,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="ecommerce integrations, multi-channel marketplace, Amazon integration, Flipkart integration, Meesho seller, Shopsy seller, Shopify"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-navy-950 bg-cover bg-center bg-no-repeat pb-24 pt-[145px] sm:pb-28"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow light>Connect Everything</Eyebrow>

              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
                150+ Stable <span className="text-blue-400">E-commerce Integrations.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-7 text-slate-400">
                Connect your business with marketplaces, carts, logistics providers, ERP systems and more.
                Build a connected ecommerce ecosystem that works seamlessly.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PrimaryButton href="/contact-us#inquiry">
                  <FiPhoneCall size={15} />
                  Get A Call Back
                </PrimaryButton>

                <a
                  href="#integrations"
                  className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Integrations
                  <FiArrowRight size={14} />
                </a>
              </div>

              <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-7">
                {[
                  [counts.india, "Indian Marketplaces"],
                  [counts.global + counts.amazon, "Global Storefronts"],
                  [counts.tools, "Carts, ERP & Logistics"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <p className="font-display text-2xl font-bold text-white">{n}</p>
                    <p className="mt-1 text-[11px] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Our Ecosystem</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Explore Our <span className="text-blue-600">Integrations</span>
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-6 text-slate-500 sm:text-right">
              From marketplaces to ERP and logistics, connect your entire ecommerce stack with ease.
            </p>
          </Reveal>

          {/* filters */}
          <div className="sticky top-[84px] z-30 mt-10 flex flex-col gap-3 rounded-2xl border border-navy-900/[0.08] bg-white/90 p-2.5 shadow-card backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
              {CATEGORIES.map((c) => {
                const active = category === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={`flex flex-none items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-[12.5px] font-semibold transition-colors ${
                      active ? "bg-navy-900 text-white" : "text-slate-600 hover:bg-sky-100 hover:text-navy-900"
                    }`}
                  >
                    {c.label}
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[10.5px] tabular-nums ${
                        active ? "bg-white/15 text-white" : "bg-sky-100 text-slate-500"
                      }`}
                    >
                      {counts[c.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative lg:w-64">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a platform…"
                aria-label="Search platforms"
                className="w-full rounded-xl border border-navy-900/10 bg-sky-100/60 py-2 pl-9 pr-8 text-[16px] text-navy-900 outline-none transition focus:border-blue-600 focus:bg-white sm:text-[13px]"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiXCircle size={14} />
                </button>
              )}
            </div>
          </div>

          <motion.div layout className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            <AnimatePresence mode="popLayout">
              {visible.map((m) => (
                <IntegrationTile key={m.slug} m={m} highlighted={m.slug === brand} />
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-[14px] font-medium text-slate-500">
                No platform matching “<strong className="text-navy-900">{query}</strong>”. We probably still support
                it. Ask us!
              </p>
              <PrimaryButton href="/contact-us#inquiry" className="mt-5">
                Ask about your platform
              </PrimaryButton>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-7 rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center sm:flex-row sm:p-10 sm:text-left">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Don't see your platform?</h2>
                <p className="mt-2 max-w-lg text-[13.5px] text-slate-400">
                  We're constantly expanding our ecosystem. Talk to us and we'll help you find the right solution.
                </p>
              </div>

              <PrimaryButton href="/contact-us#inquiry">Talk To Our Experts</PrimaryButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
