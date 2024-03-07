"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartItem from "./CartItem";

export default function CartDisplay() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerSize = "md";
  const handleClick = () => {
    setSize(drawerSize);
    onOpen();
  };

  return (
    <>
      <Icon
        position='relative'
        onClick={() => handleClick()}
        key={drawerSize}
        fontSize={{ base: "1.5rem", md: "1.7rem" }}
        _hover={{ color: "brown" }}
      >
        <HiOutlineShoppingBag />
      </Icon>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            bg='transparent'
            border='none'
            fontSize='1.1rem'
            _hover={{
              color: "brown",
              cursor: "pointer",
              transform: "scale(1.3)",
            }}
          />
          <DrawerHeader>
            <Text fontSize='3xl'>Your Cart</Text>
          </DrawerHeader>
          <DrawerBody>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </DrawerBody>
          <Button
            m='3rem'
            onClick={onClose}
            fontSize='1.5rem'
            bg='#E4A757'
            _hover={{ bg: "#efdbc2" }}
          >
            Checkout
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}
