

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