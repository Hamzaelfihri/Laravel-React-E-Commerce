import ProductItem from "@/Components/App/ProductItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, PaginationProps, Product } from "@/types";
import { Head } from "@inertiajs/react";

export default function Home({
  products,
}: PageProps<{
  products: PaginationProps<Product>;
}>) {
  return (
    <AuthenticatedLayout>
      <Head title="Home" />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}