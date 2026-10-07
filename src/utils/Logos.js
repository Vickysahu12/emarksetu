// src/utils/Logos.js
// Single source of truth for every marketplace / integration logo on the site.
// Files live in src/assets/marketplaces/<slug>.webp (optimised from the
// original ekatra-image PNGs — ~400 KB total instead of ~68 MB).
// Platforms without an image file render as a typographic wordmark instead.

const modules = import.meta.glob("../assets/marketplaces/*.webp", {
  eager: true,
  import: "default",
});

const logos = {};
for (const path in modules) {
  logos[path.split("/").pop().replace(".webp", "")] = modules[path];
}

export const CATEGORIES = [
  { id: "all", label: "All Platforms" },
  { id: "india", label: "Indian Marketplaces" },
  { id: "global", label: "Global Marketplaces" },
  { id: "amazon", label: "Amazon Worldwide" },
  { id: "tools", label: "Software & Logistics" },
];

// [slug, display name, category, wordmark?]
// wordmark: { kind: "amazon", suffix } | { color, accent? }
const RAW = [
  // Indian marketplaces
  ["amazon-in", "Amazon India", "india"],
  ["flipkart", "Flipkart", "india"],
  ["myntra", "Myntra", "india"],
  ["meesho", "Meesho", "india"],
  ["shopsy", "Shopsy", "india"],
  ["ajio", "Ajio", "india"],
  ["nykaa", "Nykaa", "india"],
  ["nykaa-fashion", "Nykaa Fashion", "india"],
  ["jiomart", "JioMart", "india"],
  ["snapdeal", "Snapdeal", "india"],
  ["tatacliq", "Tata CLiQ", "india"],
  ["paytm", "Paytm Mall", "india"],
  ["firstcry", "FirstCry", "india"],
  ["limeroad", "LimeRoad", "india"],
  ["shopclues", "ShopClues", "india"],
  ["bewakoof", "Bewakoof", "india"],
  ["mirraw", "Mirraw", "india"],
  ["glowroad", "GlowRoad", "india"],
  ["udaan", "Udaan", "india"],
  ["flipkart-wholesale", "Flipkart Wholesale", "india"],
  ["ajio-business", "Ajio Business", "india"],
  ["flipkart-assured", "Flipkart Assured", "india"],
  ["flipkart-smartbuy", "Flipkart SmartBuy", "india"],
  ["flipkart-lite", "Flipkart Lite", "india"],
  ["2gud", "2GUD", "india"],
  ["ebay-in", "eBay India", "india"],
  ["simsim", "Simsim", "india"],
  ["glance-roposo", "Glance Roposo", "india"],
  ["trell", "Trell", "india"],
  ["bijnis", "Bijnis", "india"],
  ["wholesalebox", "WholesaleBox", "india"],
  ["solv", "Solv", "india"],
  ["konnectbox", "KonnectBox", "india"],
  ["krimmple", "Krimmple", "india"],
  ["lotus-emall", "Lotus E-Mall", "india"],
  ["mall91", "Mall91", "india"],
  ["shop101", "Shop101", "india"],
  ["rediff", "Rediff Shopping", "india"],
  ["styfi", "Styfi", "india"],
  ["snapmint", "Snapmint", "india"],
  ["spoyl", "Spoyl", "india"],
  ["thashop", "Thashop", "india"],
  ["peppymode", "Peppymode", "india"],
  ["peachmode", "Peachmode", "india"],
  ["stylecaret", "StyleCaret", "india"],
  ["jharonka", "Jharonka", "india"],
  ["rekkoz", "Rekkoz", "india"],
  ["uniket", "Uniket", "india"],
  ["cbazaar", "Cbazaar", "india"],
  ["utsav-fashion", "Utsav Fashion", "india"],
  ["wmall", "WMall", "india"],
  ["nextdoor-hub", "NextDoor Hub", "india"],
  ["pickzkart", "PickZkart", "india"],
  ["kartify", "Kartify", "india"],
  ["maccaron", "Maccaron", "india"],
  ["partner-marketplace", "Partner Marketplace", "india"],

  // Global marketplaces
  ["ebay", "eBay", "global"],
  ["ebay-ca", "eBay Canada", "global"],
  ["etsy", "Etsy", "global"],
  ["walmart", "Walmart", "global", { color: "#0071ce", accent: "#ffc220" }],
  ["shopee", "Shopee", "global"],
  ["lazada", "Lazada", "global"],
  ["noon", "Noon", "global"],
  ["souq", "Souq", "global"],
  ["zalora", "Zalora", "global"],
  ["zilingo", "Zilingo", "global"],
  ["zifiti", "Zifiti", "global"],
  ["jollychic", "Jollychic", "global"],
  ["blibli", "Blibli", "global"],

  // Amazon worldwide + programmes
  ["amazon-com", "Amazon US", "amazon"],
  ["amazon-co-uk", "Amazon UK", "amazon", { kind: "amazon", suffix: ".co.uk" }],
  ["amazon-ca", "Amazon Canada", "amazon", { kind: "amazon", suffix: ".ca" }],
  ["amazon-ae", "Amazon UAE", "amazon"],
  ["amazon-sa", "Amazon Saudi Arabia", "amazon"],
  ["amazon-de", "Amazon Germany", "amazon", { kind: "amazon", suffix: ".de" }],
  ["amazon-fr", "Amazon France", "amazon"],
  ["amazon-it", "Amazon Italy", "amazon", { kind: "amazon", suffix: ".it" }],
  ["amazon-es", "Amazon Spain", "amazon"],
  ["amazon-nl", "Amazon Netherlands", "amazon", { kind: "amazon", suffix: ".nl" }],
  ["amazon-co-jp", "Amazon Japan", "amazon"],
  ["amazon-com-au", "Amazon Australia", "amazon", { kind: "amazon", suffix: ".com.au" }],
  ["amazon-sg", "Amazon Singapore", "amazon", { kind: "amazon", suffix: ".sg" }],
  ["amazon-com-mx", "Amazon Mexico", "amazon"],
  ["amazon-com-br", "Amazon Brazil", "amazon", { kind: "amazon", suffix: ".com.br" }],
  ["amazon-cn", "Amazon China", "amazon"],
  ["amazon-storefront", "Amazon Storefront", "amazon"],
  ["amazon-ebc", "Amazon A+ / EBC", "amazon"],
  ["seller-fulfilled-prime", "Seller Fulfilled Prime", "amazon"],
  ["amazon-flex", "Amazon Flex", "amazon"],

  // Software, carts & logistics
  ["shopify", "Shopify", "tools"],
  ["woocommerce", "WooCommerce", "tools", { color: "#7f54b3" }],
  ["magento", "Magento", "tools", { color: "#ee672f" }],
  ["prestashop", "PrestaShop", "tools"],
  ["unicommerce", "Unicommerce", "tools"],
  ["fynd", "Fynd", "tools"],
  ["kartrocket", "KartRocket", "tools"],
  ["omsguru", "OMSGuru", "tools"],
  ["eretailsetu", "eRetailSetu", "tools"],
  ["shiprocket", "Shiprocket", "tools", { color: "#6c3fd6" }],
  ["delhivery", "Delhivery", "tools", { color: "#111111", accent: "#e8312b" }],
];

export const marketplaces = RAW.map(([slug, name, category, wordmark]) => ({
  slug,
  name,
  category,
  src: logos[slug],
  wordmark: logos[slug] ? undefined : wordmark || { color: "#0a1a3f" },
}));

export const marketplaceBySlug = Object.fromEntries(
  marketplaces.map((m) => [m.slug, m])
);

export default logos;
