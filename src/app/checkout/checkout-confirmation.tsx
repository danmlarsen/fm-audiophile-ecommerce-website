import { CartItemList } from "@/components/cart/cart";
import { useCart } from "@/components/cart/cart-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import IconOrderConfirmation from "@/components/ui/icons/IconOrderConfirmation";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CheckoutConfirmation({
  isSubmitted,
}: {
  isSubmitted: boolean;
}) {
  const router = useRouter();
  const { cartItems, resetCart, calcTotal } = useCart();

  const totalPrice = calcTotal();
  const shippingPrice = 50;
  const vatPrice = totalPrice * 0.2;
  const grandTotal = Math.ceil(totalPrice + shippingPrice + vatPrice);

  return (
    <Dialog open={isSubmitted}>
      <DialogContent className="p-8 md:max-w-[540px] md:gap-6 md:p-12">
        <DialogHeader className="md:gap-8">
          <IconOrderConfirmation />
          <DialogTitle className="max-w-[284px] text-start text-[24px] leading-0 md:text-[32px]">
            Thank you for your order
          </DialogTitle>
        </DialogHeader>

        <p className="text-black/50">
          You will receive an email confirmation shortly.
        </p>
        <div className="grid min-h-[140px] overflow-hidden rounded-lg md:grid-cols-[1fr_auto]">
          <div className="bg-secondary grid items-center p-4">
            <CartItemList
              cartItems={cartItems}
              summary={true}
              collapsable={true}
            />
          </div>
          <div className="flex flex-col justify-end bg-black px-8 py-10 text-white md:w-[198px]">
            <div className="font-medium text-white/50 uppercase">
              Grand total
            </div>
            <div className="text-lg font-bold">{formatPrice(grandTotal)}</div>
          </div>
        </div>

        <Button
          onClick={() => {
            resetCart();
            router.push("/");
          }}
        >
          Back to home
        </Button>
      </DialogContent>
    </Dialog>
  );
}
