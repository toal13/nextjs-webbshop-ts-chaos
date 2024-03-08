"use client";
import { Flex, Text } from "@chakra-ui/react";
import CartItem from "../components/CartItem";

export default function CheckoutPage() {
  return (
    <Flex
      width='80%'
      flexDir='column'
      justify='center'
      alignItems='center'
      m='16px auto'
      gap='1rem '
    >
      <Text fontSize={{ base: "1.5rem", md: "2.4rem" }}>Checkout</Text>
      <CartItem />
      <CartItem />
    </Flex>
  );
}
