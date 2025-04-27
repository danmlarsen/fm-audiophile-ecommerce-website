import { productsData } from "@/data/products-data";
import Products from "../products";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && defined(slug.current) && category == 'earphones']|order(newProduct desc, releaseDate desc)`,
);

export default async function EarphonesPage() {
  const products = await client.fetch(PRODUCTS_QUERY, {});

  return <Products productsData={products} />;
}
