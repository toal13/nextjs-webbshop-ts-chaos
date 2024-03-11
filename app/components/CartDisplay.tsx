"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

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
            {/* <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem /> */}
          </DrawerBody>

          <Link
            m='3rem'
            padding='0.5rem'
            fontSize='1.5rem'
            textAlign='center'
            bg='#E4A757'
            borderRadius='5px'
            _hover={{ bg: "#efdbc2" }}
            href='/checkout'
            data-cy='cart-link'
          >
            {" "}
            Checkout
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
}
