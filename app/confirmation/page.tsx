"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Table,
  Flex,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tfoot,
} from "@chakra-ui/react";
import { useCart } from "../contexts/CartContext";

export default function Confirmation() {
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
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
            Random number
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
          {cart.map((item) => (
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
    </Container>
  );
}
