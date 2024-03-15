import { Product } from "@/data";
import { Flex, Text } from "@chakra-ui/react";
export default function AdminHomePage(product: Product) {
  return (
    <Flex flexDir='column' gap='3rem' align='center' mt='2rem'>
      <Text fontSize={{ base: "1.3rem", md: "2rem" }}>Admin Page</Text>
      <Flex gap='3rem' mb='5rem'></Flex>

      {/* Lista alla produkterna */}
    </Flex>
  );
}
