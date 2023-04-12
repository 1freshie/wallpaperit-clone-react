import logo from "../../../assets/wallpaperit-Logo.png";
import Navbar from "./Navbar";

import styles from "./LargeNavbar.module.css";

const LargeNavbar = () => {
  console.log(logo.src);
  return (
    <nav className="hidden lg:block lg:w-full lg:h-40 lg:border-b-4 lg:border-primary--pale-teal lg:p-8">
      <div
        id="main-search"
        className="flex flex-1 justify-between items-center gap-x-20"
      >
        <img src={logo.src} alt="WallpaperIt Logo" />
        <div
          id="search-bar"
          className="w-1/3 h-8 relative font-avenir-book text-sm flex justify-center items-center"
        >
          <input
            type="text"
            id="search-bar--input"
            placeholder="Search for products..."
            className="w-full h-full border-2 border-primary--pale-teal rounded-full p-5 focus:outline-none text-base"
          />
          <div className="w-10 h-10 absolute right-3">
            <div className="flex flex-1 justify-center items-center cursor-pointer">
              <div className={`w-10 h-10 ${styles.icon1}`}></div>
            </div>
          </div>
        </div>
        <ul className="h-full flex justify-center items-center gap-x-12">
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <div className={`w-7 h-7 ${styles.icon2}`}></div>
            <span className="font-avenir-book text-sm tracking-[1px]">
              Sign In
            </span>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <div className={`w-8 h-8 ${styles.icon3}`}></div>
            <span className="font-avenir-book text-sm tracking-[1px]">
              Wishlist
            </span>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <div className={`w-7 h-7 ${styles.icon4}`}></div>
            <span className="font-avenir-book text-sm tracking-[1p  x]">
              Bag
            </span>
          </li>
        </ul>
      </div>

      <Navbar />
    </nav>
  );
};

export default LargeNavbar;
