import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// SVGs
import HomeLogo from "./navbarSVGs/logoOne.svg";
import ABCLogo from "./navbarSVGs/logoTwo.svg";
import SignInLogo from "./navbarSVGs/logoThree.svg";
// COMPONENTS
import BurgerButton from "./burgerMenu/BurgerButton";
import MobileAdaptive from "./burgerMenu/MobileAdaptive";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279.99) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="h-[100px] bg-[#2B2B2B] px-[50px] mobile:px-[30px]">
      <div className="flex h-full items-center justify-between">
        <Link to="/" className="flex">
          <div className="mr-3 flex items-center">
            <img src={HomeLogo} alt="logo" />
          </div>
          <div className="flex cursor-pointer items-center">
            <img src={ABCLogo} alt="logo" />
          </div>
        </Link>

        <div className="flex items-center tablet:hidden">
          <ul className="flex items-center">
            <Link
              className="mx-[10px] px-[12px] py-[20px] font-workSans text-base font-semibold leading-snug text-white transition-colors hover:text-[#A259FF]"
              to="/marketplace"
            >
              Marketplace
            </Link>
            <Link
              className="mx-[10px] px-[12px] py-[20px] font-workSans text-base font-semibold leading-snug text-white transition-colors hover:text-[#A259FF]"
              to="/rankings"
            >
              Rankings
            </Link>
            <Link
              className="mx-[10px] px-[12px] py-[20px] font-workSans text-base font-semibold leading-snug text-white transition-colors hover:text-[#A259FF]"
              to="/connect-wallet"
            >
              Connect a wallet
            </Link>
          </ul>
          <Link to="/signup" className="flex h-full cursor-pointer items-center rounded-[20px] bg-[#A259FF] px-[30px] py-[20px] transition-colors hover:bg-[#7437c4]">
            <div className="mr-3">
              <img src={SignInLogo} alt="logo" />
            </div>
            <p className="font-workSans text-base font-semibold leading-snug text-white">
              Sign Up
            </p>
          </Link>
        </div>

        {/* BURGER MENU */}
        <BurgerButton onClick={toggleMobileMenu} />
        <MobileAdaptive isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
