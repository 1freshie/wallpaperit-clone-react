import styles from "./FooterAccordion.module.css";

const FooterAccordion = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="py-5 font-dm-serif text-base text-[#FFFFFF] font-bold flex justify-between items-center border-b border-[#666] cursor-pointer hover:underline">
        <h1>Shopping with Us</h1>
        <div className={`w-7 h-7 rotate-[270deg] ${styles.icon}`}></div>
      </div>
      <div className="py-5 font-dm-serif text-base text-[#FFFFFF] font-bold flex justify-between items-center border-b border-[#666] cursor-pointer hover:underline">
        <h1>Wallpaper Guides</h1>
        <div className={`w-7 h-7 rotate-[270deg] ${styles.icon}`}></div>
      </div>
      <div className="py-5 font-dm-serif text-base text-[#FFFFFF] font-bold flex justify-between items-center border-b border-[#666] cursor-pointer hover:underline">
        <h1>Visit Us</h1>
        <div className={`w-7 h-7 rotate-[270deg] ${styles.icon}`}></div>
      </div>
      <div className="py-5 font-dm-serif text-base text-[#FFFFFF] font-bold flex justify-between items-center border-b border-[#666] cursor-pointer hover:underline">
        <h1>How Can We Help?</h1>
        <div className={`w-7 h-7 rotate-[270deg] ${styles.icon}`}></div>
      </div>
    </div>
  );
}

export default FooterAccordion