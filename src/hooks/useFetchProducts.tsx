import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  averageRating: number;
  createdAt: Date;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const username = process.env.NEXT_PUBLIC_API_USERNAME;
      const password = process.env.NEXT_PUBLIC_API_PASSWORD;

      const response = await fetch(
        "https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products",
        {
          method: "GET",
          headers: {
            // Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            Authorization: `Basic ${Buffer.from(
              `${username}:${password}`
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok || response.status === 401) return;

      const data = await response.json();

      const fetchedProducts: Product[] = data.map((product: any) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.images[0].src,
        price: +product.price,
        averageRating: +(Math.random() * 5).toFixed(1),
        createdAt: new Date(product.date_created),
      }));

      const sortProductsByRating = fetchedProducts.sort(
        (a, b) => b.averageRating - a.averageRating
      );

      setProducts(sortProductsByRating);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return [products, isLoading, setProducts] as const;
};

export default useFetchProducts;
