import ImageXX99II from "@/assets/images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import ImageXX99I from "@/assets/images/products/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ImageXX59 from "@/assets/images/products/product-xx59-headphones/desktop/image-product.jpg";
import ImageZX9 from "@/assets/images/products/product-zx9-speaker/desktop/image-product.jpg";
import ImageZX7 from "@/assets/images/products/product-zx7-speaker/desktop/image-product.jpg";
import ImageYX1 from "@/assets/images/products/product-yx1-earphones/desktop/image-product.jpg";

import ImageXX99IIGallery1 from "@/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import ImageXX99IIGallery2 from "@/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import ImageXX99IIGallery3 from "@/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import ImageXX99IGallery1 from "@/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import ImageXX99IGallery2 from "@/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import ImageXX99IGallery3 from "@/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import ImageXX59Gallery1 from "@/assets/images/products/product-xx59-headphones/desktop/image-gallery-1.jpg";
import ImageXX59Gallery2 from "@/assets/images/products/product-xx59-headphones/desktop/image-gallery-2.jpg";
import ImageXX59Gallery3 from "@/assets/images/products/product-xx59-headphones/desktop/image-gallery-3.jpg";
import ImageZX9Gallery1 from "@/assets/images/products/product-zx9-speaker/desktop/image-gallery-1.jpg";
import ImageZX9Gallery2 from "@/assets/images/products/product-zx9-speaker/desktop/image-gallery-2.jpg";
import ImageZX9Gallery3 from "@/assets/images/products/product-zx7-speaker/desktop/image-gallery-3.jpg";
import ImageZX7Gallery1 from "@/assets/images/products/product-zx7-speaker/desktop/image-gallery-1.jpg";
import ImageZX7Gallery2 from "@/assets/images/products/product-zx7-speaker/desktop/image-gallery-2.jpg";
import ImageZX7Gallery3 from "@/assets/images/products/product-zx7-speaker/desktop/image-gallery-3.jpg";
import ImageYX1Gallery1 from "@/assets/images/products/product-yx1-earphones/desktop/image-gallery-1.jpg";
import ImageYX1Gallery2 from "@/assets/images/products/product-yx1-earphones/desktop/image-gallery-2.jpg";
import ImageYX1Gallery3 from "@/assets/images/products/product-yx1-earphones/desktop/image-gallery-3.jpg";

import { StaticImageData } from "next/image";

export type TProductData = {
  title: string;
  shortTitle: string;
  slug: string;
  category: string;
  description: string;
  image: StaticImageData;
  price: number;
  new: boolean;
  features: string;
  inTheBox: { title: string; amount: number }[];
  galleryImages: StaticImageData[];
};

export const productsData: TProductData[] = [
  {
    title: "XX99 Mark II Headphones",
    shortTitle: "XX99 Mark II",
    slug: "xx99-mark-ii-headphones",
    category: "headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: ImageXX99II,
    price: 2999,
    new: true,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      {
        title: "Headphone Unit",
        amount: 1,
      },
      {
        title: "Replacement Earcups",
        amount: 2,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "3.5mm 5m Audio Cable",
        amount: 1,
      },
      {
        title: "Travel Bag",
        amount: 1,
      },
    ],
    galleryImages: [
      ImageXX99IIGallery1,
      ImageXX99IIGallery2,
      ImageXX99IIGallery3,
    ],
  },
  {
    title: "XX99 Mark I Headphones",
    shortTitle: "XX99 Mark I",
    slug: "xx99-mark-i-headphones",
    category: "headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: ImageXX99I,
    price: 1750,
    new: false,
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    inTheBox: [
      {
        title: "Headphone Unit",
        amount: 1,
      },
      {
        title: "Replacement Earcups",
        amount: 2,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "3.5mm 5m Audio Cable",
        amount: 1,
      },
    ],
    galleryImages: [ImageXX99IGallery1, ImageXX99IGallery2, ImageXX99IGallery3],
  },
  {
    title: "XX59 Headphones",
    shortTitle: "XX59",
    slug: "xx59-headphones",
    category: "headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: ImageXX59,
    price: 899,
    new: false,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [
      {
        title: "Headphone Unit",
        amount: 1,
      },
      {
        title: "Replacement Earcups",
        amount: 2,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "3.5mm 5m Audio Cable",
        amount: 1,
      },
    ],
    galleryImages: [ImageXX59Gallery1, ImageXX59Gallery2, ImageXX59Gallery3],
  },
  {
    title: "ZX9 Speaker",
    shortTitle: "ZX9 Speaker",
    slug: "zx9-speaker",
    category: "speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: ImageZX9,
    price: 4500,
    new: true,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    inTheBox: [
      {
        title: "Speaker Unit",
        amount: 2,
      },
      {
        title: "Speaker Cloth Panel",
        amount: 2,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "3.5mm 10m Audio Cable",
        amount: 1,
      },
      {
        title: "10m Optical Cable",
        amount: 1,
      },
    ],
    galleryImages: [ImageZX9Gallery1, ImageZX9Gallery2, ImageZX9Gallery3],
  },
  {
    title: "ZX7 Speaker",
    shortTitle: "ZX7 Speaker",
    slug: "zx7-speaker",
    category: "speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: ImageZX7,
    price: 3500,
    new: false,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    inTheBox: [
      {
        title: "Speaker Unit",
        amount: 2,
      },
      {
        title: "Speaker Cloth Panel",
        amount: 2,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "3.5mm 7.5m Audio Cable",
        amount: 1,
      },
      {
        title: "7.5m Optical Cable",
        amount: 1,
      },
    ],
    galleryImages: [ImageZX7Gallery1, ImageZX7Gallery2, ImageZX7Gallery3],
  },
  {
    title: "YX1 Wireless Earphones",
    shortTitle: "YX1 Wireless",
    slug: "yx1-wireless-earphones",
    category: "earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: ImageYX1,
    price: 599,
    new: true,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      {
        title: "Earphone Unit",
        amount: 1,
      },
      {
        title: "Multi-size Earplugs",
        amount: 6,
      },
      {
        title: "User Manual",
        amount: 1,
      },
      {
        title: "USB-C Charging Cable",
        amount: 1,
      },
      {
        title: "Travel Pouch",
        amount: 1,
      },
    ],
    galleryImages: [ImageYX1Gallery1, ImageYX1Gallery2, ImageYX1Gallery3],
  },
];
