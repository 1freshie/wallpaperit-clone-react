import styles from "./ProductFilters.module.css";

type ProductFiltersProps = {
  length: number;
  sortedOption: string;
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProductFilters = (props: ProductFiltersProps) => {
  const { length, sortedOption, handleSort } = props;

  return (
    <div className="w-full my-4 px-4">
      <div className="w-full py-3 flex flex-col lg:flex-row justify-between items-center border-b-2 border-b-primary--pale-teal">
        <p className="font-avenir-book text-base">
          <strong>Found:</strong> {length === 0 ? "No products found" : length}{" "}
          results
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:gap-x-8">
          {/* <label htmlFor="sort">Sort:</label> */}
          <span className="flex justify-center items-center gap-x-1 cursor-pointer">
            Colour <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
          <span className="flex justify-center items-center gap-x-1 cursor-pointer">
            Brand <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
          <span className="flex justify-center items-center gap-x-1 cursor-pointer">
            Design Style <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
          <select
            id="sort"
            value={sortedOption}
            onChange={handleSort}
            className="p-2 rounded-sm bg-[#fff] cursor-pointer"
          >
            <option value="Sort" className="cursor-pointer">
              Sort
            </option>
            <option value="price-asc" className="cursor-pointer">
              Price: Low - High
            </option>
            <option value="price-desc" className="cursor-pointer">
              Price: High - Low
            </option>
            <option value="date-newest" className="cursor-pointer">
              Newest - Oldest
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
