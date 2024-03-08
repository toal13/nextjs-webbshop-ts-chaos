import { Container, Flex, Image, Square, Stack } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as='footer'
      py='5%'
      bg='black'
      color='gray.500'
      justify='space-around'
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Square size='100px' data-cy='product-quantity'>
            <Image src='klarna.png' alt='klarna' />
          </Square>
          <Square size='100px' data-cy='product-quantity'>
            <Image src='visa.png' alt='visa' />
          </Square>
          <Square size='100px' data-cy='product-quantity'>
            <Image src='master.png' alt='mastercard' />
          </Square>
          <Square size='100px' data-cy='product-quantity'>
            <Image src='american.png' alt='american express' />
          </Square>
          <Square size='100px' data-cy='product-quantity'>
            <Image src='swish.png' alt='swish' />
          </Square>
        </Stack>
      </Container>
    </Flex>
  );
}

export default Footer;
