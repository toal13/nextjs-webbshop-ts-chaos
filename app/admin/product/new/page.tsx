"use client";
import ProductForm from "@/app/components/ProductForm";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function AdminNewProductPage() {
  const [imagePreview, setImagePreview] = useState("");
  return (
    <div>
      <Text textAlign='center' fontSize='1.7rem' mt='2rem'>
        New Product Form
      </Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        rounded='lg'
        justify='center'
        alignItems='center'
        width='80%'
        m='2rem auto'
        p='1rem'
        gap={{ base: "1rem", md: "2rem" }}
      >
        <Box>
          <Text p='0.2rem'>Image Preview</Text>

          <Box
            width={{ base: "350px", md: "400px" }}
            height={{ base: "300px", md: "480px" }}
            rounded='lg'
            overflow='hidden'
          >
            {" "}
            <Image
              width='100%'
              height='100%'
              objectFit='cover'
              _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
              transition='0.3s ease-in-out'
              src={
                imagePreview ||
                "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt='Preview product image'
            ></Image>
          </Box>
        </Box>
        <ProductForm setImagePreview={setImagePreview} />
      </Flex>
    </div>
  );
}
