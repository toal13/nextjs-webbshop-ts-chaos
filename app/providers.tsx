// app/providers.tsx
"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import CartProvider from "./contexts/CartContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  );
}
