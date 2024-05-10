export interface CartItem {
  id: number | null;
  model: string | null;
  price: number | null;
  quantity: number;
  imageUrl: string | null;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}
