import { CartItem, Product } from "@/data";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Skapa kontexten
interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  // removeFromCart
  // clearCart
}

const CartContext = createContext({} as CartContextValue);

// Skapa Provider-komponenten
function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Logiken för att ändra kundvagnen ligger nära tillståndet

  const addToCart = (product: Product) => {
    // 1. Om produkten redan finns i kundvagnen, öka antalet
    // 2. Annars, lägg till produkten i kundvagnen med antal 1

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

// Skapa en hook som ger oss tillgång till contexten
export const useCart = () => useContext(CartContext);
export default CartProvider;
