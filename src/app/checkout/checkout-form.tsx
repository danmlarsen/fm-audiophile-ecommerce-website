"use client";

import { z } from "zod";
import { checkoutFormSchema } from "./checkout-section";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import IconCashOnDelivery from "@/components/ui/icons/IconCashOnDelivery";

export default function CheckoutForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof checkoutFormSchema>>;
}) {
  const paymentMethodValue = form.watch("paymentMethod");

  return (
    <div className="space-y-14">
      <div className="space-y-4">
        <h2 className="text-primary text-sm font-bold tracking-[0.93px] uppercase">
          Billing details
        </h2>
        <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Alexei Ward" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="alexei@mail.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 202-555-0136" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-primary text-sm font-bold tracking-[0.93px] uppercase">
          Shipping info
        </h2>
        <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="1137 Williams Avenue" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="United States" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-primary text-sm font-bold tracking-[0.93px] uppercase">
          Payment details
        </h2>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="grid items-start md:grid-cols-2">
                <FormLabel className="row-span-2">Payment method</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="has-[:checked]:border-primary hover:border-primary flex items-center gap-4 rounded-md border border-gray-300 p-4">
                      <FormControl>
                        <RadioGroupItem value="eMoney" />
                      </FormControl>
                      <FormLabel className="cursor-pointer">e-Money</FormLabel>
                    </FormItem>
                    <FormItem className="has-[:checked]:border-primary hover:border-primary flex items-center gap-4 rounded-md border border-gray-300 p-4">
                      <FormControl>
                        <RadioGroupItem value="cod" />
                      </FormControl>
                      <FormLabel className="cursor-pointer">
                        Cash on Delivery
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          {paymentMethodValue === "eMoney" && (
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="eMoneyNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>e-Money Number</FormLabel>
                    <FormControl>
                      <Input placeholder="238521993" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eMoneyPin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>e-Money PIN</FormLabel>
                    <FormControl>
                      <Input placeholder="6891" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          {paymentMethodValue === "cod" && (
            <div className="flex items-center gap-8">
              <div>
                <IconCashOnDelivery />
              </div>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
