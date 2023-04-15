const SignUpLetter = () => {
  return (
    <div className="w-full h-full p-4 font-avenir-book flex flex-col gap-y-6 justify-between items-center border-b border-[#666]">
      <h1 className="text-xl text-[#FFFFFF] text-center tracking-[3px]">
        Sign up to Our Newsletter
      </h1>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email here"
        className="w-full h-10 p-6 focus:outline-none rounded-full text-sm"
        required={true}
      />
      <p className="text-sm text-[#FFFFFF]">
        By signing up you are consenting to receive the newsletter and other
        promotional materials from Wallpaper It.
      </p>
      <button className="w-full h-10 p-3 flex flex-1 justify-center items-center bg-primary--pale-teal text-base text-center font-medium cursor-pointer text-primary--black tracking-[2px] uppercase rounded-full">
        Subscribe
      </button>
    </div>
  );
};

export default SignUpLetter;
