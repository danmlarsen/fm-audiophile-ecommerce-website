import Products from "../products";

import ImageXX99II from "@/assets/images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import ImageXX99I from "@/assets/images/products/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ImageXX59 from "@/assets/images/products/product-xx59-headphones/desktop/image-product.jpg";

const productsData = [
  {
    title: "XX99 Mark II Headphones",
    slug: "xx99-mark-ii-headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: ImageXX99II,
    new: true,
  },
  {
    title: "XX99 Mark I Headphones",
    slug: "xx99-mark-i-headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: ImageXX99I,
    new: false,
  },
  {
    title: "XX59 Headphones",
    slug: "xx59-headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: ImageXX59,
    new: false,
  },
];

export default function HeadphonesPage() {
  return <Products productsData={productsData} />;
}
