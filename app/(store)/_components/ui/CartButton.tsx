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

import Image from "next/image";
import IconButton from "./IconButton";
import Link from "next/link";

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
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <Image
                    src={item.imageUrl || "not found"}
                    alt={item.model || "not found"}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold capitalize">{item.model}</p>
                    <p>{item.price} PLN</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Link href="/cart">
                <Button className="w-full">Cart Summary</Button>
              </Link>
            </DrawerClose>
            <DrawerClose>
              <Button className="w-full" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartButton;
