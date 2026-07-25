import { FiCheck, FiZap } from "react-icons/fi";
import { Container, Eyebrow, PrimaryButton, GhostButton, Reveal } from "./ui";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    tagline: "For new stores getting off the ground.",
    features: [
      "Store setup & optimisation",
      "1 ad platform managed",
      "Monthly performance report",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹55,000",
    period: "/month",
    tagline: "For brands ready to scale spend and revenue.",
    features: [
      "Everything in Starter",
      "2 ad platforms managed",
      "Creative production included",
      "Weekly strategy calls",
      "Dedicated account manager",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    tagline: "For established brands with serious ad spend.",
    features: [
      "Everything in Growth",
      "Full-funnel management",
      "Custom retention flows",
      "Priority support & SLAs",
      "Quarterly strategy review",
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

                <div className={`mt-6 flex flex-col gap-3 border-t pt-6 ${plan.highlight ? "border-white/10" : "border-navy-900/[0.06]"}`}>
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
                    <PrimaryButton href="#contact" className="w-full justify-center">
                      Get Started
                    </PrimaryButton>
                  ) : (
                    <GhostButton href="#contact" className="w-full justify-center border border-navy-900/10 text-navy-900">
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