import Products from "../products";
import { defineQuery, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { type TProductDocument } from "@/types/productDocumentType";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && defined(slug.current) && category == 'earphones']|order(newProduct desc, releaseDate desc)`,
);

export default async function EarphonesPage() {
  const products = await client.fetch<SanityDocument<TProductDocument[]>>(
    PRODUCTS_QUERY,
    {},
  );

  return <Products productsData={products} />;
}
