import { cn } from "@/lib/utils";
import Logo from "./ui/logo";
import Navigation from "./navigation";
import CartButton from "./cart/cart-button";
import MobileNav from "./mobile-nav";

export default function Header({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <header
      className={cn("flex items-center justify-between gap-10", className)}
      {...props}
    >
      <MobileNav />
      <div className="md:mr-auto lg:mr-0">
        <Logo />
      </div>
      <Navigation className="hidden lg:block" />
      <CartButton />
    </header>
  );
}
