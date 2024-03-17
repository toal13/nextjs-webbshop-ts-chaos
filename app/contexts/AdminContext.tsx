import { Product, products as initialProducts } from "@/data";
import { useToast } from "@chakra-ui/react";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AdminContextValue {
  products: Product[];
  addProduct: (product: Product) => void;
}

const AdminContext = createContext({} as AdminContextValue);

// Skapa Provider-komponenten
function AdminProvider(props: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);
  const toast = useToast();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem("products", JSON.stringify(initialProducts));
    }
  }, []);

  const addProduct = (newProduct: Product) => {
    setProducts((currentProducts) => {
      const isProductPresent = currentProducts.some(
        (product) => product.id === newProduct.id
      );

      if (!isProductPresent) {
        const updatedProducts = [...currentProducts, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        toast({
          title: "Product added",
          description: `${newProduct.title} has been added to the store`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return updatedProducts;
      } else {
        toast({
          title: "Product already exists",
          description: `${newProduct.title} already exists in the store`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });

        return currentProducts;
      }
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
