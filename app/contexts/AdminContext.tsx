import { Product } from "@/data";
import { useToast } from "@chakra-ui/react";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Skapa kontexten
interface AdminContextValue {
  products: Product[];
  addProduct: (product: Product) => void;
}

const AdminContext = createContext({} as AdminContextValue);

// Skapa Provider-komponenten
function AdminProvider(props: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);
  const toast = useToast();

  // Load the products from local storage
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addProduct = (newProduct: Product) => {
    console.log("Adding  a new product", newProduct);
    setProducts([...products, newProduct]);
    // Save the products to local storage after adding a new product
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    toast({
      title: "Product added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <AdminContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
}

// Skapa en hook som ger oss tillgång till contexten
export const useAdmin = () => useContext(AdminContext);
export default AdminProvider;
