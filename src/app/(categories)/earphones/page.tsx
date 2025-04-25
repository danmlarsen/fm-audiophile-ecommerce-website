import ImageYX1 from "@/assets/images/products/product-yx1-earphones/desktop/image-product.jpg";
import Products from "../products";

const productsData = [
  {
    title: "YX1 Wireless Earphones",
    slug: "yx1-wireless-earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: ImageYX1,
    new: true,
  },
];

export default function EarphonesPage() {
  return <Products productsData={productsData} />;
}
