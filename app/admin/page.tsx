import { Product } from "@/data";
import { Flex, Text } from "@chakra-ui/react";
export default function AdminHomePage(product: Product) {
  return (
    <Flex flexDir='column' gap='3rem' align='center' mt='2rem'>
      <Text fontSize={{ base: "1.3rem", md: "2rem" }}>Admin Page</Text>
      <Flex gap='3rem' mb='5rem'>
        {/* <NextLink href={`/admin/product/${product.id}`} passHref>
          <Box
            p='0.5rem 1.2rem'
            bg='#E4A757'
            fontSize='1.5rem'
            borderRadius='0.5rem'
          >
            Edit Product
          </Box>
        </NextLink>
        <NextLink
          href='/admin/product/new'
          passHref
          // _hover={{ textDecoration: "none" }}
        >
          <Box
            p='0.5rem 1.2rem'
            bg='#E4A757'
            fontSize='1.5rem'
            borderRadius='0.5rem'
          >
            New Product
          </Box>
        </NextLink> */}
      </Flex>

      {/* Lista alla produkterna */}
    </Flex>
  );
}
