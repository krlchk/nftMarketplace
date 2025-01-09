// Images
import globe from "../../../../assets/Globe.png";

const NftBio = ({ nftData }) => {
  return (
    <section className="h-auto w-full">
      <div className="w-full bg-[#2B2B2B]">
        <div
          className="container relative min-h-[560px] w-full tablet:min-h-[420px] mobile:min-h-[320px]"
          style={{
            backgroundImage: `url(${nftData.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {
          <div className="container flex w-full justify-between text-white mobile:flex-col">
            <div className="flex w-1/2 flex-col space-y-[20px] mobile:w-full">
              <p className="font-workSans text-[51px] font-semibold leading-tight">
                {nftData.title}
              </p>
              <p className="font-workSans text-[22px] font-normal leading-snug text-[#858584]">
                Minted On {nftData.mintedDate}
              </p>
              <div className="flex flex-col">
                <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-snug text-[#858584]">
                  Created By
                </p>
                <div className="flex gap-[12px]">
                  <div>
                    <img
                      className="max-h-[24px] max-w-[24px]"
                      src={nftData.artistLogo}
                      alt="logo"
                    />
                  </div>
                  <p className="font-workSans text-[22px] font-semibold leading-snug">
                    {nftData.createdBy}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-snug text-[#858584]">
                  Description
                </p>
                <p className="font-workSans text-[22px] font-normal leading-snug">
                  {nftData.desc}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-snug text-[#858584]">
                  Details
                </p>
                <div className="flex gap-[12px]">
                  <div>
                    <img
                      className="max-h-[24px] max-w-[24px]"
                      src={globe}
                      alt="logo"
                    />
                  </div>
                  <p className="font-workSans text-[22px] font-normal leading-snug transition-colors hover:text-[#A259FF]">
                    View on Etherscan
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <div>
                    <img
                      className="max-h-[24px] max-w-[24px]"
                      src={globe}
                      alt="logo"
                    />
                  </div>
                  <p className="font-workSans text-[22px] font-normal leading-snug transition-colors hover:text-[#A259FF]">
                    View Original
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-snug text-[#858584]">
                  Tags
                </p>
                <div className="flex gap-[20px] tablet:w-1/2 tablet:flex-col">
                  <div className="flex justify-center rounded-[20px] bg-[#3B3B3B] px-[30px] py-[12px] hover:bg-[#4B4B4B]">
                    <p className="font-workSans text-[16px] font-semibold uppercase leading-snug">
                      Animation
                    </p>
                  </div>
                  <div className="flex justify-center rounded-[20px] bg-[#3B3B3B] px-[30px] py-[12px] hover:bg-[#4B4B4B]">
                    <p className="font-workSans text-[16px] font-semibold uppercase leading-snug">
                      Illustration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timer */}
            <div className="mobile: mobile:mt-[30px] mobile:flex mobile:w-full mobile:justify-center">
              <div className="flex h-auto max-w-[350px] flex-col rounded-[20px] bg-[#3B3B3B] px-[30px] py-[30px] text-white mobile:items-center">
                <div>
                  <p className="font-spaceMono text-[12px] font-normal leading-tight">
                    Auction ends in:
                  </p>
                  <div className="flex">
                    <div>
                      <p className="font-spaceMono text-[38px] font-bold leading-tight">
                        59
                      </p>
                      <p className="font-spaceMono text-[12px] font-normal leading-tight">
                        Hours
                      </p>
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-bold leading-tight">
                        :
                      </p>
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-bold leading-tight">
                        59
                      </p>
                      <p className="font-spaceMono text-[12px] font-normal leading-tight">
                        Minutes
                      </p>
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-bold leading-tight">
                        :
                      </p>
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-bold leading-tight">
                        59
                      </p>
                      <p className="font-spaceMono text-[12px] font-normal leading-tight">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex h-full mt-[20px] cursor-pointer items-center rounded-[20px] bg-[#A259FF] px-[70px] py-[20px] transition-colors hover:bg-[#7437c4]">
                  <p className="font-workSans text-base font-semibold leading-snug text-white">
                    Place Bid
                  </p>
                </div>
              </div>
            </div>
            {/* Timer */}
          </div>
        }
      </div>
    </section>
  );
};

export default NftBio;
