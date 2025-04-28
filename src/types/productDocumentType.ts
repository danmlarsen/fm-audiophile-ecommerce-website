import { PortableTextBlock } from "@portabletext/types";

export type TProductDocument = {
  id: number;
  name: string;
  shortName: string;
  cartName: string;
  slug: { current: string };
  category: string;
  releaseDate: string;
  description: PortableTextBlock;
  mainImage: string;
  cartThumbnail: string;
  price: number;
  newProduct: boolean;
  featuresDescription: PortableTextBlock;
  includedItems: { name: string; amount: number }[];
  galleryImages: string[];
  alternatives: TProductAlternative[];
};

export type TProductAlternative = {
  name: string;
  slug: { current: string };
  mainImage: string;
  shortName: string;
};
