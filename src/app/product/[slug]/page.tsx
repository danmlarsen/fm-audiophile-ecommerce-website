import ProductHero from "@/components/product-hero";

import { notFound } from "next/navigation";
import ProductFeatures from "./product-features";
import ProductGallery from "./product-gallery";
import { defineQuery, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { type TProductDocument } from "@/types/productDocumentType";
import ProductAlternatives from "./product-alternatives";

const PRODUCT_QUERY = defineQuery(
  `*[_type == 'product' && slug.current == $slug][0]{..., alternatives[0..2]->{name,slug,mainImage,shortName}}`,
);

export async function generateStaticParams() {
  const products = await client.fetch<
    SanityDocument<{ slug: { current: string } }[]>
  >(`*[_type == 'product']{slug}`);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch<SanityDocument<TProductDocument>>(
    PRODUCT_QUERY,
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
