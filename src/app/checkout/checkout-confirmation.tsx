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
import { useRouter } from "next/navigation";

export default function CheckoutConfirmation({
  isSubmitted,
}: {
  isSubmitted: boolean;
}) {
  const router = useRouter();
  const { cartItems, resetCart } = useCart();

  return (
    <Dialog open={isSubmitted}>
      <DialogContent className="space-y-8 p-12 lg:max-w-[540px]">
        <DialogHeader className="space-y-8">
          <IconOrderConfirmation />
          <DialogTitle className="max-w-[284px] text-3xl">
            Thank you for your order
          </DialogTitle>
        </DialogHeader>

        <p>You will receive an email confirmation shortly.</p>
        <div className="grid min-h-[140px] grid-cols-[1fr_auto] overflow-hidden rounded-lg">
          <div className="bg-secondary p-4">
            <CartItemList summary={true} collapsable={true} />
          </div>
          <div className="flex w-[198px] flex-col justify-end bg-black px-8 py-10 text-white">
            <div className="uppercase">Grand total</div>
            <div>$5,446</div>
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
