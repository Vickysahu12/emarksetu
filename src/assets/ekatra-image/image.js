// src/utils/Logos.js

// Dynamic auto-import for all 100 images inside Emarksetu folder
const allImages = import.meta.glob(
  "../assets/ekatra-image/Emarksetu/image*.png",
  { eager: true, import: "default" }
);

// Map keys to imported image files (Apne brand keys update kar lena)
const logos = {
  amazon: allImages["../assets/ekatra-image/Emarksetu/image1.png"],
  flipkart: allImages["../assets/ekatra-image/Emarksetu/image2.png"],
  myntra: allImages["../assets/ekatra-image/Emarksetu/image3.png"],
  nykaa: allImages["../assets/ekatra-image/Emarksetu/image4.png"],
  ajio: allImages["../assets/ekatra-image/Emarksetu/image5.png"],
  tatacliq: allImages["../assets/ekatra-image/Emarksetu/image6.png"],
  snapdeal: allImages["../assets/ekatra-image/Emarksetu/image7.png"],
  meesho: allImages["../assets/ekatra-image/Emarksetu/image8.png"],
  shopsy: allImages["../assets/ekatra-image/Emarksetu/image9.png"],
  shopee: allImages["../assets/ekatra-image/Emarksetu/image10.png"],
  paytm: allImages["../assets/ekatra-image/Emarksetu/image11.png"],
  glance: allImages["../assets/ekatra-image/Emarksetu/image12.png"],
  jiomart: allImages["../assets/ekatra-image/Emarksetu/image13.png"],
  rekkoz: allImages["../assets/ekatra-image/Emarksetu/image14.png"],
  limeroad: allImages["../assets/ekatra-image/Emarksetu/image15.png"],
  ebay: allImages["../assets/ekatra-image/Emarksetu/image16.png"],
  etsy: allImages["../assets/ekatra-image/Emarksetu/image17.png"],
  mirraw: allImages["../assets/ekatra-image/Emarksetu/image18.png"],
  shopify: allImages["../assets/ekatra-image/Emarksetu/image19.png"],
  simsim: allImages["../assets/ekatra-image/Emarksetu/image20.png"],

  // 100 tak array based fallback dynamic access support:
  ...Object.fromEntries(
    Object.entries(allImages).map(([path, value]) => {
      // Image filename Extract karega eg: "image79"
      const fileName = path.split("/").pop().replace(".png", "");
      return [fileName, value];
    })
  ),
};

export default logos;