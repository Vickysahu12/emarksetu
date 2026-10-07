import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiStar, FiTrendingUp, FiPackage } from "react-icons/fi";
import { Container, Eyebrow, PrimaryButton, Float } from "./ui";
import LogoTile from "./LogoTile";
import bgImage from "../assets/image/hero-bg.webp";
import illustration from "../assets/image/heroo.webp";

const sellOn = ["amazon-in", "flipkart", "myntra", "meesho", "ajio", "nykaa"];

export default function Hero() {
  // Pointer parallax: the illustration leans gently toward the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const imgX = useTransform(sx, (v) => v * 18);
  const imgY = useTransform(sy, (v) => v * 14);
  const chipX = useTransform(sx, (v) => v * -26);
  const chipY = useTransform(sy, (v) => v * -20);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center bg-no-repeat pt-[150px] pb-20 sm:pt-[170px] sm:pb-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ambient light that slowly breathes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]"
        />
        <div className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-navy-700/60 blur-[100px]" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow light>Welcome to eMark Setu</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] text-white sm:text-[3.4rem] lg:text-[3.7rem]"
          >
            We Build, Manage,
            <br />
            Scale <span className="text-blue-400">&amp;</span> Create
            <br />
            <span className="relative inline-block">
              Brands
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 220 10" fill="none" aria-hidden="true">
                <motion.path
                  d="M2 8C40 2 160 2 218 8"
                  stroke="#F5A623"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-md text-[15.5px] leading-relaxed text-slate-400"
          >
            At eMark Setu, we build, manage, operate, fulfill and advertise your
            online, ready-to-go turnkey ecommerce store — a true full-service
            agency, start to finish, all in-house.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <PrimaryButton href="/contact-us#inquiry">Get Started</PrimaryButton>
            <Link
              to="/pricing"
              className="rounded-xl px-2 py-3 text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Explore our services
            </Link>
          </motion.div>

          {/* where we sell — quiet proof, links into the integrations wall */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              We grow brands on
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {sellOn.map((slug) => (
                <Link
                  key={slug}
                  to={`/integrations?brand=${slug}`}
                  className="rounded-lg bg-white px-2.5 py-1.5 opacity-85 transition hover:-translate-y-0.5 hover:opacity-100"
                >
                  <LogoTile slug={slug} className="h-5 w-[58px]" />
                </Link>
              ))}
              <Link
                to="/integrations"
                className="rounded-lg px-2.5 py-1.5 text-[12px] font-semibold text-blue-400 transition-colors hover:text-white"
              >
                +90 more
              </Link>
            </div>
          </motion.div>
        </div>

        {/* right visual — floats, and leans toward the cursor */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px]"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[90px]" />

          <motion.div style={{ x: imgX, y: imgY }}>
            <Float y={14} rotate={-0.6} duration={6.5}>
              <img
                src={illustration}
                alt="Ecommerce dashboard illustration showing sales growth"
                className="relative h-auto w-full select-none drop-shadow-[0_30px_40px_rgba(2,8,30,0.55)]"
                draggable="false"
                fetchPriority="high"
              />
            </Float>
          </motion.div>

          {/* floating badges move against the image for depth */}
          <motion.div style={{ x: chipX, y: chipY }} className="absolute -left-2 top-[8%] sm:-left-8">
            <Float y={9} duration={5} delay={0.8}>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2 shadow-soft">
                <span className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} size={11} fill="currentColor" />
                  ))}
                </span>
                <span className="text-[11.5px] font-bold text-navy-900">Ratings that convert</span>
              </div>
            </Float>
          </motion.div>

          <motion.div style={{ x: chipX, y: chipY }} className="absolute -right-1 bottom-[14%] sm:-right-6">
            <Float y={11} duration={5.6} delay={0.2}>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/95 p-2.5 pr-3.5 shadow-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <FiTrendingUp size={15} />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Avg. growth</p>
                  <p className="text-[13px] font-bold text-navy-900">+67% revenue</p>
                </div>
              </div>
            </Float>
          </motion.div>

          <motion.div style={{ x: chipX, y: chipY }} className="absolute bottom-[2%] left-[6%] hidden sm:block">
            <Float y={7} duration={4.6} delay={1.4}>
              <div className="flex items-center gap-2 rounded-full bg-navy-900/80 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                <FiPackage size={12} className="text-gold-400" />
                Orders shipped today
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </div>
            </Float>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
