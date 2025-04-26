import ProductHero from "@/components/product-hero";
import { productsData } from "@/data/products-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductFeatures from "./product-features";
import ProductGallery from "./product-gallery";
import ProductAlternatives from "./product-alternatives";
import ProductCategories from "@/components/product-categories";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = productsData.find((product) => product.slug === slug);

  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} productPage={true} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
    </>
  );
}
