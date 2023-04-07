import styles from "./SmallNavbar.module.css";

const SmallNavbar = () => {
  return (
    <nav
      id="navbar--small"
      className="w-full h-28 flex flex-1 justify-between items-center gap-x-4 border-b-4 border-primary--pale-teal lg:hidden"
    >
      <div
        id="menu-and-search"
        className="h-full flex justify-center items-center"
      >
        <div
          id="nav--menu-icon"
          className="w-10 h-10 flex flex-1 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="w-10 h-10">
          <div className="flex flex-1 justify-center items-center">
            <div
              className={`w-10 h-10 ${styles.searchIcon}`}
            ></div>
          </div>
        </div>
      </div>

      <div className="w-1/3 h-1/3 flex justify-center items-center cursor-pointer">
        <img
          src="../../../assets/wallpaperit-Logo.png"
          alt="WallpaperIt Logo"
        />
      </div>

      <div
        id="wishlist-and-bag"
        className="h-full flex justify-around items-center"
      >
        <div className="w-10 h-10 flex flex-1 justify-center items-center cursor-pointer">
          <div
            className={`w-10 h-10 ${styles.wishlistIcon}`}
          ></div>
        </div>
        <div className="w-10 h-10 flex flex-1 justify-center items-center cursor-pointer">
          <div
            className={`w-10 h-10 ${styles.bagIcon}`}
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default SmallNavbar;