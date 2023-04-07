import { useState } from "react";

import styles from "./TopHeader.module.css";

const TopHeader = () => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  const handleShowTopHeader = () => {
    setShowTopHeader(!showTopHeader);
  };

  return (
    <>
      {showTopHeader && (
        <div
          id="top-header"
          className="w-full h-10 flex justify-center items-center bg-primary--pale-teal p-3 relative"
        >
          <span className="font-avenir-book text-xs font-medium md:text-sm md:font-semibold lg:text-base lg:font-semibold uppercase cursor-pointer hover:underline hover:text-[#008FB2]">
            Easter Sale! Save 20% On Wallpaper*!
          </span>
          <div
            id="close-icon"
            className={`absolute w-10 h-10 right-4 cursor-pointer ${styles.closeIcon}`}
            onClick={handleShowTopHeader}
          ></div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
