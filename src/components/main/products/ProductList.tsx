import useFetchProducts from "@/hooks/useFetchProducts";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

const ProductList = () => {
  const [products, isLoading, setProducts] = useFetchProducts();

  const [sortedOption, setSortedOption] = useState("Sort");

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSortedOption(value);

    // if (value === "price-asc") {
    //   const sortedProducts = products.sort((a, b) => a.price - b.price);
    //   setProducts(sortedProducts);
    // } else if (value === "price-desc") {
    //   const sortedProducts = products.sort((a, b) => b.price - a.price);
    //   setProducts(sortedProducts);
    // } else {
    //   const sortedProducts = products.sort(
    //     (a, b) => b.averageRating - a.averageRating
    //   );
    //   setProducts(sortedProducts);
    // }

    switch (value) {
      case "price-asc":
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
        break;
      case "price-desc":
        const sortedProducts2 = products.sort((a, b) => b.price - a.price);
        setProducts(sortedProducts2);
        break;
      case "date-newest":
        const sortedProducts3 = products.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
        setProducts(sortedProducts3);
        break;
      default:
        const sortedProducts4 = products.sort(
          (a, b) => b.averageRating - a.averageRating
        );
        setProducts(sortedProducts4);
        break;
    }
  };

  if (isLoading) {
    return (
      <p className="w-full h-full flex flex-1 justify-center items-center">
        Loading...
      </p>
    );
  }

  return (
    <>
      <ProductFilters
        length={products.length}
        sortedOption={sortedOption}
        handleSort={handleSort}
      />
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            url={product.imageUrl}
            price={product.price}
            rating={product.averageRating}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
