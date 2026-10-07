import { FiCheck, FiZap, FiLayers } from "react-icons/fi";
import { Container, Eyebrow, PrimaryButton, GhostButton, Reveal } from "./ui";
import LogoTile from "./LogoTile";

const growthPlatforms = ["amazon-in", "flipkart", "myntra", "meesho", "ajio", "nykaa", "snapdeal", "tatacliq"];

const gstins = [
  { state: "Gujarat", code: "24" },
  { state: "Maharashtra", code: "27" },
  { state: "Delhi", code: "07" },
];

// Small visual at the top of each plan so the difference reads at a glance.
function PlanVisual({ name }) {
  if (name === "Starter") {
    return (
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-navy-900/[0.06] bg-sky-100/60 p-3">
        <span className="flex h-11 w-16 flex-none items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
          <LogoTile slug="myntra" className="h-full w-full" />
        </span>
        <div className="leading-tight">
          <p className="text-[12.5px] font-bold text-navy-900">Myntra, done properly</p>
          <p className="mt-0.5 text-[11.5px] text-slate-500">One marketplace, full focus</p>
        </div>
      </div>
    );
  }

  if (name === "Growth") {
    return (
      <div className="mt-5 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
        <div className="grid grid-cols-4 gap-1.5">
          {growthPlatforms.map((slug) => (
            <span key={slug} className="flex h-9 items-center justify-center rounded-md bg-white px-1.5">
              <LogoTile slug={slug} className="h-5 w-full" />
            </span>
          ))}
        </div>
        <p className="mt-2.5 text-center text-[11px] font-medium text-slate-400">
          Every major marketplace, one team
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-xl border border-navy-900/[0.06] bg-sky-100/60 p-3">
      <div className="flex flex-col gap-1.5">
        {gstins.map((g) => (
          <div key={g.code} className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 shadow-sm">
            <span className="font-mono text-[10.5px] font-semibold tracking-tight text-navy-900">
              GSTIN {g.code}•••••••••Z
            </span>
            <span className="text-[10.5px] text-slate-500">{g.state}</span>
          </div>
        ))}
      </div>
      <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
        <FiLayers size={11} className="text-blue-600" />
        All entities, one dashboard
      </p>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: "₹10,000",
    period: "/month",
    tagline: "Dedicated Myntra Marketplace Management",
    features: [
      "Only Myntra Platform Managed",
      "Myntra Store Setup & Onboarding",
      "Product Listing & Cataloguing",
      "Myntra Ads & Promotion Management",
      "Monthly Performance Report",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹25,000",
    period: "/month",
    tagline: "For brands ready to scale across all e-commerce platforms.",
    features: [
      "All E-commerce Platforms Managed",
      "Amazon, Flipkart, Myntra & Meesho",
      "Inventory & Order Management",
      "Creative Production & Ad Campaigning",
      "Weekly Strategy Calls & Reporting",
      "Dedicated Account Manager",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    tagline: "For businesses selling under multiple GST numbers across several platforms.",
    features: [
      "Multiple GSTINs managed under one account",
      "Every platform, for every GST entity",
      "Separate catalogues, stock & billing per GSTIN",
      "Consolidated sales & payout reporting",
      "Priority SLA Support & Dedicated Team",
      "Quarterly Growth & Strategy Review",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Simple plans, <span className="text-blue-600">no surprises</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Pick a plan that matches where your brand is today. Upgrade
              anytime as you grow — no lock-in contracts.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  plan.highlight
                    ? "border-blue-600 bg-navy-900 shadow-soft lg:-mt-4 lg:mb-4"
                    : "border-navy-900/[0.08] bg-white shadow-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[10.5px] font-bold text-white">
                    <FiZap size={11} />
                    Most Popular
                  </span>
                )}

                <p className={`text-[13px] font-bold uppercase tracking-wide ${plan.highlight ? "text-blue-400" : "text-blue-600"}`}>
                  {plan.name}
                </p>

                <div className="mt-3 flex items-end gap-1">
                  <span className={`font-display text-3xl font-bold ${plan.highlight ? "text-white" : "text-navy-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`pb-1 text-[12.5px] ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className={`mt-2 text-[12.5px] leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.tagline}
                </p>

                <PlanVisual name={plan.name} />

                <div className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-6 ${plan.highlight ? "border-white/10" : "border-navy-900/[0.06]"}`}>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full ${plan.highlight ? "bg-blue-600 text-white" : "bg-blue-600/10 text-blue-600"}`}>
                        <FiCheck size={10} />
                      </span>
                      <span className={`text-[12.5px] leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  {plan.highlight ? (
                    <PrimaryButton href="/contact-us#inquiry" className="w-full justify-center">
                      Get Started
                    </PrimaryButton>
                  ) : (
                    <GhostButton
                      href="/contact-us#inquiry"
                      className="w-full justify-center border border-navy-900/10 !py-3 text-navy-900 transition-colors hover:border-blue-600 hover:text-blue-600"
                    >
                      Get Started
                    </GhostButton>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}