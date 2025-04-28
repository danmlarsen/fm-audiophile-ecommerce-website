import Products from "../products";
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import { type TProductDocument } from "@/types/productDocumentType";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && defined(slug.current) && category == 'speakers']|order(newProduct desc, releaseDate desc)`,
);

export default async function SpeakersPage() {
  const products = await client.fetch<SanityDocument<TProductDocument[]>>(
    PRODUCTS_QUERY,
    {},
  );

  return <Products productsData={products} />;
}
