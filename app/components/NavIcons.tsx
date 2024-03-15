"use client";

import { Circle, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { useCart } from "../contexts/CartContext";
import AdminSidebar from "./AdminSidebar";

export default function NavIcons() {
  const { cartCount } = useCart();

  return (
    <Flex
      position='relative'
      gap={{ base: "1.2rem", md: "2rem" }}
      fontSize={{ base: "1.4rem", md: "1.7rem" }}
      justify='center'
      align='center'
    >
      <NextLink
        href='/admin'
        data-cy='admin-link'
        color='black'
        // _hover={{ color: "brown" }}
        // textDecor='none'
      >
        {/* <IoPersonOutline /> */}
        <AdminSidebar />
      </NextLink>
      <Link color='black' _hover={{ color: "brown" }} textDecor='none'>
        <LuHeart />
      </Link>

      <NextLink href='/checkout' passHref color='black' data-cy='cart-link'>
        <HiOutlineShoppingBag />
      </NextLink>
      {cartCount > 0 && (
        <Circle
          size='25px'
          bg='tomato'
          color='white'
          fontSize='1rem'
          position='absolute'
          top='-0.6rem'
          right='-0.7rem'
          data-cy='cart-items-count-badge'
        >
          {cartCount}
        </Circle>
      )}
    </Flex>
  );
}
