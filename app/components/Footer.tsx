import { Flex, Image, Square, Stack } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as='footer'
      py='5%'
      bg='black'
      color='gray.500'
      justify='space-around'
    >
      <Stack direction={"row"} spacing={2}>
        <Square size={{ base: "60px", md: "100px" }} data-cy='product-quantity'>
          <Image src='klarna.png' alt='klarna' />
        </Square>
        <Square size={{ base: "60px", md: "100px" }} data-cy='product-quantity'>
          <Image src='visa.png' alt='visa' />
        </Square>
        <Square size={{ base: "60px", md: "100px" }} data-cy='product-quantity'>
          <Image src='master.png' alt='mastercard' />
        </Square>
        <Square size={{ base: "60px", md: "100px" }} data-cy='product-quantity'>
          <Image src='american.png' alt='american express' />
        </Square>
        <Square size={{ base: "60px", md: "100px" }} data-cy='product-quantity'>
          <Image src='swish.png' alt='swish' />
        </Square>
      </Stack>
    </Flex>
  );
}

export default Footer;
