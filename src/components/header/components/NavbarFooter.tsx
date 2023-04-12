import styles from "./NavbarFooter.module.css";

const NavbarFooter = () => {
  return (
    <div id="nav--footer" className="w-full h-20 bg-[#F8F8F8] flex flex-1 justify-evenly items-center mb-8">
      <div className="flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div id="nav--check-icon" className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.icon1}`}>
          </div>
        </div>
        <div id="nav--foter-links">
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">Free Delivery</span>
          <span className="font-avenir-book text-sm">On All Orders Over £50</span>
        </div>
      </div>
      <div className="flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div id="nav--check-icon" className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.icon2}`}>
          </div>
        </div>
        <div id="nav--foter-links">
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">Customers Rate Us 4.7 /
            5</span>
        </div>
      </div>
      <div className="flex gap-x-1 justify-center items-center cursor-pointer hover:underline">
        <div id="nav--check-icon" className="w-7 h-7 flex flex-1 justify-center items-center">
          <div className={`w-7 h-7 ${styles.icon3}`}>
          </div>
        </div>
        <div id="nav--foter-links">
          <span className="font-dm-serif font-semibold text-base lg:text-lg lg:font-semibold">Order By 8pm</span>
          <span className="font-avenir-book text-sm">For Next Day Delivery</span>
        </div>
      </div>
    </div>
  )
}

export default NavbarFooter