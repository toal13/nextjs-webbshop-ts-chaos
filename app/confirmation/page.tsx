"use client";

import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useCustomer } from "../contexts/CustomerContext";

function generateRandomOrderNumber(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let orderNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderNumber += characters[randomIndex];
  }

  return orderNumber;
}

export default function Confirmation() {
  const { cart, clearCartSilently } = useCart();
  const [orderItems] = useState(cart);
  const orderNumber = generateRandomOrderNumber(12);
  const { customerData } = useCustomer();

  useEffect(() => {
    clearCartSilently();
  }, [clearCartSilently]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += Number(item.price) * item.quantity;
    });
    return totalPrice;
  };

  return (
    <Container maxW="container.lg" py={10}>
      <Box>
        <Heading as="h1" mb={6}>
          Order Confirmation
        </Heading>
        <Text mb={6}>
          Order Number:{" "}
          <Text as="span" fontWeight="bold">
            {orderNumber}
          </Text>
        </Text>
        <Text mb={6}>Thank you for choosing to shop with us.</Text>
        <Text mb={6}>
          {" "}
          We understand that you are just dying to get your new design favorite
          home, and we promise to do our best to ship your order as soon as we
          can. Our ambition is to help you create a home to love and to which
          you proudly open the door. We therefore hope that you will be
          completely satisfied with your order. Welcome back. Nest Desgin
        </Text>
      </Box>
      <Table variant="simple">
        <Thead bg="gray.200">
          <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderItems.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Flex alignItems="center">
                  <Image src={item.image} alt={item.title} w="50px" h="50px" />
                  <Text ml="2">{item.title}</Text>
                </Flex>
              </Td>
              <Td>{item.quantity}</Td>
              <Td>{item.price}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot bg="gray.200">
          <Tr>
            <Td fontWeight="bold" colSpan={2}>
              Total:
            </Td>
            <Td fontWeight="bold">{calculateTotalPrice()} kr</Td>
          </Tr>
        </Tfoot>
      </Table>
      <Divider />
      <Box>
        <Heading as="h1" mb={6}>
          Delivery Information
        </Heading>
        <Text mb={6}>
          {customerData.firstName} {customerData.lastName}
        </Text>
        <Text mb={6}>{customerData.address}</Text>
        <Text mb={6}>{customerData.postalCode}</Text>
        <Text mb={6}>{customerData.city}</Text>
        <Text mb={6}>{customerData.phone}</Text>
        <Text mb={6}>{customerData.email}</Text>
      </Box>
    </Container>
  );
}
