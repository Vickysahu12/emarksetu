import logos from "../utils/logos";

const palette = ["bg-blue-600", "bg-gold-500", "bg-emerald-500", "bg-navy-800"];

function colorFor(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = key.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

// Renders the real logo if it exists in src/assets/logos/, otherwise
// falls back to a clean initials badge so the layout never looks broken.
export default function LogoTile({ logoKey, name, className = "" }) {
  const src = logos[logoKey];

  if (src) {
    return (
      <div className={`flex items-center justify-center rounded-xl border border-navy-900/[0.06] bg-white p-2.5 ${className}`}>
        <img src={src} alt={name} className="h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-xl text-white font-display font-bold ${colorFor(logoKey)} ${className}`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}