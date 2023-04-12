import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className="w-full h-full flex flex-1 justify-around items-center font-avenir-book">
      <li className={`${styles.dropdown} relative inline-block`}>
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          <span className="flex justify-center items-center">
            Wallpaper <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
        </button>
        <div
          className={`${styles.dropdownContent} hidden absolute z-10 min-h-full min-w-[50vw] py-8 bg-[#FFFFFF]`}
        >
          <div className="">
            <h1 className="font-dm-serif text-base font-semibold mb-4">
              Shop By Design
            </h1>
            <div className="flex flex-col justify-center">
              <a href="#">Animal</a>
              <a href="#">Bird</a>
              <a href="#">Brick</a>
              <a href="#">Damask</a>
              <a href="#">Floral</a>
              <a href="#">Geometric</a>
              <a href="#">Leaves</a>
              <a href="#">Plain</a>
              <a href="#">Stripe</a>
              <a href="#">Tile</a>
              <a href="#">Trail</a>
              <a href="#">Trees</a>
              <a href="#">Wood</a>
              <div className="flex flex-col justify-center pt-10 underline">
                <a className="font-semibold" href="#">
                  View All
                </a>
                <a className="font-semibold" href="#">
                  New Arrivals
                </a>
                <a className="font-semibold" href="#">
                  Decorating Tools
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-dm-serif text-base font-semibold mb-4">
              Shop By Colour
            </h1>
            <div className="flex flex-col justify-center">
              <a href="#">Black</a>
              <a href="#">Blue</a>
              <a href="#">Brown</a>
              <a href="#">Cream</a>
              <a href="#">Glitter</a>
              <a href="#">Green</a>
              <a href="#">Gold</a>
              <a href="#">Grey</a>
              <a href="#">Metallic</a>
              <a href="#">Neutral</a>
              <a href="#">Pink</a>
              <a href="#">Purple</a>
              <a href="#">Red</a>
              <a href="#">Rose Gold</a>
              <a href="#">Silver</a>
              <a href="#">Teal</a>
              <a href="#">White</a>
              <a href="#">Yellow</a>
            </div>
          </div>
          <div className="">
            <h1 className="font-dm-serif text-base font-semibold mb-4">
              Shop By Room
            </h1>
            <div className="flex flex-col justify-center">
              <a href="#">Bathroom</a>
              <a href="#">Bedroom</a>
              <a href="#">Dining Room</a>
            </div>
            <div className="flex flex-col justify-center mt-8">
              <a href="#">Kids</a>
              <a href="#">Kitchen</a>
              <a href="#">Living Room</a>
            </div>
          </div>
          <div className="">
            <h1 className="font-dm-serif text-base font-semibold mb-4">
              Shop By Brand
            </h1>
            <div className="flex flex-col justify-center">
              <a href="#">Envy</a>
              <a href="#">Joules</a>
              <a href="#">Joules Kids</a>
              <a href="#">Laura Ashley</a>
              <a href="#">Next</a>
              <a href="#">Superfresco Easy</a>
            </div>
          </div>
        </div>
      </li>
      <li className="relative inline-block">
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          <span className="flex justify-center items-center">
            Paint <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
        </button>
      </li>
      <li className="relative inline-block">
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          <span className="flex justify-center items-center">
            Brands <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
        </button>
      </li>
      <li className="relative inline-block">
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          Wall Murals
        </button>
      </li>
      <li className="relative inline-block">
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          <span className="flex justify-center items-center">
            Wall Art <span className={`w-4 h-4 ${styles.icon}`}></span>
          </span>
        </button>
      </li>
      <li className="relative inline-block">
        <button className="text-base font-semibold tracking-[4px] cursor-pointer p-3 uppercase">
          Sale
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
