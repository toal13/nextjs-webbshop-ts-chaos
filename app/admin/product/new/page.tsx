import ProductForm from "@/app/components/ProductForm";
import { Product } from "@/data";
import { Text } from "@chakra-ui/react";

export default function AdminNewProductPage(product: Product) {
  return (
    <div>
      <Text textAlign='center' fontSize='1.7rem' mt='rem'>
        New Product Form
      </Text>
      <ProductForm product={product} />
    </div>
  );
}
