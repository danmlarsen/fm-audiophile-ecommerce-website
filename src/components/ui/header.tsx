import { cn } from "@/lib/utils";
import Logo from "./logo";
import Navigation from "../navigation";
import CartButton from "../cart/cart-button";

export default function Header({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <header
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      <Logo />
      <Navigation />
      <CartButton />
    </header>
  );
}
