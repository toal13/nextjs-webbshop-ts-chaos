import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAdmin } from "@/app/contexts/AdminContext";
import ProductForm from "@/app/components/ProductForm";
import { Product } from "@/data";

interface AdminEditProductPageProps {
  productId: string;
}

export default function AdminEditProductPage({
  productId,
}: AdminEditProductPageProps) {
  const router = useRouter();
  const { products, updateProduct } = useAdmin();

  // Find the product with the matching productId
  const product = products.find((p) => p.id === productId);

  // Function to handle save button click
  const handleSave = (updatedProduct: Product) => {
    // Update the product
    updateProduct(productId, updatedProduct);
    // Navigate back to the admin page
    router.push("/admin");
  };

  // Function to handle exit button click
  const handleExit = () => {
    // Navigate back to the admin page
    router.push("/admin");
  };

  return (
    <Box>
      <Text textAlign="center" fontSize="1.7rem" mt="2rem">
        Edit Product
      </Text>
      {product && (
        <Flex
          flexDir={{ base: "column", md: "row" }}
          rounded="lg"
          justify="center"
          alignItems="center"
          width="80%"
          m="2rem auto"
          p="1rem"
          gap={{ base: "1rem", md: "2rem" }}
        >
          <ProductForm product={product} />
          <Flex mt="2rem" justifyContent="center" gap="1rem">
            <Button
              mt="2rem"
              type="submit"
              bg="#E4A757"
              _hover={{ bg: "#efdbc2" }}
              variant="solid"
              isLoading={formikProps.isSubmitting}
              onClick={() => {
                // Call the updateProduct function with the updated product data
                updateProduct(formikProps.values.id, formikProps.values);
                // Perform any additional actions if needed
                console.log("Product updated!");
                // Call handleSubmit to submit the form
                formikProps.handleSubmit();
              }}
            >
              {isEdit ? "UPDATE PRODUCT" : "ADD PRODUCT"}
            </Button>
            <Button onClick={handleExit} colorScheme="gray">
              Exit
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
