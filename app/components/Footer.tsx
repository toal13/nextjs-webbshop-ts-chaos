import { Flex, Box, Image } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      py="5%"
      bg="black"
      color="gray.500"
      justify="space-around"
      
    >
      <Box boxSize="100" objectFit="cover">
        <Image src="klarna.png" alt="klarna" />
      </Box>
      <Box boxSize="100px">
        <Image src="visa.png" alt="visa" />
      </Box>
      <Box boxSize="100px">
        <Image src="americanEx.png" alt="american express" />
      </Box>
      <Box boxSize="100px">
        <Image src="swish.png" alt="swish" />
      </Box>
    </Flex>
  );
}

export default Footer;
