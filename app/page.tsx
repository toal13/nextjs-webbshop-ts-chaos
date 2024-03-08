"use client";

import { products } from "@/data";
import {
  Box,
  Flex,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import HomePageTop from "./components/HomePageTop";

export default function Home() {
  return (
    <Flex flexDir='column'>
      <HomePageTop />
      <SimpleGrid columns={4} gap={3}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Flex flexDirection='column' width='300px' height='100%'>
              <Image
                src={product.image}
                alt={product.title}
                objectFit='cover'
                width='100%'
                maxHeight='200px'
              />
              <Box mt={2} flex='1'>
                <Flex
                  justifyContent='flex-start'
                  flexDirection='column'
                  height='100%'
                >
                  <Text>{product.title}</Text>
                  <Text>{product.price}kr</Text>
                </Flex>
              </Box>
              <Flex justifyContent='flex-end'>
                <Link
                  href='/'
                  color='black'
                  _hover={{ color: "blue.500" }}
                  textDecor='none'
                  mr={2}
                >
                  <LuHeart />
                </Link>
                <HiOutlineShoppingBag />
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
