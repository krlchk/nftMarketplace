import { useEffect, useState } from "react";
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

  return (
    <header className="mobile:px-[30px] h-[100px] bg-[#2B2B2B] px-[50px]">
      <div className="flex h-full items-center justify-between">
        
        <div className="flex">
          <div className="mr-3 flex items-center">
            <img src={HomeLogo} alt="logo" />
          </div>
          <div className="flex items-center">
            <img src={ABCLogo} alt="logo" />
          </div>
        </div>

        <div className="tablet:hidden flex items-center">
          <ul className="flex items-center">
            <a
              className="font-workSans transition-colors hover:text-gray-400 mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
              href=""
            >
              Marketplace
            </a>
            <a
              className="font-workSans transition-colors hover:text-gray-400 mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
              href=""
            >
              Rankings
            </a>
            <a
              className="font-workSans transition-colors hover:text-gray-400 mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
              href=""
            >
              Connect a wallet
            </a>
          </ul>
          <div className="flex h-full items-center rounded-[20px] transition-colors hover:bg-[#7437c4] bg-[#A259FF] px-[30px] py-[20px]">
            <div className="mr-3">
              <img src={SignInLogo} alt="logo" />
            </div>
            <p className="font-workSans text-base font-semibold leading-snug text-white">
              Sing Up
            </p>
          </div>
        </div>

        {/* BURGER MENU */}
        <BurgerButton onClick={toggleMobileMenu} />
        <MobileAdaptive isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
