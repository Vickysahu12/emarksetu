import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const MotionLink = motion.create(Link);

// Internal paths ("/contact-us") go through the router so the page doesn't
// fully reload; hashes and external URLs stay plain anchors.
function SmartLink({ href, ...props }) {
  if (href?.startsWith("/")) return <MotionLink to={href} {...props} />;
  return <motion.a href={href} {...props} />;
}

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
        light
          ? "bg-white/10 text-blue-400 ring-1 ring-white/15"
          : "bg-blue-600/10 text-blue-600 ring-1 ring-blue-600/15"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-blue-400" : "bg-blue-600"}`} />
      {children}
    </span>
  );
}

export function PrimaryButton({ children, href = "/contact-us#inquiry", className = "", onClick }) {
  return (
    <SmartLink
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(47,111,235,0.6)] transition-colors hover:bg-blue-500 ${className}`}
    >
      {children}
      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </SmartLink>
  );
}

export function GhostButton({ children, href = "#", className = "" }) {
  return (
    <SmartLink
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-xl px-1 py-1 text-sm font-semibold text-navy-900 ${className}`}
    >
      {children}
      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </SmartLink>
  );
}

// Gentle idle "bob" used on illustrations so they feel alive without being
// distracting. Respects prefers-reduced-motion via the global CSS rule +
// framer's own reduced-motion handling.
export function Float({ children, className = "", y = 10, rotate = 0, duration = 6, delay = 0 }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
