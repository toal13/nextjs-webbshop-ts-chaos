import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
export default function NavLinks() {
  return (
    <Flex
      justify='center'
      p='0.3rem'
      bg='#E4A757'
      gap='2rem'
      fontSize='1.2rem'
      flexDir={{ base: "column", md: "row" }}
      textAlign={{ base: "left", md: "center" }}
      padding={{ base: "0.5rem", md: "0.5rem" }}
    >
      <Link href='/' color='white' _hover={{ color: "brown" }} textDecor='none'>
        Home
      </Link>
      <Link
        href='/about'
        color='white'
        _hover={{ color: "brown" }}
        textDecor='none'
      >
        About Us
      </Link>
      <Link
        href='/products'
        color='white'
        _hover={{ color: "brown" }}
        textDecor='none'
      >
        Products
      </Link>
      <Link
        href='/inspiration'
        color='white'
        _hover={{ color: "brown" }}
        textDecor='none'
      >
        Inspiration
      </Link>
    </Flex>
  );
}
