"use client";

import { usePathname } from "next/navigation";

export default function CategoryHeader() {
  const pathname = usePathname();

  const title = pathname.split("/").at(1) || "Products";

  return (
    <header className="bg-[#141414] text-white">
      <div className="grid h-[240px] place-items-center border-t border-white/20">
        <h1 className="text-[40px] font-bold tracking-[1.43px]">{title}</h1>
      </div>
    </header>
  );
}
