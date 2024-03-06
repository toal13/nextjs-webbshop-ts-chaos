"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export default function Header() {
  return (
    <header>
      <Flex flexDir='column'>
        <Flex justify='space-between' alignItems='center' width='90%' m='auto'>
          <Stack>
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
          <Text w='15rem' fontSize='1.4rem'>
            NEXT <br /> DESIGN
          </Text>
          <Flex gap='2rem' fontSize='1.7rem'>
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
        <Flex p='0.5rem' m='0' justify='center' bg='#E4A757' gap='1.5rem'>
          <Link
            href='/'
            color='white'
            _hover={{ color: "blue.500" }}
            textDecor='none'
          >
            Home
          </Link>
          <Link
            href='/about'
            color='white'
            _hover={{ color: "blue.500" }}
            textDecor='none'
          >
            About Us
          </Link>
          <Link
            href='/products'
            color='white'
            _hover={{ color: "blue.500" }}
            textDecor='none'
          >
            Products
          </Link>
          <Link
            href='/inspiration'
            color='white'
            _hover={{ color: "blue.500" }}
            textDecor='none'
          >
            Inspiration
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}
