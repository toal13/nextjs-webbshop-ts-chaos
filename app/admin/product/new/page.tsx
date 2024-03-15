import ProductForm from "@/app/components/ProductForm";
import { Product } from "@/data";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function AdminNewProductPage(product: Product) {
  return (
    <div>
      <Text textAlign='center' fontSize='1.7rem' mt='2rem'>
        New Product Form
      </Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        rounded='lg'
        justify='center'
        alignItems='center'
        width='80%'
        m='2rem auto'
        p='1rem'
        gap={{ base: "1rem", md: "2rem" }}
      >
        <Box
          width={{ base: "350px", md: "400px" }}
          height={{ base: "300px", md: "480px" }}
          rounded='lg'
          overflow='hidden'
        >
          <Image
            width='100%'
            height='100%'
            objectFit='cover'
            _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
            transition='0.3s ease-in-out'
            src='https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt='product image'
          ></Image>
        </Box>
        <ProductForm product={product} />
      </Flex>
    </div>
  );
}
