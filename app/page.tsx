"use client";

import { products } from "@/data";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import HomePageTop from "./components/HomePageTop";

export default function Home() {
  return (
    <Flex flexDir='column'>
      <HomePageTop />
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
