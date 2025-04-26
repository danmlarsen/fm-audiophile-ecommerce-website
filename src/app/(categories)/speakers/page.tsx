import { productsData } from "@/data/products-data";
import Products from "../products";

export default function SpeakersPage() {
  return (
    <Products
      productsData={productsData.filter(
        (product) => product.category === "speaker",
      )}
    />
  );
}
