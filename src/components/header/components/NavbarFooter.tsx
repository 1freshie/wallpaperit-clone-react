import styles from "./NavbarFooter.module.css";

const NavbarFooter = () => {
  return (
    <div className="w-full h-20 bg-[#F8F8F8] flex flex-1 justify-evenly items-center mb-8">
      <div className="flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.checkIcon}`}></div>
        </div>
        <div>
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">
            Free Delivery
          </span>
          <span className="ml-2 font-avenir-book text-sm">
            On All Orders Over £50
          </span>
        </div>
      </div>
      <div className="hidden md:flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.checkIcon}`}></div>
        </div>
        <div>
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">
            Customers Rate Us 4.7 / 5
          </span>
        </div>
      </div>
      <div className="hidden md:flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.checkIcon}`}></div>
        </div>
        <div>
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">
            Free & Easy
          </span>
          <span className="ml-2 font-avenir-book text-sm">
            Returns*
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarFooter;
