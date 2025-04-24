import BestAudioGear from '@/components/best-audio-gear';
import FeaturedProducts from '@/components/featured-products';
import NewProductHero from '@/components/new-product-hero';
import ProductCategories from '@/components/product-categories';

export default function HomePage() {
  return (
    <>
      <NewProductHero />

      <div className="max-w-6xl mx-auto mt-32 space-y-40">
        <ProductCategories />
        <FeaturedProducts />
        <BestAudioGear />
      </div>
    </>
  );
}
