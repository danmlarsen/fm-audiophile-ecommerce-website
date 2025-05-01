"use client";

import { Button } from "./button";

export function AmountInput({
  amount,
  onAmountChanged,
}: {
  amount: number;
  onAmountChanged: (amount: number) => void;
}) {
  return (
    <div className="grid h-8 w-24 grid-cols-3 items-center bg-[#f1f1f1]">
      <Button
        onClick={() => onAmountChanged(amount - 1)}
        size="sm"
        className="text-muted hover:text-primary focus-visible:ring-primary bg-transparent p-0 shadow-none hover:bg-transparent"
      >
        -
      </Button>
      <div className="text-center">{amount}</div>
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
