"use client";

import { products } from "@/data";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <p>Det här är startsidan. Här ska alla produkterna visas.</p>
      <div>
        <h2>Products</h2>
        <Grid templateColumns='repeat(4, 1fr)' gap={3}>
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
      </div>
    </Box>
  );
}
