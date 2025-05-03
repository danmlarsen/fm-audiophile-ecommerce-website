import BestAudioGear from "@/components/best-audio-gear";
import ProductCategories from "@/components/product-categories";
import CategoryHeader from "./category-header";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CategoryHeader />
      <div className="px-6 md:px-10">
        <div className="mx-auto mt-16 max-w-6xl space-y-40 md:mt-32">
          {children}
          <ProductCategories />
          <BestAudioGear />
        </div>
      </div>
    </>
  );
}
