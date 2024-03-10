import { CartItem, Product } from "@/data";
import { useToast } from "@chakra-ui/react";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Skapa kontexten
interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext({} as CartContextValue);

// Skapa Provider-komponenten
function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const toast = useToast();
  const [cartCount, setCartCount] = useState(0);

  // Recalculate cart count when cart changes
  useEffect(() => {
    const newCount = cart.reduce(
      (totalItems, item) => totalItems + item.quantity,
      0
    );
    setCartCount(newCount);
  }, [cart]);

  // Logiken för att ändra kundvagnen ligger nära tillståndet

  const addToCart = (product: Product) => {
    console.log("initial cart", cart);

    // 1. Om produkten redan finns i kundvagnen, öka antalet
    const isProductPresent = cart.find(
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
      toast({
        title: "Added to cart",
        description: "Your product has been added to your cart.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const removeFromCart = (product: Product) => {
    console.log("I was removed");
    const productToRemove = cart.find((cartItem) => cartItem.id === product.id);
    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        const newCart = cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        });
        setCart(newCart);
      } else {
        const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
        setCart(newCart);
      }
    }
  };

  const clearCart = () => {
    console.log("You removed all the products");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

// Skapa en hook som ger oss tillgång till contexten
export const useCart = () => useContext(CartContext);
export default CartProvider;
