import { Link } from "react-router-dom";

const MobileAdaptive = ({ isOpen }) => {
  return (
    <div
      className={`fixed right-0 top-[100px] bg-[#3B3B3B] rounded-bl-xl z-[1] transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div>
      <div className="flex h-full items-center cursor-pointer transition-colors hover:bg-[#7437c4] bg-[#A259FF] px-[30px] py-[20px]">
          <Link to="/signup" className="font-workSans text-base font-semibold leading-snug text-white">
            Sing Up
          </Link>
        </div>
        <ul className="flex flex-col ">
          <Link
            className="font-workSans transition-colors hover:text-[#A259FF] mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
            to="/marketplace"
          >
            Marketplace
          </Link>
          <Link
            className="font-workSans transition-colors hover:text-[#A259FF] mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
            to="/rankings"
          >
            Rankings
          </Link>
          <Link
            className="font-workSans transition-colors hover:text-[#A259FF] mx-[10px] px-[12px] py-[20px] text-base font-semibold leading-snug text-white"
            to="/connect-wallet"
          >
            Connect a wallet
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileAdaptive;
