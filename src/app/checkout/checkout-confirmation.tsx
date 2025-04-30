import { useCart } from "@/components/cart/cart-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thank you for your order</DialogTitle>
        </DialogHeader>
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
