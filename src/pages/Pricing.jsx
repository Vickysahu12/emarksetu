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
  FiShoppingBag,
} from "react-icons/fi";
import hero from "../assets/image/bg-image.webp"

import { FaCheckDouble } from "react-icons/fa";

import {
  Container,
  Eyebrow,
  PrimaryButton,
  Reveal,
} from "../components/ui";

import LogoTile from "../components/LogoTile";


const accountMgmt = (name, price, logoKey) => ({
  name: `${name} Account Management Service`,
  desc: `eMark Setu provides the best ${name} Account Management Service in India. Get your business booming with the Best E-commerce service provider in India.`,
  price,
  unit: "Month",
  logoKey,
});

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    title: "Account Management Services",

    items: [
      accountMgmt("Amazon", "₹5,900", "amazon"),
      accountMgmt("Flipkart", "₹5,900", "flipkart"),
      accountMgmt("Myntra", "₹11,800", "myntra"),
      accountMgmt("Nykaa Fashion", "₹11,800", "nykaa"),
      accountMgmt("Ajio", "₹5,900", "ajio"),
      accountMgmt("Tata CLiQ", "₹9,999", "tatacliq"),
      accountMgmt("Snapdeal", "₹2,500", "snapdeal"),
      accountMgmt("Meesho", "₹5,900", "meesho"),
      accountMgmt("Shopsy", "₹2,500", "shopsy"),
      accountMgmt("Shopee", "₹2,500", "shopee"),
      accountMgmt("Paytm", "₹2,500", "paytm"),
      accountMgmt("Glance", "₹2,500", "glance"),
      accountMgmt("Jio Mart", "₹2,999", "jiomart"),
      accountMgmt("Rekkoz", "₹2,500", "rekkoz"),
      accountMgmt("Limeroad", "₹2,500", "limeroad"),

      {
        ...accountMgmt("Amazon Global", "₹5,900", "amazon"),
        name: "Amazon Global Service",
      },

      accountMgmt("Ebay", "₹5,900", "ebay"),
      accountMgmt("ETSY", "₹5,900", "etsy"),
      accountMgmt("Mirraw", "₹5,900", "mirraw"),
      accountMgmt("Shopify", "₹5,900", "shopify"),
      accountMgmt("Sim Sim", "₹2,500", "simsim"),
    ],
  },

  {
    title: "Development Services",

    items: [
      {
        name: "Ecommerce Website Development Service",
        desc: "We have a dedicated team of web developers who ensure you're getting a website that checks all the boxes and provides the best user interface and experience.",
        price: "₹29,500",
        unit: "Month",
        icon: FiGlobe,
      },

      {
        name: "Mobile Application Development Service",
        desc: "We have a dedicated team of app developers who ensure you're getting an application that checks all the boxes and provides the best user interface and experience.",
        price: "₹29,500",
        unit: "Month",
        icon: FiSmartphone,
      },

      {
        name: "Social Media Handling Per Site",
        desc: "eMark Setu provides the best Social Media Marketing Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹9,500",
        unit: "Month",
        icon: FiShare2,
      },
    ],
  },

  {
    title: "Store & Listing Services",

    items: [
      {
        name: "Amazon Brand Store Page",
        desc: "eMark Setu provides the best Amazon Brand Store Page Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹5,900",
        unit: "Page",
        logoKey: "amazon",
      },

      {
        name: "Account Launching Service Per Portal",
        desc: "eMark Setu provides the best Account Launching Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹5,900",
        unit: "Month",
        icon: FiPlayCircle,
      },

      {
        name: "Product Listing Per SKU",
        desc: "Our product listing and cataloging experts will help upload each of your products with accurate information such as product IDs, tags, images, descriptions and other important details.",
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
        name: "Digital Marketing Service",
        desc: "Digital marketing is the act of promoting and selling products and services using online marketing tactics such as social media marketing, search marketing and email marketing.",
        price: "₹5,900",
        unit: "Month",
        icon: FiTrendingUp,
      },

      {
        name: "Feedback Review Service Per Feedback",
        desc: "eMark Setu provides the best Feedback Review Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹100",
        unit: "Feedback",
        icon: FiMessageSquare,
      },

      {
        name: "Search Engine Optimization Services",
        desc: "We provide the best Search Engine Optimization Services in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹11,800",
        unit: "SEO",
        icon: FiSearch,
      },
    ],
  },

  {
    title: "Operations & Compliance",

    items: [
      {
        name: "Seller Reinstatement Service Any Portal",
        desc: "eMark Setu provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹3,540",
        unit: "Month",
        icon: FiRefreshCw,
      },

      {
        name: "Payment Reconciliation Report Service",
        desc: "eMark Setu provides the best Payment Reconciliation Report Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹3,540",
        unit: "Month",
        icon: FiFileText,
      },

      {
        name: "Branding Video Service Per Video",
        desc: "eMark Setu provides the best Branding Video Service in India. Get your business booming with the Best E-commerce service provider in India.",
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
        name: "Trademark Registration",
        desc: "eMark Setu provides the best Trademark Registration Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹7,999",
        unit: "Registration",
        icon: FiAward,
      },

      {
        name: "GST Registration Service",
        desc: "eMark Setu provides the best GST Registration Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹999",
        unit: "Registration",
        icon: FiFileText,
      },

      {
        name: "MSME Registration Service",
        desc: "eMark Setu provides the best MSME Registration Service in India. Get your business booming with the Best E-commerce service provider in India.",
        price: "₹999",
        unit: "Registration",
        icon: FiShield,
      },
    ],
  },
];

/* =========================================================
   STARTING POINTS
========================================================= */

const startingPoints = [
  {
    label: "Account Launch",
    value: "₹2,000 per portal",
  },

  {
    label: "Listing & Cataloging",
    value: "₹15 per SKU per platform",
  },

  {
    label: "Suspension Get Back",
    value: "₹5,000 per platform",
  },

  {
    label: "Account Management",
    value: "₹2,999 per platform",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function PriceCard({ item, delay = 0 }) {
  const Icon = item.icon;

  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">

        {/* ICON / LOGO */}

        {item.logoKey ? (
          <LogoTile
            logoKey={item.logoKey}
            name={item.name}
            className="h-14 w-14"
          />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Icon size={22} />
          </span>
        )}

        {/* TITLE */}

        <h3 className="mt-5 font-display text-[15px] font-bold leading-snug text-navy-900">
          {item.name}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
          {item.desc}
        </p>

        {/* PRICE */}

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-navy-900/[0.06] pt-5">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Starting from
            </p>

            <p className="mt-1 font-display text-xl font-bold text-blue-600">
              {item.price}

              <span className="text-[11px] font-medium text-slate-400">
                /{item.unit}
              </span>
            </p>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
            <FiArrowRight size={15} />
          </span>

        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
   PRICING PAGE
========================================================= */

export default function Pricing() {
return (
<>
{/* =====================================================
HERO
===================================================== */}


  <section
    className="relative overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat pb-28 pt-[140px] sm:pb-32"
    style={{ backgroundImage: `url(${hero})` }}
  >
    {/* DARK IMAGE OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-navy-900/85" />

    {/* BLUE GLOW */}
    <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />

    <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

    <Container className="relative z-10">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-blue-400">
            <FiTag size={13} />
            Our Services
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
            End-to-End{" "}
            <span className="text-blue-400">
              E-commerce
            </span>{" "}
            &amp; Digital Growth Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-7 text-slate-400">
            From launching your online store to scaling your marketplace
            presence, we provide everything your business needs to sell
            more, grow faster and dominate online.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <PrimaryButton href="/contact-us">
              Explore Our Services
              <FiArrowRight size={15} />
            </PrimaryButton>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-white/10"
            >
              View All Services
            </a>

          </div>

          {/* STATS */}

          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">

            <div>
              <p className="font-display text-2xl font-bold text-white">
                150+
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Marketplaces Integrated
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div>
              <p className="font-display text-2xl font-bold text-white">
                250+
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Happy Clients
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div>
              <p className="font-display text-2xl font-bold text-white">
                5+
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Years Experience
              </p>
            </div>

          </div>

        </div>
      </Reveal>
    </Container>
  </section>


  {/* =====================================================
      CORE SERVICES
  ===================================================== */}

  <section id="services" className="bg-white py-20 sm:py-24">

    <Container>

      <Reveal className="mx-auto max-w-2xl text-center">

        <Eyebrow>
          What We Do
        </Eyebrow>

        <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">

          Everything You Need To{" "}

          <span className="text-blue-600">
            Grow Online
          </span>

        </h2>

        <p className="mt-4 text-[14px] leading-7 text-slate-500">

          From marketplace management and website development to digital
          marketing and compliance, we help businesses build, launch and
          scale under one roof.

        </p>

      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {categories.slice(0, 4).map((category, index) => (

          <Reveal key={category.title} delay={index * 0.08}>

            <div className="group h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-soft">

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                {index === 0 && <FiShoppingBag size={21} />}

                {index === 1 && <FiGlobe size={21} />}

                {index === 2 && <FiList size={21} />}

                {index === 3 && <FiTrendingUp size={21} />}

              </span>

              <h3 className="mt-5 font-display text-[15px] font-bold text-navy-900">
                {category.title}
              </h3>

              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500">
                {category.items.length} specialized services to help your
                business grow faster.
              </p>

              <a
                href={`#${category.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "")}`}
                className="mt-5 flex items-center gap-2 text-[12px] font-bold text-blue-600"
              >
                Explore Services
                <FiArrowRight size={13} />
              </a>

            </div>

          </Reveal>

        ))}

      </div>

    </Container>

  </section>


  {/* =====================================================
      STARTING PRICES
  ===================================================== */}

  <section className="bg-sky-100 py-16 sm:py-20">

    <Container>

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

        <Reveal>

          <Eyebrow>
            Simple Pricing
          </Eyebrow>

          <h2 className="mt-5 font-display text-2xl font-bold text-navy-900 sm:text-3xl">

            Start Small.{" "}

            <span className="text-blue-600">
              Scale Big.
            </span>

          </h2>

          <p className="mt-4 text-[14px] leading-7 text-slate-500">

            Choose the services you need and build a growth plan that fits
            your business.

          </p>

          <div className="mt-7 flex flex-col gap-4">

            {startingPoints.map((point) => (

              <div
                key={point.label}
                className="flex items-center justify-between gap-4"
              >

                <div className="flex items-center gap-2.5">

                  <FaCheckDouble
                    className="text-blue-600"
                    size={13}
                  />

                  <span className="text-[13px] font-semibold text-navy-900">
                    {point.label}
                  </span>

                </div>

                <span className="text-[13px] font-bold text-blue-600">
                  {point.value}
                </span>

              </div>

            ))}

          </div>

        </Reveal>

        <Reveal delay={0.1}>

          <div className="grid gap-5 sm:grid-cols-2">

            {categories
              .slice(0, 2)
              .flatMap((cat) => cat.items.slice(0, 2))
              .map((item, index) => (

                <PriceCard
                  key={item.name}
                  item={item}
                  delay={index * 0.05}
                />

              ))}

          </div>

        </Reveal>

      </div>

    </Container>

  </section>


  {/* =====================================================
      ALL SERVICES
  ===================================================== */}

  <section className="bg-white py-20 sm:py-24">

    <Container>

      <Reveal className="text-center">

        <Eyebrow>
          Our Expertise
        </Eyebrow>

        <h2 className="mt-5 font-display text-2xl font-bold text-navy-900 sm:text-3xl">

          Explore All Our{" "}

          <span className="text-blue-600">
            Services
          </span>

        </h2>

      </Reveal>

      <div className="mt-12 flex flex-col gap-20">

        {categories.map((category, categoryIndex) => {

          const categoryId = category.title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("&", "");

          return (

            <div
              key={category.title}
              id={categoryId}
            >

              <Reveal>

                <div className="mb-7 flex items-center gap-3">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <FiTag size={17} />
                  </span>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      Category{" "}
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                      {category.title}
                    </h3>

                  </div>

                </div>

              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {category.items.map((item, index) => (

                  <PriceCard
                    key={item.name}
                    item={item}
                    delay={(index % 6) * 0.04}
                  />

                ))}

              </div>

            </div>

          );

        })}

      </div>

    </Container>

  </section>


  {/* =====================================================
      WHY CHOOSE US
  ===================================================== */}

  <section className="bg-sky-100 py-20 sm:py-24">

    <Container>

      <div className="grid items-center gap-12 lg:grid-cols-2">

        <Reveal>

          <div className="relative mx-auto max-w-md">

            <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-[70px]" />

            <div className="relative rounded-3xl border border-navy-900/[0.06] bg-white p-7 shadow-card">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[11px] text-slate-400">
                    Total Orders
                  </p>

                  <p className="mt-1 text-3xl font-bold text-navy-900">
                    12,580
                  </p>

                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-500">
                  ↑ 24%
                </span>

              </div>

              <div className="mt-8 flex h-36 items-end gap-3">

                {[30, 42, 38, 55, 62, 78, 92].map((height, i) => (

                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-blue-600"
                    style={{ height: `${height}%` }}
                  />

                ))}

              </div>

              <div className="mt-6 rounded-2xl bg-sky-100 p-4">

                <p className="text-[11px] text-slate-500">
                  Revenue Growth
                </p>

                <p className="mt-1 text-2xl font-bold text-emerald-500">
                  +67%
                </p>

              </div>

            </div>

          </div>

        </Reveal>

        <Reveal delay={0.1}>

          <Eyebrow>
            Why Choose eMark Setu
          </Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900">

            Your Success.{" "}

            <span className="text-blue-600">
              Our Priority.
            </span>

          </h2>

          <p className="mt-4 max-w-lg text-[14px] leading-7 text-slate-500">

            We don't just provide individual services. We build long-term
            growth partnerships that help your business perform better
            across every stage of the ecommerce journey.

          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {[

              [FiTarget, "Result-Driven Strategies"],

              [FiShield, "Transparent Process"],

              [FiUsers, "Dedicated Expert Team"],

              [FiHeadphones, "End-to-End Support"],

            ].map(([Icon, label]) => (

              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-navy-900/[0.06] bg-white p-4"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                  <Icon size={17} />
                </span>

                <span className="text-[12.5px] font-bold text-navy-900">
                  {label}
                </span>

              </div>

            ))}

          </div>

        </Reveal>

      </div>

    </Container>

  </section>


  {/* =====================================================
      CTA
  ===================================================== */}

  <section className="bg-navy-900 py-16 sm:py-20">

    <Container>

      <Reveal>

        <div className="flex flex-col items-center justify-between gap-7 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:p-10">

          <div className="flex items-center gap-5">

            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-blue-600 text-white">
              <FiTrendingUp size={24} />
            </span>

            <div>

              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                Ready to grow your online business?
              </h2>

              <p className="mt-1 text-[13px] text-slate-400">
                Let's build something amazing together.
              </p>

            </div>

          </div>

          <PrimaryButton href="/contact-us">
            Talk To Our Experts
            <FiArrowRight size={15} />
          </PrimaryButton>

        </div>

      </Reveal>

    </Container>

  </section>

</>
)
}