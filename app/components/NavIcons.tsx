import { Flex, Link } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export default function NavIcons() {
  return (
    <Flex
      gap={{ base: "1.2rem", md: "2rem" }}
      fontSize={{ base: "1.4rem", md: "1.7rem" }}
    >
      <Link href='/' color='black' _hover={{ color: "brown" }} textDecor='none'>
        <IoPersonOutline />
      </Link>
      <Link href='/' color='black' _hover={{ color: "brown" }} textDecor='none'>
        <LuHeart />
      </Link>
      <Link href='/' color='black' _hover={{ color: "brown" }} textDecor='none'>
        <HiOutlineShoppingBag />
      </Link>
    </Flex>
  );
}
