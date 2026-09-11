import { motion } from "framer-motion";

// The signature element: a hand-drawn growth trajectory that recurs across
// the hero, the stats band, and the CTA — visually tying "build, manage,
// scale" to a single ascending line that the brand's growth is measured on.
export default function GrowthLine({ className = "", stroke = "#4a82f0", dotFill = "#f5a623" }) {
  return (
    <svg
      viewBox="0 0 520 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M8 190 C 70 190, 95 120, 150 128 C 205 136, 210 70, 268 62 C 320 55, 330 110, 388 88 C 440 68, 452 30, 512 18"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="512"
        cy="18"
        r="6"
        fill={dotFill}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.6 }}
      />
    </svg>
  );
}
