import { Flex, Image, Stack, Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      py="5%"
      bg="black"
      color="gray.500"
      justify="space-around"
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
          <Image src="klarna.png" alt="klarna" boxSize="100" />
          <Image src="visa.png" alt="visa" boxSize="100px" />
          <Image src="master.png" alt="mastercard" boxSize="100px" />
          <Image
            src="american.png"
            alt="american express"
            boxSize="100px"
          />
          <Image src="swish.png" alt="swish" boxSize="100px" />
        </Stack>
      </Container>
    </Flex>
  );
}

export default Footer;
