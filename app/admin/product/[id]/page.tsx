"use client";

import ProductForm from "@/app/components/ProductForm";
import { products } from "@/data";
import { Heading } from "@chakra-ui/react";

type PageProps = { params: { id: string } };

export default function AdminEditProductPage({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main>
        console.log(params.id)
        <span> Product Does Not Exist - 404</span>
      </main>
    );
  }

  return (
    <div>
      <Heading>The edit product page.</Heading>
      <ProductForm product={product} />
    </div>
  );
}
