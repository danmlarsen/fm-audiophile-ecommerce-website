import ImageHeadphones from '@/assets/images/image-category-thumbnail-headphones.png';
import ImageEarphones from '@/assets/images/image-category-thumbnail-earphones.png';
import ImageSpeakers from '@/assets/images/image-category-thumbnail-speakers.png';
import Image from 'next/image';
import Link from 'next/link';

const categoryMockData = [
  {
    title: 'Headphones',
    href: '/categories/headphones',
    image: ImageHeadphones,
  },
  {
    title: 'Speakers',
    href: '/categories/speakers',
    image: ImageSpeakers,
  },
  {
    title: 'Earphones',
    href: '/categories/earphones',
    image: ImageEarphones,
  },
];

export default function ProductCategories() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-8">
        {categoryMockData.map(category => (
          <div key={category.title} className="h-[300px] relative flex flex-col justify-end">
            <div className="absolute inset-0 z-10 w-[300px] h-[260.27px] mx-auto">
              <Image src={category.image} alt={category.title} fill className="object-cover" />
            </div>
            <div className="h-[204px] bg-[#F1f1f1] rounded-md flex flex-col justify-end items-center py-8">
              <h4>{category.title}</h4>
              <Link href={category.href}>Shop</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
