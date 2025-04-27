import Cart from "./cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function CartButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>cart</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[377px] p-8">
        <Cart />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
