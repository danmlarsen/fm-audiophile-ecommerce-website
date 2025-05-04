"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="px-6">
      <div className="mx-auto mt-4 max-w-6xl space-y-14 md:mt-12 lg:mt-32">
        <Button variant="ghost" onClick={() => router.back()} className="px-0">
          Go Back
        </Button>
        <div className="space-y-40">{children}</div>
      </div>
    </div>
  );
}
