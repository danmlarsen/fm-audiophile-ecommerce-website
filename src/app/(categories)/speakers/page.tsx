import { productsData } from "@/data/products-data";
import Products from "../products";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && defined(slug.current) && category == 'speakers']|order(newProduct desc, releaseDate desc)`,
);

export default async function SpeakersPage() {
  const products = await client.fetch(PRODUCTS_QUERY, {});

  return <Products productsData={products} />;
}
