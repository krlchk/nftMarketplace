import HomeLogo from "../navbar/navbarSVGs/logoOne.svg";
import ABCLogo from "../navbar/navbarSVGs/logoTwo.svg";
import DiscordLogo from "../../assets/DiscordLogo.png";
import YoutubeLogo from "../../assets/YoutubeLogo.png";
import TwitterLogo from "../../assets/TwitterLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";

const Footer = () => {
  return (
    <footer className="container h-auto w-full bg-[#3B3B3B]">
      {/* first section */}
      <div className="grid grid-cols-5 p-4 pb-0 tablet:grid-cols-1 tablet:space-y-[30px]">
        <div className="col-span-2 flex flex-col space-y-7">
          {/* logo */}
          <div className="flex items-center">
            <div className="mr-3 flex items-center">
              <img src={HomeLogo} alt="logo" />
            </div>
            <div className="flex items-center">
              <img src={ABCLogo} alt="logo" />
            </div>
          </div>

          <a className="max-w-[250px]" href="#">
            <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
              NFT marketplace UI created with Anima for Figma.
            </span>
          </a>
          <a href="#">
            <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
              Join our community
            </span>
          </a>

          {/* SVGS SOCIAL */}
          <div className="flex gap-[10px]">
            <div>
              <img
                className="max-h-[32px] max-w-[32px] cursor-pointer"
                src={DiscordLogo}
                alt="img"
              />
            </div>
            <div>
              <img
                className="max-h-[32px] max-w-[32px] cursor-pointer"
                src={YoutubeLogo}
                alt="img"
              />
            </div>
            <div>
              <img
                className="max-h-[32px] max-w-[32px] cursor-pointer"
                src={TwitterLogo}
                alt="img"
              />
            </div>
            <div>
              <img
                className="max-h-[32px] max-w-[32px] cursor-pointer"
                src={InstagramLogo}
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="">
          <ul className="flex flex-col space-y-7">
            <h1 className="font-spaceMono text-[22px] font-bold leading-relaxed text-white">
              Explore
            </h1>
            <a href="#">
              <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
                Marketplace
              </span>
            </a>
            <a href="#">
              <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
                Rankings
              </span>
            </a>
            <a href="#">
              <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
                Connect a wallet
              </span>
            </a>
          </ul>
        </div>

        <div className="col-span-2">
          <ul className="flex flex-col space-y-7">
            <h1 className="font-spaceMono text-[22px] font-bold leading-relaxed text-white">
              Join our weekly digest
            </h1>
            <a href="#">
              <span className="font-workSans text-[16px] font-normal leading-snug text-[#CCCCCC] transition-colors hover:text-[#A259FF]">
                Get exclusive promotions & updates straight to your inbox.
              </span>
            </a>
            <div>
              <form className="flex items-center tablet:flex-col" action="">
                <input
                  className="rounded-[20px] rounded-br-none rounded-tr-none px-[20px] py-[19px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B] tablet:mb-[16px] tablet:w-full tablet:rounded-[20px]"
                  placeholder="Enter your email here"
                  type="text"
                />
                <button className="rounded-[20px] rounded-bl-none rounded-tl-none bg-[#A259FF] px-[50px] py-[19px] font-workSans text-[16px] font-semibold leading-snug text-white hover:bg-[#7437c4] tablet:w-full tablet:rounded-[20px]">
                  Subscribe
                </button>
              </form>
            </div>
          </ul>
        </div>
      </div>
      {/* second section */}
      <div className="grid grid-cols-1">
        <hr className="my-[30px] border-[#CCCCCC]" />
        <p className="font-workSans text-[12px] font-normal leading-tight text-[#CCCCCC]">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
