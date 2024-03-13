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
  removeSameIdItems: (product: Product) => void;
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
    // 1. Om produkten redan finns i kundvagnen, öka antalet
    const isProductPresent = cart.find(
      (cartItem) => cartItem.id === product.id
    );

    if (isProductPresent) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
      toast({
        title: "Quantity updated",
        description: "You have added one more item to your cart.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      // 2. Annars, lägg till produkten i kundvagnen med antal 1
      setCart([...cart, { ...product, quantity: 1 }]);
      toast({
        title: "Added to cart",
        description: "Your product has been added to your cart.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const removeFromCart = (product: Product) => {
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
        toast({
          title: "Item removed from cart",
          description: "An item has been removed form your cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
        setCart(newCart);
        toast({
          title: "Products removed from cart",
          description: "All items has been removed form your cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const removeSameIdItems = (product: Product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
    toast({
      title: "Product removed from cart",
      description: "Your product has been removed form your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Empty",
      description: "All items have been removed form your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeSameIdItems,
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
