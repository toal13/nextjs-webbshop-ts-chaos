"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Confirmation() {
  return (
    <Container maxW="container.lg" py={10}>
      <Box textAlign="center">
        <Heading as="h1" mb={6}>
          Order Confirmation
        </Heading>
        <Text mb={6}>Order Number: Random number</Text>
        <Text mb={6}>Thank you for choosing to shop with us.</Text>
        <Text mb={6}>
          {" "}
          We understand that you are just dying to get your new design favorite
          home, and we promise to do our best to ship your order as soon as we
          can. Our ambition is to help you create a home to love and to which
          you proudly open the door. We therefore hope that you will be
          completely satisfied with your order. Welcome back. Nest Desgin
        </Text>
      </Box>
    </Container>
  );
}
