"use client";
import { Card, Flex, Text } from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import { useCart } from "../contexts/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  console.log(cart);

  return (
    <Flex
      width={{ base: "95%", md: "70%" }}
      flexDir='column'
      justify='center'
      alignItems='center'
      m='16px auto'
      // mt={{ base: "6rem", md: "10rem" }}
      gap='1rem '
    >
      <Text fontSize={{ base: "1.5rem", md: "2.4rem" }}>Checkout</Text>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}
      <Card
        w={{ base: "100%", md: "60%" }}
        h='4rem'
        bg='#f4f2f2'
        width='inherit'
        display='flex'
        justifyContent='center'
        alignItems='end'
        p='1.5rem'
      >
        <Text fontSize='1.5rem'>Total: 0kr</Text>
      </Card>
    </Flex>
  );
}
