"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CartSummary from "@/components/cart/cart-summary";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CheckoutForm from "./checkout-form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CheckoutConfirmation from "./checkout-confirmation";

export const checkoutFormSchema = z
  .object({
    fullName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(5).max(50),
    address: z.string().min(2).max(50),
    zipCode: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    paymentMethod: z.enum(["eMoney", "cod"]),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string(),
  })
  .superRefine((ctx) => {
    if (
      ctx.paymentMethod === "eMoney" &&
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
    <>
      <CheckoutConfirmation isSubmitted={form.formState.isSubmitSuccessful} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid items-start gap-8 lg:grid-cols-[1fr_350px]"
        >
          <Card className="px-12 py-14">
            <CardHeader>
              <CardTitle className="text-4xl uppercase">Checkout</CardTitle>
            </CardHeader>
            <CheckoutForm form={form} />
          </Card>
          <Card className="p-8">
            <CartSummary />
          </Card>
        </form>
      </Form>
    </>
  );
}
