"use client";

import { products } from "@/data";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir='column'>
      <Flex
        width='100%'
        // mt={{ base: "0", md: "6rem" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box width={{ base: "100%", md: "50%" }} height='80vh'>
          <Image
            src={
              "https://images.pexels.com/photos/7175564/pexels-photo-7175564.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=''
            height='100%'
            width='100%'
            objectFit='cover'
          />
        </Box>
        <Box width='50%' height='80vh' display={{ base: "none", md: "block" }}>
          <Image
            src={
              "https://images.pexels.com/photos/6580416/pexels-photo-6580416.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=''
            height='100%'
            width='100%'
            objectFit='cover'
          />
        </Box>
      </Flex>
      <Box>
        <Grid templateColumns='repeat(1, 1fr)' gap={3}>
          {products.map((product, index) => (
            <GridItem key={index}>
              <Box width='300px' height='200px'>
                <Image
                  src={product.image}
                  alt={product.title}
                  objectFit='cover'
                  width='100%'
                  height='100%'
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
