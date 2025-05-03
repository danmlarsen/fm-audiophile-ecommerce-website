import BestAudioGear from "@/components/best-audio-gear";
import FeaturedProducts from "@/components/featured-products";
import NewProductHero from "@/components/new-product-hero";
import ProductCategories from "@/components/product-categories";

export default function HomePage() {
  return (
    <>
      <NewProductHero />
      <div className="px-6 md:px-10">
        <div className="mx-auto mt-32 max-w-6xl space-y-32 lg:space-y-40">
          <ProductCategories />
          <FeaturedProducts />
          <BestAudioGear />
        </div>
      </div>
    </>
  );
}
