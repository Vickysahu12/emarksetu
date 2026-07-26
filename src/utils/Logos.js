// Drop any logo file into src/assets/logos/ named exactly as the key
// used in the pricing/integrations data (e.g. amazon.webp, flipkart.png,
// myntra.svg) — it will automatically show up wherever that key is
// referenced. No code changes needed after adding a file.

const modules = import.meta.glob("../assets/logos/*.{webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const logos = {};
for (const path in modules) {
  const key = path.split("/").pop().split(".")[0].toLowerCase();
  logos[key] = modules[path];
}

export default logos;