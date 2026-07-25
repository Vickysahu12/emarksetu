import { motion } from "framer-motion";
import { FiStar, FiShoppingBag, FiPercent, FiDollarSign } from "react-icons/fi";
import { Container, Eyebrow, PrimaryButton } from "./ui";
import bgImage from "../assets/image/bg-image.webp"

const floatCard = {
  animate: (delay) => ({
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
  }),
};

export default function Hero() {
  return (
    <section
  id="home"
  className="relative overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat pt-[130px] pb-24 sm:pb-28"
  style={{ backgroundImage: `url(${bgImage})` }}
>
      {/* ambient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-navy-700/60 blur-[100px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M46 0H0V46" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 220 10" fill="none">
                <path d="M2 8C40 2 160 2 218 8" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
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
            <PrimaryButton href="#contact">Get Started</PrimaryButton>
            <a href="#services" className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
              Explore our services
            </a>
          </motion.div>
        </div>

        {/* right visual */}
        {/* right visual */}
<motion.div
  initial={{ opacity: 0, x: 35, scale: 0.92 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.25,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mx-auto w-full max-w-[560px]"
>
  {/* soft glow behind illustration */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
        </motion.div>
      </Container>
    </section>
  );
}