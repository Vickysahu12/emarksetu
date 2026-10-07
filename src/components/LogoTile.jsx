// src/components/LogoTile.jsx
import { marketplaceBySlug } from "../utils/Logos";

// Typographic stand-in for platforms we don't have an image file for yet.
// Drop a <slug>.webp into src/assets/marketplaces/ and the real logo is used.
function Wordmark({ name, wordmark }) {
  if (wordmark.kind === "amazon") {
    return (
      <span className="relative inline-flex flex-col items-start leading-none">
        <span className="font-body text-[22px] font-extrabold tracking-[-0.04em] text-[#111]">
          amazon
          <span className="text-[17px] font-semibold tracking-tight">{wordmark.suffix}</span>
        </span>
        <svg viewBox="0 0 100 16" className="-mt-0.5 h-3 w-[78px]" aria-hidden="true">
          <path d="M4 3 Q 48 18 88 5" fill="none" stroke="#ff9900" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M80 2 L 92 4 L 86 13" fill="none" stroke="#ff9900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 font-display text-[19px] font-bold tracking-tight"
      style={{ color: wordmark.color }}
    >
      {wordmark.accent && (
        <span className="h-2.5 w-2.5 rotate-45 rounded-[3px]" style={{ background: wordmark.accent }} />
      )}
      {name}
    </span>
  );
}

export default function LogoTile({ slug, className = "", imgClassName = "" }) {
  const m = marketplaceBySlug[slug];
  if (!m) return null;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {m.src ? (
        <img
          src={m.src}
          alt={`${m.name} logo`}
          loading="lazy"
          decoding="async"
          className={`max-h-full max-w-full object-contain ${imgClassName}`}
        />
      ) : (
        <Wordmark name={m.name} wordmark={m.wordmark} />
      )}
    </div>
  );
}
