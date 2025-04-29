"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CartSummary from "@/components/cart/cart-summary";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CheckoutForm from "./checkout-form";

export const checkoutFormSchema = z
  .object({
    fullName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    zipCode: z.string(),
    city: z.string(),
    country: z.string(),
    paymentMethod: z.enum(["eMoney", "cod"]),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string(),
  })
  .superRefine((ctx) => {
    if (
      ctx.paymentMethod === "cod" &&
      (ctx.eMoneyNumber.length === 0 || ctx.eMoneyPin.length === 0)
    )
      return false;
    return true;
  });

export default function CheckoutSection() {
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "eMoney",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-[1fr_350px] items-start gap-8"
      >
        <div className="bg-secondary rounded-lg px-12 py-14">
          <h1>Checkout</h1>
          <CheckoutForm form={form} />
        </div>
        <aside className="bg-secondary p-8">
          <CartSummary />
        </aside>
      </form>
    </Form>
  );
}
