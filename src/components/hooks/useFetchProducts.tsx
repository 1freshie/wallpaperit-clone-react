import { useEffect, useState } from "react";

type Product = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
      );

      if (!result.ok) return;

      const data = await result.json();

      setProducts(data);
    };

    fetchData();
  }, []);

  return { products };
};

export default useFetchProducts;
