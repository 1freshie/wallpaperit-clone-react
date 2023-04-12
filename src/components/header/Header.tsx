import LargeNavbar from "./components/LargeNavbar";
import NavbarFooter from "./components/NavbarFooter";
import Path from "./components/Path";
import SmallNavbar from "./components/SmallNavbar";
import TopHeader from "./components/TopHeader";

const Header = () => {
  return (
    <header className="w-full">
      <TopHeader />
      <SmallNavbar />
      <LargeNavbar />
      <NavbarFooter />
      <Path />
    </header>
  );
};

export default Header;
