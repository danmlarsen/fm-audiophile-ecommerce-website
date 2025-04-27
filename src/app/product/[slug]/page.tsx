import ProductHero from "@/components/product-hero";
import { productsData } from "@/data/products-data";

import { notFound } from "next/navigation";
import ProductFeatures from "./product-features";
import ProductGallery from "./product-gallery";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && slug.current == $slug][0]`,
);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);

  const product = await client.fetch(PRODUCTS_QUERY, { slug });

  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} productPage={true} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
    </>
  );
}
