// store.ts

import { create } from "zustand";
import { CartItem, CartState } from "@/types/store.types";

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item: CartItem) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        // Jeśli przedmiot już istnieje, zwiększ jego ilość
        console.log("Updating existing item quantity", existingItem, item);
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      console.log("Adding new item to cart", item);
      // Dodaj nowy przedmiot do koszyka
      return { items: [...state.items, item] };
    });
  },
  removeItem: (id: number) => {
    console.log("Removing item from cart", id);
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  updateQuantity: (id: number, quantity: number) => {
    console.log("Updating item quantity", id, quantity);
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => {
    console.log("Clearing cart");
    set({ items: [] });
  },
}));

export default useCartStore;
