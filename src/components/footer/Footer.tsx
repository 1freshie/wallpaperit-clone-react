import FooterAccordion from "./components/FooterAccordion";
import SignUpLetter from "./components/SignUpLetter";
import Socials from "./components/Socials";

const Footer = () => {
  return (
    <footer className="w-full h-full mt-16 bg-primary--black p-3">
      <FooterAccordion />
      <SignUpLetter />
      <Socials />
    </footer>
  );
};

export default Footer;
