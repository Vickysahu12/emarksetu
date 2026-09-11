import { FaCheckDouble } from "react-icons/fa";
import {
  FiUsers,
  FiCompass,
  FiTarget,
  FiBarChart2,
  FiMonitor,
  FiCoffee,
  FiArrowRight,
  FiAward,
  FiTrendingUp,
  FiGlobe,
  FiShoppingBag,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import hero from "../assets/image/bg-image.webp"
import { Container, Eyebrow, PrimaryButton, Reveal } from "../components/ui";
import hero2 from "../assets/image/hero2.webp";

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Nykaa",
  "eBay",
  "Ajio",
];

const encompassing = [
  "Encompassing Sales",
  "Item Listing",
  "Order Management",
  "Customer Support",
  "Procurement",
  "Reconciliation",
  "Automated Tools",
  "Digital Marketing & Promotion",
];

const stats = [
  {
    value: "15+",
    label: "Team Members",
    icon: FiUsers,
  },
  {
    value: "250+",
    label: "Happy Clients",
    icon: FiAward,
  },
  {
    value: "150+",
    label: "Integrations",
    icon: FiGlobe,
  },
];

const values = [
  {
    icon: FiUsers,
    title: "Who We Are",
    body: "eMark Setu is a group of companies that deals in all sorts of branding, advertisement and ecommerce solutions. We provide a 360-degree solution for all your business growth needs.",
  },
  {
    icon: FiCompass,
    title: "Our Philosophy",
    body: "We believe the best solutions come from people who are determined enough to solve problems. That's why we brainstorm every detail to create marketing that people actually enjoy.",
  },
  {
    icon: FiTarget,
    title: "Our Approach",
    body: "Our approach combines strategy, creativity and technology to build solutions that are effective, memorable and difficult to replicate.",
  },
];

function DottedRule() {
  return (
    <div className="mt-4 flex gap-1.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="h-[3px] w-[3px] rounded-full bg-blue-600/40"
        />
      ))}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
        <FaCheckDouble size={10} />
      </span>

      <span className="text-[13.5px] font-semibold text-navy-900">
        {children}
      </span>
    </div>
  );
}

export default function AboutUs() {
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
  <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />

  <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[130px]" />

  <Container className="relative z-10">

    <Reveal>
      <div className="mx-auto max-w-4xl text-center">

        {/* BADGE */}

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-400">

          <FiZap size={13} />

          About eMark Setu

        </span>


        {/* HEADING */}

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[64px]">

          We Build Brands That{" "}

          <span className="text-blue-400">
            Grow Online.
          </span>

        </h1>


        {/* DESCRIPTION */}

        <p className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-7 text-slate-400">

          We help businesses launch, manage and scale their ecommerce
          journey with the right combination of technology, creativity
          and strategy.

        </p>


        {/* BUTTONS */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <PrimaryButton href="/contact-us">

            Let's Work Together

            <FiArrowRight size={15} />

          </PrimaryButton>


          <a
            href="#our-story"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-white/10"
          >

            Discover Our Story

            <FiArrowRight size={14} />

          </a>

        </div>


        {/* STATS */}

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-7">

          {stats.map(({ value, label, icon: Icon }) => (

            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
            >

              <span className="hidden h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-400 sm:flex">

                <Icon size={16} />

              </span>


              <div>

                <p className="font-display text-xl font-bold text-white sm:text-2xl">

                  {value}

                </p>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">

                  {label}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </Reveal>

  </Container>

</section>
      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section id="our-story" className="bg-white py-20 sm:py-28">
        <Container>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* CONTENT */}

            <Reveal>

              <Eyebrow>Our Story</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                A Young Team With A{" "}
                <span className="text-blue-600">
                  Big Vision.
                </span>
              </h2>

              <DottedRule />

              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500">
                We are a young startup founded by{" "}
                <span className="font-bold text-navy-900">
                  Karan Manishkumar Pathak
                </span>
                , built with a simple mission — make it easier for businesses
                to sell, grow and succeed online.
              </p>

              <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-slate-500">
                From launching marketplace accounts to managing products,
                orders, marketing and customer support, we provide complete
                end-to-end ecommerce solutions under one roof.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
                {marketplaces.map((marketplace) => (
                  <CheckItem key={marketplace}>
                    {marketplace}
                  </CheckItem>
                ))}
              </div>

            </Reveal>


            {/* VISUAL GRID */}

            <Reveal delay={0.1}>

              <div className="grid grid-cols-2 gap-4">

                <div className="relative mt-8 flex aspect-square flex-col justify-between overflow-hidden rounded-3xl bg-blue-600 p-6">

                  <FiUsers
                    size={38}
                    className="text-white"
                  />

                  <div>
                    <p className="text-4xl font-bold text-white">
                      15+
                    </p>

                    <p className="mt-1 text-[12px] text-blue-100">
                      People building better solutions
                    </p>
                  </div>

                </div>


                <div className="flex aspect-square flex-col justify-between rounded-3xl bg-navy-900 p-6">

                  <FiCoffee
                    size={38}
                    className="text-blue-400"
                  />

                  <div>
                    <p className="text-2xl font-bold text-white">
                      Young
                    </p>

                    <p className="mt-1 text-[12px] text-slate-400">
                      Curious minds. Big ideas.
                    </p>
                  </div>

                </div>


                <div className="flex aspect-square flex-col justify-between rounded-3xl bg-sky-100 p-6">

                  <FiBarChart2
                    size={38}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-3xl font-bold text-navy-900">
                      250+
                    </p>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Businesses supported
                    </p>
                  </div>

                </div>


                <div className="mt-8 flex aspect-square flex-col justify-between rounded-3xl bg-blue-100 p-6">

                  <FiMonitor
                    size={38}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-2xl font-bold text-navy-900">
                      360°
                    </p>

                    <p className="mt-1 text-[12px] text-slate-500">
                      End-to-end ecommerce solutions
                    </p>
                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </Container>
      </section>


      {/* =====================================================
          OUR SOLUTION
      ===================================================== */}

      <section className="bg-sky-100 py-20 sm:py-28">
        <Container>

          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            {/* VISUAL */}

            <Reveal>

              <div className="relative mx-auto max-w-[460px]">

                <div className="absolute inset-8 rounded-full bg-white blur-3xl" />

                <div className="relative rounded-3xl border border-white bg-white p-5 shadow-card">

                  <div className="rounded-2xl bg-navy-900 p-6">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[10px] text-slate-500">
                          Ecommerce Operations
                        </p>

                        <p className="mt-1 text-2xl font-bold text-white">
                          All In One
                        </p>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <FiLayers size={19} />
                      </span>

                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      {[
                        [FiShoppingBag, "Sales"],
                        [FiMonitor, "Listings"],
                        [FiBarChart2, "Growth"],
                        [FiUsers, "Support"],
                      ].map(([Icon, label]) => (

                        <div
                          key={label}
                          className="rounded-xl bg-white/5 p-4"
                        >
                          <Icon
                            size={18}
                            className="text-blue-400"
                          />

                          <p className="mt-3 text-[12px] font-bold text-white">
                            {label}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>


            {/* CONTENT */}

            <Reveal delay={0.1}>

              <Eyebrow>Our Solution</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
                Everything You Need To{" "}
                <span className="text-blue-600">
                  Sell Better Online.
                </span>
              </h2>

              <DottedRule />

              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500">
                eMark Setu is your one-stop solution for managing products,
                marketplaces and digital growth. We combine people, processes
                and technology to help businesses stay competitive.
              </p>

              <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {encompassing.map((item) => (
                  <CheckItem key={item}>
                    {item}
                  </CheckItem>
                ))}
              </div>

            </Reveal>

          </div>

        </Container>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="bg-white py-20 sm:py-28">
        <Container>

          <Reveal className="mx-auto max-w-2xl text-center">

            <Eyebrow>
              What We Stand For
            </Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              The Values Behind{" "}
              <span className="text-blue-600">
                Our Work.
              </span>
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-slate-500">
              Everything we do is driven by curiosity, creativity and a
              commitment to helping businesses grow better.
            </p>

          </Reveal>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {values.map(({ icon: Icon, title, body }, index) => (

              <Reveal
                key={title}
                delay={index * 0.08}
              >

                <div className="group h-full rounded-3xl border border-navy-900/[0.06] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">

                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={24} />

                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold text-navy-900">
                    {title}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
                    {body}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[12px] font-bold text-blue-600">

                    Learn More

                    <FiArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>

          <Reveal>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

              <div className="relative flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">

                <div>

                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    <FiZap size={13} />
                    Let's grow together
                  </span>

                  <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                    Ready to build something bigger?
                  </h2>

                  <p className="mt-2 text-[13.5px] text-slate-400">
                    Your next stage of growth starts with one conversation.
                  </p>

                </div>

                <PrimaryButton href="/contact-us">
                  Talk To Us
                  <FiArrowRight size={15} />
                </PrimaryButton>

              </div>

            </div>

          </Reveal>

        </Container>
      </section>

    </>
  );
}