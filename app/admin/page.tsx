"use client";

import { Product, products } from "@/data";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function AdminHomePage(product: Product) {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      m={{ base: "2rem", md: "6rem" }}
    >
      {products.map((product) => (
        <Flex
          key={product.id}
          flexDirection={{ base: "column", md: "row" }}
          borderWidth="1px"
          p="1rem"
          borderRadius="md"
          alignItems="center"
          boxShadow="md"
          width="100%"
          margin="0.5rem"
        >
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width="100px"
              height="100px"
            />
            <Flex
              flexDir="column"
              ml={{ base: "0", md: "1rem" }}
              mt={{ base: "1rem", md: "0" }}
            >
              <Text fontWeight="bold">{product.title}</Text>
              <Text>{product.description}</Text>
              <Text>Price: {product.price}</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
