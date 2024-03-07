import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { LayoutProps } from "./types";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body className={inter.className}>
        <Providers>
          <header>
            <Header />
          </header>

          <main>
            <Box h="100vh" m="2rem" bg="beige">
              {children}
            </Box>
          </main>

          <Footer />
          
        </Providers>
      </body>
    </html>
  );
}
