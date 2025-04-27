import { productsData } from "@/data/products-data";
import Products from "../products";
import { defineQuery, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { TProductDocument } from "@/types/productDocumentType";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && defined(slug.current) && category == 'headphones']|order(newProduct desc, releaseDate desc)`,
);

export default async function HeadphonesPage() {
  //<SanityDocument<TProductDocument[]>>
  const products = await client.fetch<SanityDocument<TProductDocument[]>>(
    PRODUCTS_QUERY,
    {},
  );

  return <Products productsData={products} />;
}
