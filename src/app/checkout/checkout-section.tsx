"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CartSummary from "@/components/cart/cart-summary";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CheckoutForm from "./checkout-form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CheckoutConfirmation from "./checkout-confirmation";
import { useCart } from "@/components/cart/cart-context";

export const checkoutFormSchema = z
  .object({
    fullName: z.string().min(2, "Name too short").max(50, "Max 50 characters"),
    email: z.string().email("Wrong format").max(50, "Max 50 characters"),
    phone: z.string().min(5, "Number too short").max(50, "Max 50 characters"),
    address: z.string().min(2, "Required").max(50, "Max 50 characters"),
    zipCode: z.string().min(2, "Required").max(50, "Max 50 characters"),
    city: z.string().min(2, "Required").max(50, "Max 50 characters"),
    country: z.string().min(2, "Required").max(50, "Max 50 characters"),
    paymentMethod: z.enum(["eMoney", "cod"]),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string(),
  })
  .superRefine((data, ctx) => {
    if (
      data.paymentMethod === "eMoney" &&
      (data.eMoneyNumber.length === 0 || data.eMoneyNumber.length > 50)
    ) {
      ctx.addIssue({
        message: "Invalid number",
        path: ["eMoneyNumber"],
        code: "custom",
      });
    }

    if (data.paymentMethod === "eMoney" && data.eMoneyPin.length !== 4) {
      ctx.addIssue({
        message: "Invalid PIN",
        path: ["eMoneyPin"],
        code: "custom",
      });
    }
  });

export default function CheckoutSection() {
  const { cartItems } = useCart();

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

  function onSubmit() {}

  return (
    <>
      <CheckoutConfirmation isSubmitted={form.formState.isSubmitSuccessful} />
      {cartItems.length > 0 && (
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
      )}
    </>
  );
}
