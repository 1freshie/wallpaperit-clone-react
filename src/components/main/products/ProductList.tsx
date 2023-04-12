import useFetchProducts from "@/components/hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useFetchProducts();

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} title={product.title} url={product.url} />
      ))}
    </div>
  );
};

export default ProductList;
