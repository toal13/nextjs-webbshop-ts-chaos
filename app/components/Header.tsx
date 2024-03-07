"use client";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    console.log("its working");
    setIsOpened(!isOpened);
  };
  return (
    <header>
      <Flex flexDir='column'>
        <Flex
          justify='space-between'
          alignItems='center'
          width='94%'
          m='auto'
          p='1rem'
          //  fontSize={{ base: "0.6rem", md: "1rem" }} // This is not working
        >
          <Flex align='center' gap='2rem' width='30%'>
            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
              <IconButton
                aria-label='Toggle menu'
                border='none'
                _hover={{ bg: "none", color: "brown", transform: "scale(1.2)" }}
                icon={
                  isOpened ? <CloseIcon /> : <HamburgerIcon fontSize='1.6rem' />
                }
                variant='outline'
              />
            </Box>

            <Stack display={{ base: "none", md: "flex" }}>
              <InputGroup width='15rem'>
                <Input
                  width='15rem'
                  placeholder='Search...'
                  p='8px'
                  border={"1px solid #e1dcd6"}
                  borderRadius='2rem'
                />
                <InputRightElement
                  height='100%'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  color='#9c9494'
                  mr='1rem'
                >
                  <SearchIcon />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Flex>
          <Text w='30%' fontSize={{ base: "1rem", md: "1.4rem" }}>
            NEXT <br /> DESIGN
          </Text>
          <Flex
            gap={{ base: "1.2rem", md: "2rem" }}
            fontSize={{ base: "1.4rem", md: "1.7rem" }}
          >
            <Link
              href='/'
              color='black'
              _hover={{ color: "blue.500" }}
              textDecor='none'
            >
              <IoPersonOutline />
            </Link>
            <Link
              href='/'
              color='black'
              _hover={{ color: "blue.500" }}
              textDecor='none'
            >
              <LuHeart />
            </Link>
            <Link
              href='/'
              color='black'
              _hover={{ color: "blue.500" }}
              textDecor='none'
            >
              <HiOutlineShoppingBag />
            </Link>
          </Flex>
        </Flex>

        <Collapse in={isOpened || true} animateOpacity>
          <Flex
            justify='center'
            p='0.3rem'
            bg='#E4A757'
            gap='2rem'
            fontSize='1.2rem'
            display={isOpened ? "flex" : "none"}
            css={{
              "@media (max-width: 768px)": {
                textAlign: "left",
                flexDirection: "column",
                padding: "1.5rem",
                fontSize: "1.2rem",
              },
              "@media (min-width: 769px)": {
                display: "flex",
                flexDirection: "row",
              },
            }}
          >
            <Link
              href='/'
              color='white'
              _hover={{ color: "brown" }}
              textDecor='none'
            >
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
        </Collapse>
      </Flex>
    </header>
  );
}
