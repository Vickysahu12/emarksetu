import React, { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiGlobe,
  FiSmartphone,
  FiShare2,
  FiTrendingUp,
  FiMessageSquare,
  FiSearch,
  FiRefreshCw,
  FiFileText,
  FiVideo,
  FiAward,
  FiShield,
  FiList,
  FiPlayCircle,
  FiTag,
  FiArrowRight,
  FiTarget,
  FiUsers,
  FiHeadphones,
  FiCheckCircle,
  FiZap,
  FiXCircle,
} from "react-icons/fi";

import SEO from "../components/SEO";
import hero from "../assets/image/bg-image.webp";
import { Container, Eyebrow, PrimaryButton, Reveal } from "../components/ui";

const LOGO_URLS = {
  amazon: "https://cdn.simpleicons.org/amazon/FF9900",
  flipkart: "https://cdn.simpleicons.org/flipkart/2874F0",
  myntra: "https://cdn.simpleicons.org/myntra/FF3F6C",
  nykaa: "https://cdn.simpleicons.org/nykaa/FC2779",
  ajio: "https://cdn.simpleicons.org/shopify/7AB55C",
  tatacliq: "https://cdn.simpleicons.org/tata/000000",
  snapdeal: "https://cdn.simpleicons.org/snapdeal/E40046",
  meesho: "https://cdn.simpleicons.org/meesho/F43397",
  shopsy: "https://cdn.simpleicons.org/flipkart/2874F0",
  shopee: "https://cdn.simpleicons.org/shopee/EE4D2D",
  paytm: "https://cdn.simpleicons.org/paytm/002E6E",
  ebay: "https://cdn.simpleicons.org/ebay/E53238",
  etsy: "https://cdn.simpleicons.org/etsy/F1641E",
  shopify: "https://cdn.simpleicons.org/shopify/7AB55C",
};

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

function LogoTile({ logoKey, name, className }) {
  const [hasError, setHasError] = useState(false);
  const logoUrl = LOGO_URLS[logoKey];

  const initials = useMemo(() => {
    if (!name) return "E";
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [name]);

  if (!logoUrl || hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center font-bold text-xs text-blue-600 uppercase tracking-wider bg-blue-50 rounded-lg">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`${name} Logo`}
      onError={() => setHasError(true)}
      className={className || "h-full w-full object-contain"}
      loading="lazy"
    />
  );
}

const accountMgmt = (id, name, price, logoKey) => ({
  id,
  name: `${name} Account Management`,
  desc: `End-to-end operational management, listing optimization, and advertising scale for ${name} in India.`,
  price,
  unit: "Mo",
  logoKey,
});

const categories = [
  {
    title: "Account Management",
    items: [
      accountMgmt("mgmt-amazon", "Amazon", "₹5,900", "amazon"),
      accountMgmt("mgmt-flipkart", "Flipkart", "₹5,900", "flipkart"),
      accountMgmt("mgmt-myntra", "Myntra", "₹11,800", "myntra"),
      accountMgmt("mgmt-nykaa", "Nykaa Fashion", "₹11,800", "nykaa"),
      accountMgmt("mgmt-ajio", "Ajio", "₹5,900", "ajio"),
      accountMgmt("mgmt-tatacliq", "Tata CLiQ", "₹9,999", "tatacliq"),
      accountMgmt("mgmt-snapdeal", "Snapdeal", "₹2,500", "snapdeal"),
      accountMgmt("mgmt-meesho", "Meesho", "₹5,900", "meesho"),
      accountMgmt("mgmt-shopsy", "Shopsy", "₹2,500", "shopsy"),
      accountMgmt("mgmt-shopee", "Shopee", "₹2,500", "shopee"),
      accountMgmt("mgmt-paytm", "Paytm", "₹2,500", "paytm"),
      accountMgmt("mgmt-glance", "Glance", "₹2,500", "glance"),
      accountMgmt("mgmt-jiomart", "Jio Mart", "₹2,999", "jiomart"),
      accountMgmt("mgmt-rekkoz", "Rekkoz", "₹2,500", "rekkoz"),
      accountMgmt("mgmt-limeroad", "Limeroad", "₹2,500", "limeroad"),
      {
        ...accountMgmt("mgmt-amazon-global", "Amazon Global", "₹5,900", "amazon"),
        name: "Amazon Global Service",
      },
      accountMgmt("mgmt-ebay", "Ebay", "₹5,900", "ebay"),
      accountMgmt("mgmt-etsy", "ETSY", "₹5,900", "etsy"),
      accountMgmt("mgmt-mirraw", "Mirraw", "₹5,900", "mirraw"),
      accountMgmt("mgmt-shopify", "Shopify", "₹5,900", "shopify"),
      accountMgmt("mgmt-simsim", "Sim Sim", "₹2,500", "simsim"),
    ],
  },
  {
    title: "Development Services",
    items: [
      {
        id: "dev-web",
        name: "Ecommerce Website Development",
        desc: "Custom high-converting storefronts engineered for fast performance, high UX, and flawless checkout flow.",
        price: "₹29,500",
        unit: "Mo",
        icon: FiGlobe,
      },
      {
        id: "dev-app",
        name: "Mobile App Development",
        desc: "Native Android & iOS applications crafted for hyper-engagement and frictionless consumer purchasing.",
        price: "₹29,500",
        unit: "Mo",
        icon: FiSmartphone,
      },
      {
        id: "dev-social",
        name: "Social Media Handling",
        desc: "Complete social presence management, content strategy, and viral social commerce execution.",
        price: "₹9,500",
        unit: "Mo",
        icon: FiShare2,
      },
    ],
  },
  {
    title: "Store & Listing Services",
    items: [
      {
        id: "store-brand-page",
        name: "Amazon Brand Store Page",
        desc: "Custom immersive A+ storefront designs that captivate shoppers and boost brand trust.",
        price: "₹5,900",
        unit: "Page",
        logoKey: "amazon",
      },
      {
        id: "store-launch",
        name: "Account Launching Service",
        desc: "Complete onboarding setup, documentation, verification, and first product deployment.",
        price: "₹5,900",
        unit: "Mo",
        icon: FiPlayCircle,
      },
      {
        id: "store-cataloging",
        name: "Product Listing & Cataloging",
        desc: "SEO-optimized product titles, accurate metadata, image optimization, and SKU uploading.",
        price: "₹15",
        unit: "SKU",
        icon: FiList,
      },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      {
        id: "mktg-digital",
        name: "Digital Marketing Service",
        desc: "Hyper-targeted paid advertising (PPC), social ads, and automated email funnel strategies.",
        price: "₹5,900",
        unit: "Mo",
        icon: FiTrendingUp,
      },
      {
        id: "mktg-reviews",
        name: "Feedback Review Service",
        desc: "Proactive customer review accumulation to improve seller rating and product conversion.",
        price: "₹100",
        unit: "Review",
        icon: FiMessageSquare,
      },
      {
        id: "mktg-seo",
        name: "Search Engine Optimization (SEO)",
        desc: "Rank higher on Google and marketplace algorithms for high-intent organic buyer keywords.",
        price: "₹11,800",
        unit: "Mo",
        icon: FiSearch,
      },
    ],
  },
  {
    title: "Operations & Compliance",
    items: [
      {
        id: "ops-reinstatement",
        name: "Seller Reinstatement Service",
        desc: "Fast appeal drafting and operational plan of action (POA) to reinstate suspended accounts.",
        price: "₹3,540",
        unit: "Mo",
        icon: FiRefreshCw,
      },
      {
        id: "ops-reconciliation",
        name: "Payment Reconciliation",
        desc: "In-depth financial auditing to track missing returns, marketplace fees, and overcharges.",
        price: "₹3,540",
        unit: "Mo",
        icon: FiFileText,
      },
      {
        id: "ops-video",
        name: "Branding Video Production",
        desc: "High-impact video creation for listing conversion and multi-channel advertising campaigns.",
        price: "₹2,500",
        unit: "Video",
        icon: FiVideo,
      },
    ],
  },
  {
    title: "Registrations",
    items: [
      {
        id: "reg-trademark",
        name: "Trademark Registration",
        desc: "Protect your IP and unlock brand registry perks across major platforms like Amazon.",
        price: "₹7,999",
        unit: "Reg",
        icon: FiAward,
      },
      {
        id: "reg-gst",
        name: "GST Registration Service",
        desc: "Hassle-free GST application, documentation, and filing setup for ecommerce sellers.",
        price: "₹999",
        unit: "Reg",
        icon: FiFileText,
      },
      {
        id: "reg-msme",
        name: "MSME Registration Service",
        desc: "Get government benefits, business credit line access, and official MSME certification.",
        price: "₹999",
        unit: "Reg",
        icon: FiShield,
      },
    ],
  },
];

const startingPoints = [
  { label: "Account Launch", value: "₹2,000 / portal" },
  { label: "Listing & Cataloging", value: "₹15 / SKU" },
  { label: "Suspension Recovery", value: "₹5,000 / portal" },
  { label: "Account Management", value: "₹2,999 / portal" },
];

const valueProps = [
  { icon: FiTarget, label: "Result-Driven Strategies" },
  { icon: FiShield, label: "Transparent Auditing & Pricing" },
  { icon: FiUsers, label: "Dedicated Account Managers" },
  { icon: FiHeadphones, label: "24/7 Operations Support" },
];

function PriceCardWhite({ item, delay = 0 }) {
  const Icon = item.icon || FiZap;

  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl">
        <div>
          <div className="flex items-center justify-between">
            {item.logoKey ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5 shadow-inner overflow-hidden">
                <LogoTile
                  logoKey={item.logoKey}
                  name={item.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={20} />
              </span>
            )}

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-500">
              Verified Solution
            </span>
          </div>

          <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
            {item.name}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
            {item.desc}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Starting from
            </p>
            <p className="mt-0.5 font-display text-lg font-bold text-slate-900">
              {item.price}{" "}
              <span className="text-xs font-normal text-slate-500">
                /{item.unit}
              </span>
            </p>
          </div>

          <a
            href="/contact-us"
            aria-label={`Inquire about ${item.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <FiArrowRight size={15} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function PricingWhite() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const pageTitle = "Transparent E-commerce Pricing & Services | eMark Setu";
  const pageDescription =
    "Explore transparent pricing for Amazon, Flipkart, Myntra account management, cataloging, website development, PPC marketing, and seller compliance.";
  const canonicalUrl = "https://yourwebsite.com/pricing";

  // Fixed valid Schema.org structure
  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "E-commerce Management & Growth Services",
      provider: {
        "@type": "Organization",
        name: "eMark Setu",
      },
      areaServed: "India",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "E-commerce Services Directory",
        itemListElement: categories.flatMap((cat) =>
          cat.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.name,
              description: item.desc,
            },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: item.price.replace(/[^0-9]/g, ""),
              priceCurrency: "INR",
            },
          }))
        ),
      },
    }),
    []
  );

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories
      .map((cat) => {
        const catId = slugify(cat.title);

        if (selectedCategory !== "all" && selectedCategory !== catId) {
          return null;
        }

        const items = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
        );

        return { ...cat, id: catId, items };
      })
      .filter((cat) => cat && cat.items.length > 0);
  }, [selectedCategory, searchQuery]);

  const handleClear = useCallback(() => {
    setSearchQuery("");
    setSelectedCategory("all");
  }, []);

  return (
    <div className="bg-white font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="ecommerce pricing, amazon account management cost, flipkart cataloging rates, ecommerce seo packages, seller reinstatement fees"
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

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-slate-900 bg-cover bg-center bg-no-repeat pb-24 pt-36 sm:pb-32 sm:pt-44"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-slate-900/85" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[130px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-md">
                <FiTag size={13} />
                TRANSPARENT PRICING & SERVICES
              </span>

              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                End-To-End <span className="text-blue-400">Ecommerce Scale.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From launching your storefront to scaling multi-marketplace
                dominance—we provide transparent, result-oriented services tailored
                for high growth.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PrimaryButton
                  href="/contact-us"
                  className="shadow-lg shadow-blue-600/30"
                >
                  Get Free Consultation
                  <FiArrowRight size={16} />
                </PrimaryButton>

                <a
                  href="#services"
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore All Services
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
                <div>
                  <p className="font-display text-2xl font-black text-white sm:text-3xl">
                    150+
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Marketplaces</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-white sm:text-3xl">
                    250+
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Happy Clients</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-white sm:text-3xl">
                    5+ Yrs
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Starting Rates Section */}
      <section className="relative border-b border-slate-100 bg-slate-50/70 py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Simple Starting Rates</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
                  Start Small. <span className="text-blue-600">Scale Big.</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Select key modular services or let us manage your full
                  ecommerce operations with customized packages.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {startingPoints.map((point) => (
                    <div
                      key={point.label}
                      className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <FiCheckCircle className="text-blue-600" size={16} />
                        <span className="text-xs font-semibold text-slate-800">
                          {point.label}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-blue-600">
                        {point.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {categories
                    .slice(0, 2)
                    .flatMap((cat) => cat.items.slice(0, 2))
                    .map((item, index) => (
                      <PriceCardWhite
                        key={item.id}
                        item={item}
                        delay={index * 0.05}
                      />
                    ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Directory & Category Filtering */}
      <section id="services" className="bg-white py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Full Service Directory</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Our <span className="text-blue-600">Capabilities</span>
            </h2>
          </Reveal>

          {/* Dynamic Filter Controls */}
          <div className="sticky top-6 z-30 my-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div className="no-scrollbar flex overflow-x-auto gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                All Services
              </button>

              {categories.map((cat) => {
                const catId = slugify(cat.title);
                const isActive = selectedCategory === catId;

                return (
                  <button
                    key={catId}
                    onClick={() => setSelectedCategory(catId)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative min-w-[220px]">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={15}
              />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-8 text-xs text-slate-800 transition focus:border-blue-600 focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiXCircle size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-12 space-y-20">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, categoryIndex) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28"
                >
                  <Reveal>
                    <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {category.items.length} specialized solutions available
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, index) => (
                      <PriceCardWhite
                        key={item.id}
                        item={item}
                        delay={(index % 6) * 0.04}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-slate-500">
                <FiSearch className="mx-auto mb-3 text-slate-300" size={32} />
                <p className="text-sm font-medium">
                  No services matching "<strong>{searchQuery}</strong>"
                </p>
                <button
                  onClick={handleClear}
                  className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Metrics & Proof Section */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Live Metric Analytics
                      </p>
                      <p className="mt-0.5 text-2xl font-extrabold text-slate-900">
                        12,580
                      </p>
                      <p className="text-xs text-slate-500">
                        Total Client Orders Fulfilled
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      ↑ +24% YoY
                    </span>
                  </div>

                  <div className="mt-8 flex h-36 items-end gap-2.5">
                    {[35, 48, 42, 60, 75, 88, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-blue-600 transition-all hover:bg-blue-700"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Average Growth Rate
                      </p>
                      <p className="text-xl font-bold text-emerald-600">
                        +67% Revenue
                      </p>
                    </div>
                    <FiTrendingUp className="text-emerald-600" size={24} />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Eyebrow>Why eMark Setu</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                  Your Revenue Expansion Is{" "}
                  <span className="text-blue-600">Our Priority.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  We don't just complete tasks—we act as your strategic growth
                  engine, driving real sales figures, seamless compliance, and
                  brand authority.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {valueProps.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 shadow-2xl sm:p-12">
              <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <FiZap size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                      Ready to scale your e-commerce operations?
                    </h2>
                    <p className="mt-1 text-xs text-slate-400">
                      Let's design a custom plan geared toward maximum
                      profitability.
                    </p>
                  </div>
                </div>

                <PrimaryButton
                  href="/contact-us"
                  className="whitespace-nowrap shadow-lg shadow-blue-600/30"
                >
                  Talk To Our Experts
                  <FiArrowRight size={15} />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}