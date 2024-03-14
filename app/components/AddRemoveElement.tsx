"use client";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Square, Text } from "@chakra-ui/react";
import { useCart } from "../contexts/CartContext";
import { CartItemProps } from "./CartItem";

export default function AddRemoveElement({ item }: CartItemProps) {
  const { removeFromCart, addToCart } = useCart();
  return (
    <Flex>
      <Square
        bg='#D9D9D9'
        size='30px'
        onClick={() => removeFromCart(item)}
        data-cy='decrease-quantity-button'
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
      >
        <MinusIcon />
      </Square>
      <Square bg='#f4f2f2' size='30px' data-cy='product-quantity'>
        <Text>{item.quantity}</Text>
      </Square>
      <Square
        bg='#D9D9D9'
        size='30px'
        onClick={() => addToCart(item)}
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
        data-cy='increase-quantity-button'
      >
        <AddIcon />
      </Square>
    </Flex>
  );
}
