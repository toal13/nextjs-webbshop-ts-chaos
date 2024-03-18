// app/providers.tsx
"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import AdminProvider from "./contexts/AdminContext";
import CartProvider from "./contexts/CartContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme}>
      <AdminProvider>
        <CartProvider>{children}</CartProvider>
      </AdminProvider>
    </ChakraProvider>
  );
}
