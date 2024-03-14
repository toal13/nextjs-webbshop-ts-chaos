import ProductForm from "@/app/components/ProductForm";

export default function AdminEditProductPage() {
  // hämta produkten utifrån params

  return (
    <div>
      <ProductForm product={product} />
    </div>
  );
}
