"use client";

import { z } from "zod";
import { checkoutFormSchema } from "./checkout-section";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
                <div className="flex items-center justify-between">
                  <FormLabel>Name</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>Email Address</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>Phone Number</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>Address</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>ZIP Code</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>City</FormLabel>
                  <FormMessage />
                </div>
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
                <div className="flex items-center justify-between">
                  <FormLabel>Country</FormLabel>
                  <FormMessage />
                </div>
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
                    <FormItem>
                      <label
                        htmlFor="eMoney"
                        className="has-[:checked]:border-primary hover:border-primary flex cursor-pointer items-center gap-4 rounded-md border border-gray-300 p-4 transition-colors duration-300"
                      >
                        <FormControl>
                          <RadioGroupItem id="eMoney" value="eMoney" />
                        </FormControl>
                        <span>e-Money</span>
                      </label>
                    </FormItem>
                    <label
                      htmlFor="cod"
                      className="has-[:checked]:border-primary hover:border-primary flex cursor-pointer items-center gap-4 rounded-md border border-gray-300 p-4 transition-colors duration-300"
                    >
                      <FormControl>
                        <RadioGroupItem id="cod" value="cod" />
                      </FormControl>
                      <span className="cursor-pointer">Cash on Delivery</span>
                    </label>
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
                    <div className="flex items-center justify-between">
                      <FormLabel>e-Money Number</FormLabel>
                      <FormMessage />
                    </div>
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
                    <div className="flex items-center justify-between">
                      <FormLabel>e-Money PIN</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="6891" {...field} />
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
