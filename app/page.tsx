"use client";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <main>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>

      <p>Det här är startsidan. Här ska alla produkterna visas.</p>
    </main>
  );
}
