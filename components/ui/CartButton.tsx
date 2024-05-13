import useCartStore from "@/lib/store";
import { PiShoppingBagLight } from "react-icons/pi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import IconButton from "./IconButton";

const CartButton = () => {
  const cart = useCartStore((state) => state.items);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <IconButton
          icon={<PiShoppingBagLight size={25} />}
          count={cart.length}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader className="border-b">
            <DrawerTitle>
              <span className="flex gap-2 items-center tracking-wide">
                <PiShoppingBagLight size={22} /> Cart
              </span>
            </DrawerTitle>
            <DrawerDescription>Check out your shopping cart</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2"></div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button>Cart Summary</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartButton;
