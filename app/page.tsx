"use client";

import { products } from "@/data";
import {
  Box,
  Flex,
  GridItem,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import HomePageTop from "./components/HomePageTop";
import { useCart } from "./contexts/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <Flex flexDir='column'>
      <HomePageTop />
      <SimpleGrid
        width='90%'
        m='auto'
        columns={{ base: 1, md: 3, lg: 4 }}
        gap={3}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <Flex flexDirection='column' height='100%' data-cy='product'>
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
                  <Text data-cy='product-title'>{product.title}</Text>
                  <Text data-cy='product-price'>{product.price}kr</Text>
                </Flex>
              </Box>
              <Flex justifyContent='flex-end' gap='3'>
                <Link href='/' color='black'>
                  <LuHeart />
                </Link>
                <Icon
                  fontSize='1.2rem'
                  _hover={{ cursor: "pointer", color: "brown" }}
                  onClick={() => addToCart(product)}
                >
                  <HiOutlineShoppingBag />
                </Icon>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
