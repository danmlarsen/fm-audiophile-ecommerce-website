import ImageZX9 from "@/assets/images/products/product-zx9-speaker/desktop/image-product.jpg";
import ImageZX7 from "@/assets/images/products/product-zx7-speaker/desktop/image-product.jpg";
import Products from "../products";

const productsData = [
  {
    title: "ZX9 Speaker",
    slug: "zx9-speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: ImageZX9,
    new: true,
  },
  {
    title: "ZX7 Speaker",
    slug: "zx7-speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: ImageZX7,
    new: false,
  },
];

export default function SpeakersPage() {
  return <Products productsData={productsData} />;
}
