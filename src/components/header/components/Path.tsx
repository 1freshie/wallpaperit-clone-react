import React from "react";

const Path = () => {
  const paths = ["Home", "Wallpaper", "Shop By Design", "Animal"];

  return (
    <div className="hidden lg:block w-full px-5 font-avenir-book text-sm">
      {paths.map((path, index) => {
        return (
          <React.Fragment key={index}>
            <a className="underline" href="#">
              {path}
            </a>
            {index !== paths.length - 1 && <span className="mx-2">/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Path;
