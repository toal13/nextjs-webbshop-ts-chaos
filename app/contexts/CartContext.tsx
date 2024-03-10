import { CartItem, Product } from "@/data";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Skapa kontexten
interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextValue);

// Skapa Provider-komponenten
function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Logiken för att ändra kundvagnen ligger nära tillståndet

  const addToCart = (product: Product) => {
    console.log("initial cart", cart);
    // 1. Om produkten redan finns i kundvagnen, öka antalet
    // const isProductPresent = cart.find(
    //   (existingProduct) => existingProduct.id === product.id
    // );
    const isProductPresent = cart.some(
      (cartItem) => cartItem.id === product.id
    );
    console.log("isProductPresent", isProductPresent);

    if (isProductPresent) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      // 2. Annars, lägg till produkten i kundvagnen med antal 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (product: Product) => {
    console.log("I was removed");
  };

  const clearCart = () => {
    console.log("You removed all the products");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

// Skapa en hook som ger oss tillgång till contexten
export const useCart = () => useContext(CartContext);
export default CartProvider;
