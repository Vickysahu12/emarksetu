import { FiPhoneCall, FiArrowRight, FiZap } from "react-icons/fi";

import {
  Container,
  Eyebrow,
  PrimaryButton,
  Reveal,
} from "../components/ui";

import bg from "../assets/image/bg-image.webp";
import logos from "../utils/logos";

const integrations = [
  "amazon-in",
  "amazon-com",
  "flipkart",
  "myntra",
  "ajio",
  "nykaa",
  "lotus-emall",
  "mirraw",
  "tatacliq",
  "snapdeal",
  "shopee",
  "shopsy",
  "paytm",
  "etsy",
  "shopify",
  "ebay",
  "meesho",
  "simsim",
  "glowroad",
  "yaari",
  "jiomart",
  "souq",
  "krimmple",
  "retailsetu",
  "solv",
  "udaan",
  "konnectbox",
  "bijnis",
  "wholesalebox",
  "trell",
  "flipkart-wholesale",
  "ajio-business",
  "amazon-ae",
  "amazon-com-br",
  "amazon-ca",
  "amazon-com-au",
  "amazon-com-mx",
  "amazon-co-uk",
  "amazon-co-jp",
  "amazon-de",
  "amazon-es",
  "amazon-fr",
  "amazon-it",
  "amazon-sa",
  "amazon-cn",
  "amazon-storefront",
  "ebay-in",
  "facebook-assured",
  "flipkart-lite",
  "flipkart-smartbuy",
  "2gud",
  "bewakoof",
  "fynd",
  "blibli",
  "firstcry",
  "jollychic",
  "kartify",
  "shop101",
  "roposo",
  "maccaron",
  "kartrocket",
  "lazada",
  "limeroad",
  "mall91",
  "noon",
  "nextdoor",
  "peachmode",
  "shopclues",
  "prestashop",
  "rediff",
  "styfi",
  "snapmint",
  "spoyl",
  "thashop",
  "zilingo",
  "zalora",
  "zifiti",
  "peppymode",
  "stylecaret",
  "rekkoz",
  "uniket",
  "cbazaar",
  "utsav-fashion",
  "wmall",
  "unicommerce",
  "vinculum",
  "zoho",
];

function displayName(key) {
  return key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function IntegrationTile({ logoKey }) {
  const src = logos[logoKey];

  return (
    <div className="group flex h-24 items-center justify-center rounded-2xl border border-navy-900/[0.06] bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      {src ? (
        <img
          src={src}
          alt={displayName(logoKey)}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="text-center text-[11px] font-bold text-navy-900/60">
          {displayName(logoKey)}
        </span>
      )}
    </div>
  );
}

export default function Integrations() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat pb-24 pt-[145px] sm:pb-28"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* DARK OVERLAY */}

        <div className="pointer-events-none absolute inset-0 bg-navy-900/80" />

        {/* BLUE GLOW */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow>
                Connect Everything
              </Eyebrow>

              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
                150+ Stable{" "}
                <span className="text-blue-400">
                  E-commerce Integrations.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-7 text-slate-400">
                Connect your business with marketplaces, carts, logistics
                providers, ERP systems and more. Build a connected ecommerce
                ecosystem that works seamlessly.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PrimaryButton href="/contact-us">
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

              {/* STATS */}

              <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    150+
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Platforms
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-white/10 sm:block" />

                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    24/7
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Connected Operations
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-white/10 sm:block" />

                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    1
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Connected Ecosystem
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= INTRO ================= */}

      <section className="bg-sky-100 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>
              Why Integrations
            </Eyebrow>

            <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-navy-900 sm:text-3xl">
              One Connected System For{" "}
              <span className="text-blue-600">
                Your Entire Business.
              </span>
            </h2>

            <p className="mt-5 text-[14.5px] leading-7 text-slate-500">
              Connect marketplaces, carts, logistics providers, ERP systems
              and more through a single ecosystem. Our integrations help
              businesses optimise operations, reduce manual work and scale
              faster.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ================= INTEGRATIONS ================= */}

      <section id="integrations" className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>
                Our Ecosystem
              </Eyebrow>

              <h2 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Explore Our{" "}
                <span className="text-blue-600">
                  Integrations
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-[13px] leading-6 text-slate-500 sm:text-right">
              From marketplaces to ERP and logistics, connect your entire
              ecommerce stack with ease.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {integrations.map((key, index) => (
              <Reveal key={key} delay={(index % 12) * 0.025}>
                <IntegrationTile logoKey={key} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-7 rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center sm:flex-row sm:text-left sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Don't see your platform?
                </h2>

                <p className="mt-2 max-w-lg text-[13.5px] text-slate-400">
                  We're constantly expanding our ecosystem. Talk to us and
                  we'll help you find the right solution.
                </p>
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
  );
}