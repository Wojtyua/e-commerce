import useCartStore from "@/lib/store";
import { CiHeart } from "react-icons/ci";
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
import Link from "next/link";

const WishlistButton = () => {
  const cart = useCartStore((state) => state.items);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="relative hover:bg-neutral-200 transition rounded-full p-2">
          <CiHeart size={25} />
          <span className="absolute bg-black-primary text-white-primary flex items-center justify-center text-xs font-bold rounded-full bottom-1 right-1 size-4">
            {cart.length}
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader className="border-b">
            <DrawerTitle>
              <span className="flex gap-2 items-center tracking-wide">
                <CiHeart size={22} /> Wishlist
              </span>
            </DrawerTitle>
            <DrawerDescription>Check out your wishlist</DrawerDescription>
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
                    <Link href={`/products/${item.id}`}>
                      <p className="font-semibold capitalize underline cursor-pointer">
                        {item.model}
                      </p>
                    </Link>
                    <p>{item.price} PLN</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
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

export default WishlistButton;
