import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { fonts } from "./fonts";
import { LayoutProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body className={inter.className}>
        <Header />
        <main>
          <Box h='100vh' m='2rem' bg='beige'>
            {children}
          </Box>
        </main>
        <footer>
          <p>© 2024</p>
        </footer>
      </body>
    </html>
  );
}
