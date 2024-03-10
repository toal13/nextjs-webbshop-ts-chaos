"use client";

import { Circle, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { useCart } from "../contexts/CartContext";

export default function NavIcons() {
  const { cartCount } = useCart();

  return (
    <Flex
      position='relative'
      gap={{ base: "1.2rem", md: "2rem" }}
      fontSize={{ base: "1.4rem", md: "1.7rem" }}
    >
      <Link href='/' color='black' _hover={{ color: "brown" }} textDecor='none'>
        <IoPersonOutline />
      </Link>
      <Link href='/' color='black' _hover={{ color: "brown" }} textDecor='none'>
        <LuHeart />
      </Link>

      <NextLink href='/checkout' passHref color='black' data-cy='cart-link'>
        <HiOutlineShoppingBag />
      </NextLink>
      <Circle
        size='25px'
        bg='tomato'
        color='white'
        fontSize='1rem'
        position='absolute'
        top='-0.7rem'
        right='-0.9rem'
        data-cy='cart-items-count-badge'
      >
        {cartCount}
      </Circle>
    </Flex>
  );
}
