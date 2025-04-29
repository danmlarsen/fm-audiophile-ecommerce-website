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

export default function CheckoutForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof checkoutFormSchema>>;
}) {
  const paymentMethodValue = form.watch("paymentMethod");

  return (
    <div className="space-y-14">
      <div>
        <h2>Billing details</h2>
        <div className="grid grid-cols-2 gap-4">
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

      <div>
        <h2>Shipping info</h2>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
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

      <div>
        <h2>Payment details</h2>
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2 items-start">
              <FormLabel className="row-span-2">Payment method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem className="flex items-center gap-4">
                    <FormControl>
                      <RadioGroupItem value="eMoney" />
                    </FormControl>
                    <FormLabel>e-Money</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-4">
                    <FormControl>
                      <RadioGroupItem value="cod" />
                    </FormControl>
                    <FormLabel>Cash on Delivery</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        {paymentMethodValue === "eMoney" && (
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
