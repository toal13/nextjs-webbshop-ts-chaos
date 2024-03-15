"use client";
import { Product } from "@/data";
import {
  Box,
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
import NextLink from "next/link";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function AdminSidebar(product: Product) {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerSize = "sm";
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
        fontSize={{ base: "1.5rem", md: "1.6rem" }}
        _hover={{ color: "brown" }}
        mb='0.5rem'
      >
        <IoPersonOutline />
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
            <Text fontSize='2xl' m='3rem' p='0.5rem' textTransform='uppercase'>
              Admin Panel
            </Text>
          </DrawerHeader>
          <hr color='black' />
          <DrawerBody>
            <NextLink
              href='/admin'
              // _hover={{ textDecoration: "none" }}
            >
              <Box
                m='3rem'
                padding='0.5rem'
                fontSize='1.5rem'
                textAlign='left'
                borderRadius='5px'
              >
                Admin - All Products
              </Box>
            </NextLink>
            <hr color='black' />

            <NextLink href='/admin/product/new'>
              <Box
                m='3rem'
                padding='0.5rem'
                fontSize='1.5rem'
                textAlign='left'
                borderRadius='5px'
              >
                New Product
              </Box>
            </NextLink>
            <hr color='black' />

            <NextLink href={`/admin/product/${product.id}`}>
              <Box
                m='3rem'
                padding='0.5rem'
                fontSize='1.5rem'
                textAlign='left'
                borderRadius='5px'
              >
                Edit Product
              </Box>
            </NextLink>
            <hr color='black' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
