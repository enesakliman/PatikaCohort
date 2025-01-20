import Container from "../Container/Container";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 w-full z-50 ${
          isScrolled ? "navbar-scroll" : ""
        }`}
      >
        <Container>
          <Navbar />
        </Container>
      </header>
    </>
  );
}

export default Header;
