"use client";

import { usePathname } from "next/navigation";

export default function CategoryHeader() {
  const pathname = usePathname();

  const title = pathname.split("/").at(1) || "Products";

  return (
    <header className="bg-[#181818] text-white">
      <div className="grid h-[102px] place-items-center border-t border-white/20 md:h-[240px]">
        <h1 className="text-[28px] font-bold tracking-[1.43px] md:text-[40px]">
          {title}
        </h1>
      </div>
    </header>
  );
}
