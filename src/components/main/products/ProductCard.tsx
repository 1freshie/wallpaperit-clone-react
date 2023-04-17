import { useEffect, useState } from "react";

type ProductCardProps = {
  title: string;
  url: string;
  price: number;
  rating: number;
};

const ProductCard = (props: ProductCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { title, url, price, rating } = props;

  return (
    <article className="p-4 flex flex-col justify-center gap-y-4">
      <img src={url} alt={title} className="w-full h-full cursor-pointer" />
      <p className="cursor-pointer hover:underline text-base">
        {title.length > 20 ? `${title.slice(0, 20)}...` : title}
      </p>
      <div className="w-full flex items-center gap-x-2 cursor-pointer">
        <div className="flex items-center gap-x-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={`bi bi-star-fill ${
                index < Math.floor(rating) ? "text-[#FFC107]" : "text-[#E0E0E0]"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
        </div>
        <p className="text-base">{rating}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-base font-bold">£{price.toFixed(2)}</p>
        {!isMobile ? (
          <button className="underline cursor-pointer text-sm">
            Order example
          </button>
        ) : (
          <div title="Order example" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        )}
      </div>
      <p className="uppercase text-sm">Per roll</p>
    </article>
  );
};

export default ProductCard;
