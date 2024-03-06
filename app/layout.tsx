import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { LayoutProps } from "./types";
import { Providers } from "./providers";
import { fonts } from "./fonts";

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
        <header>
          <Link href="/">
            <h1>NextJS webbshop</h1>
          </Link>
        </header>
        <Providers>{children}</Providers>
        <footer>
          <p>© 2024</p>
        </footer>
      </body>
    </html>
  );
}
