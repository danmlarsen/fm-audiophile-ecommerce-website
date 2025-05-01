import ProductCategories from "./product-categories";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import IconHamburger from "./ui/icons/IconHamburger";

export default function MobileNav() {
  return (
    <Drawer direction="top" shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <IconHamburger />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="px-10 py-14">
        <ProductCategories />
      </DrawerContent>
    </Drawer>
  );
}
