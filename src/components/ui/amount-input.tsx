"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";

export function AmountInput({
  className,
  amount,
  onAmountChanged,
}: React.ComponentProps<"div"> & {
  amount: number;
  onAmountChanged: (amount: number) => void;
}) {
  return (
    <div
      className={cn(
        "grid min-h-8 w-24 grid-cols-3 items-center bg-[#f1f1f1]",
        className,
      )}
    >
      <Button
        onClick={() => onAmountChanged(amount - 1)}
        size="sm"
        className="text-muted hover:text-primary focus-visible:ring-primary bg-transparent p-0 shadow-none hover:bg-transparent"
      >
        -
      </Button>
      <div className="text-center font-bold">{amount}</div>
      <Button
        onClick={() => onAmountChanged(amount + 1)}
        size="sm"
        className="text-muted hover:text-primary focus-visible:ring-primary bg-transparent p-0 shadow-none hover:bg-transparent"
      >
        +
      </Button>
    </div>
  );
}
