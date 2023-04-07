interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return (
    <div
      id="close-icon"
      className="absolute w-10 h-10 right-4 cursor-pointer"
      style={{
        background:
          "url(../../assets/wallpaperit_sprite.png) no-repeat -30px -99px",
        backgroundSize: "auto",
      }}
      onClick={onClick}
    ></div>
  );
};

export default CloseIcon;
