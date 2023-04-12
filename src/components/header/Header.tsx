import LargeNavbar from "./components/LargeNavbar";
import NavbarFooter from "./components/NavbarFooter";
import SmallNavbar from "./components/SmallNavbar";
import TopHeader from "./components/TopHeader";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <SmallNavbar />
      <LargeNavbar />
      <NavbarFooter />
    </header>
  );
};

export default Header;
