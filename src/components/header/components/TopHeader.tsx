import { useState } from "react";

import CloseIcon from "./CloseIcon";

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
          <CloseIcon onClick={handleShowTopHeader} />
        </div>
      )}
    </>
  );
};

export default TopHeader;
