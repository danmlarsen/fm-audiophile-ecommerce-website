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
      {children}
      <div className="mx-auto mt-32 max-w-6xl space-y-40">
        <ProductCategories />
        <BestAudioGear />
      </div>
    </>
  );
}
