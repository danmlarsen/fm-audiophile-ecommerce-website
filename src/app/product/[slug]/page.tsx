import ProductHero from "@/components/product-hero";

import { notFound } from "next/navigation";
import ProductFeatures from "./product-features";
import ProductGallery from "./product-gallery";
import { defineQuery, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { type TProductDocument } from "@/types/productDocumentType";
import ProductAlternatives from "./product-alternatives";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product' && slug.current == $slug][0]{..., alternatives[0..2]->{name,slug,mainImage,shortName}}`,
);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch<SanityDocument<TProductDocument>>(
    PRODUCTS_QUERY,
    { slug },
  );

  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} productPage={true} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <ProductAlternatives alternatives={product.alternatives} />
    </>
  );
}
