import { Flex, Image, Square, Stack, Box, Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="black">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Square
            size={{ base: "60px", md: "100px" }}
            data-cy="product-quantity"
          >
            <Image src="klarna.png" alt="klarna" />
          </Square>
          <Square
            size={{ base: "60px", md: "100px" }}
            data-cy="product-quantity"
          >
            <Image src="visa.png" alt="visa" />
          </Square>
          <Square
            size={{ base: "60px", md: "100px" }}
            data-cy="product-quantity"
          >
            <Image src="master.png" alt="mastercard" />
          </Square>
          <Square
            size={{ base: "60px", md: "100px" }}
            data-cy="product-quantity"
          >
            <Image src="american.png" alt="american express" />
          </Square>
          <Square
            size={{ base: "60px", md: "100px" }}
            data-cy="product-quantity"
          >
            <Image src="swish.png" alt="swish" />
          </Square>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
