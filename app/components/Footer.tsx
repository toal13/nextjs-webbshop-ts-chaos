import { Box, Container, Image, Square, Stack, Text } from "@chakra-ui/react";
import { MiddleFooter } from "./MiddleFooter";

function Footer() {
  return (
    <>
    <MiddleFooter />
    <Box bg="black">
      <Container
        as={Stack}
        maxW={"6xl"}
        pt={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Square size={{ base: "60px", md: "100px" }}>
            <Image src="klarna.png" alt="klarna" />
          </Square>
          <Square size={{ base: "60px", md: "100px" }}>
            <Image src="visa.png" alt="visa" />
          </Square>
          <Square size={{ base: "60px", md: "100px" }}>
            <Image src="master.png" alt="mastercard" />
          </Square>
          <Square size={{ base: "60px", md: "100px" }}>
            <Image src="american.png" alt="american express" />
          </Square>
          <Square size={{ base: "60px", md: "100px" }}>
            <Image src="swish.png" alt="swish" />
          </Square>
        </Stack>
      </Container>
      <Box pb={6}>
        <Text fontSize={"sm"} textAlign={"center"} color="whitesmoke">
          Next Design By Group Chaos
        </Text>
        <Text fontSize={"sm"} textAlign={"center"} color="whitesmoke">
          © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
    </>
  );
}

export default Footer;
