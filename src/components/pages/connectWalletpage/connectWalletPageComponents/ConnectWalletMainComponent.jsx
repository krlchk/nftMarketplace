import regImage from "../../../../assets/regImage.png";
import Metamask from "../../../../assets/Metamask.png";
import WalletConnect from "../../../../assets/WalletConnect.png";
import Coinbase from "../../../../assets/Coinbase.png";
import walletMainImage from "../../../../assets/walletMainImage.png";
import { Link } from "react-router-dom";

const ConnectWalletMainComponent = () => {
  return (
    <section className="h-auto w-full bg-[#2B2B2B]">
      <div className="grid grid-cols-2 mobile:grid-cols-1">
        {/* IMG div */}
        <div className="h-full w-full">
          <img
            className="inset-0 h-full w-full"
            src={walletMainImage}
            alt="img"
          />
        </div>

        {/* div 2 */}
        <div className="flex flex-col px-[60px] py-[100px] mobile:w-full mobile:px-[30px] mobile:py-[35px]">
          <div className="mb-[40px] space-y-[20px]">
            <h1 className="font-workSans text-[51px] font-semibold leading-tight text-white tablet:text-[38px]">
              Connect wallet
            </h1>
            <p className="w-3/4 font-workSans text-[22px] font-normal leading-relaxed text-white tablet:w-full tablet:text-[16px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[36px]">
            <Link
              to="https://metamask.io/ru/"
              className="flex w-3/4 cursor-pointer items-center rounded-[20px] border border-[#A259FF] py-[20px] pl-[40px] pr-[20px] hover:bg-[#7437c4] tablet:w-full"
            >
              <div className="mr-[20px]">
                <img
                  className="max-h-[40px] max-w-[40px]"
                  src={Metamask}
                  alt="img"
                />
              </div>
              <p className="font-workSans text-[22px] font-semibold leading-snug text-white">
                Metamask
              </p>
            </Link>
            <Link
              to="https://walletconnect.network/"
              className="flex w-3/4 cursor-pointer items-center rounded-[20px] border border-[#A259FF] py-[20px] pl-[40px] pr-[20px] hover:bg-[#7437c4] tablet:w-full"
            >
              <div className="mr-[20px]">
                <img
                  className="max-h-[40px] max-w-[40px]"
                  src={WalletConnect}
                  alt="img"
                />
              </div>
              <p className="font-workSans text-[22px] font-semibold leading-snug text-white">
                Wallet Connect
              </p>
            </Link>
            <Link
              to="https://www.coinbase.com/ru"
              className="flex w-3/4 cursor-pointer items-center rounded-[20px] border border-[#A259FF] py-[20px] pl-[40px] pr-[20px] hover:bg-[#7437c4] tablet:w-full"
            >
              <div className="mr-[20px]">
                <img
                  className="max-h-[40px] max-w-[40px]"
                  src={Coinbase}
                  alt="img"
                />
              </div>
              <p className="font-workSans text-[22px] font-semibold leading-snug text-white">
                Coinbase
              </p>
            </Link>
          </div>
          {/* Form */}
        </div>
      </div>
    </section>
  );
};

export default ConnectWalletMainComponent;
