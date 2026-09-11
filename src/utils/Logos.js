// src/utils/Logos.js

// Naya exact folder path
const modules = import.meta.glob(
  "../assets/ekatra-image/ekatra-image/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const fileLogos = {};
for (const path in modules) {
  const key = path.split("/").pop().split(".")[0].toLowerCase();
  fileLogos[key] = modules[path];
}

const logos = {
  "amazon-in": fileLogos["image1"],
  "amazon-com": fileLogos["image1"],
  "flipkart": fileLogos["image2"],
  "myntra": fileLogos["image3"],
  "nykaa": fileLogos["image4"],
  "ajio": fileLogos["image5"],
  "tatacliq": fileLogos["image6"],
  "snapdeal": fileLogos["image7"],
  "meesho": fileLogos["image8"],
  "shopsy": fileLogos["image9"],
  "shopee": fileLogos["image10"],
  "paytm": fileLogos["image11"],
  "jiomart": fileLogos["image13"],
  "rekkoz": fileLogos["image14"],
  "limeroad": fileLogos["image15"],
  "ebay": fileLogos["image16"],
  "etsy": fileLogos["image17"],
  "mirraw": fileLogos["image18"],
  "shopify": fileLogos["image19"],
  "simsim": fileLogos["image20"],
  
  ...fileLogos
};

export default logos;