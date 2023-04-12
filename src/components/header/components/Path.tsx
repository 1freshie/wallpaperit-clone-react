const Path = () => {
  const paths = ["Home", "Wallpaper", "Shop By Design", "Animal"];

  return (
    <div className="hidden lg:block w-full px-5 font-avenir-book text-sm">
      {paths.map((path, index) => {
        return (
          <>
            <a key={index} className="underline" href="#">
              {path}
            </a>
            {index !== paths.length - 1 && <span className="mx-2">/</span>}
          </>
        );
      })}
    </div>
  );
};

export default Path;
