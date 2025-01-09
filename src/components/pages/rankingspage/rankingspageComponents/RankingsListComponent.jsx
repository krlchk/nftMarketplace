import React from "react";

const RankingsListComponent = ({ data }) => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        <div className="mb-[20px] flex w-full justify-between rounded-[20px] border border-[#858584] px-[20px] py-[12px]">
          <div className="flex w-1/2 gap-[35px]">
            <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584]">
              #
            </p>
            <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584]">
              Artist
            </p>
          </div>
          <div className="grid w-1/3 grid-cols-3 tablet:grid-cols-2">
            <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584]">
              Change
            </p>
            <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584] tablet:hidden">
              NFTs Sold
            </p>
            <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584] mobile:hidden">
              Volume
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {data.map((card) => (
            <div
              key={card.id}
              className="mb-[20px] flex w-full items-center justify-between rounded-[20px] bg-[#3B3B3B] px-[12px] py-[20px]"
            >
              <div className="flex w-1/2 items-center gap-[20px]">
                <div className="flex items-center justify-center rounded-full bg-[#2B2B2B] px-[10px] py-[4px]">
                  <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#858584] mobile:text-[12px]">
                    {card.place}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="max-h-[60px] max-w-[60px] mobile:max-h-[30px] mobile:max-w-[30px]"
                    src={card.logo}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-workSans text-[22px] font-semibold leading-snug text-white mobile:text-[16px] mobile:font-normal">
                    {card.name}
                  </p>
                </div>
              </div>
              <div className="grid w-1/3 grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
                <p className="font-spaceMono text-[16px] font-normal leading-snug text-[#00AC4F] mobile:hidden">
                  +{card.change}%
                </p>
                <p className="font-spaceMono text-[16px] font-normal leading-snug text-white tablet:hidden">
                  {card.nftsSold}
                </p>
                <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                  {card.volume} ETH
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsListComponent;
