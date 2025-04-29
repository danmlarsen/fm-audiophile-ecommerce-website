import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
