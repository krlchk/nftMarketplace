const MobileAdaptive = ({ isOpen }) => {
  return (
    <div
      className={`fixed right-0 top-[100px] bg-[#3B3B3B] rounded-bl-xl z-[1] transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div>
        <ul className="flex flex-col items-center">
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
        <div className="flex h-full items-center  rounded-bl-xl transition-colors hover:bg-[#7437c4] bg-[#A259FF] px-[30px] py-[20px]">
          <p className="font-workSans text-base font-semibold leading-snug text-white">
            Sing Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAdaptive;
