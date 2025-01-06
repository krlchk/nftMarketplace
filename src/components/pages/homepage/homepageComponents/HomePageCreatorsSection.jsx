import { useState, useEffect } from "react";

import RocketLaunch from "../../../../assets/RocketLaunch.png";
import CreatorOne from "../../../../assets/CreatorOne.png";

const HomePageCreatorsSection = () => {
  const creatorsData = [
    {
      image: CreatorOne,
      name: "Kepitreal",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "DigiLab",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "GravityOne",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Juanie",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "BlueWhale",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Mr fox",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Shroomie",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Robotica",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "RustyRobot",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Animakid",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Dotgu",
      totalSales: "34.53 ETH",
    },
    {
      image: CreatorOne,
      name: "Ghiblier",
      totalSales: "34.53 ETH",
    },
  ];

  const [visibleData, setVisibleData] = useState(creatorsData);

  useEffect(() => {
    const updateVisibleData = () => {
      if (window.innerWidth <= 834.99) {
        setVisibleData(creatorsData.slice(0, 5));
      } else if (window.innerWidth <= 1279.99) {
        setVisibleData(creatorsData.slice(0, 6));
      } else {
        setVisibleData(creatorsData);
      }
    };

    updateVisibleData();
    window.addEventListener("resize", updateVisibleData);
    return () => {
      window.removeEventListener("resize", updateVisibleData);
    };
  }, []);

  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        {/* paragraf + button */}
        <div>
          <p className="font-workSans text-[38px] font-semibold leading-tight text-white tablet:text-[28px]">
            Top creators
          </p>
          <div className="mb-[50px] flex justify-between gap-[20px] mobile:flex-col">
            <div className="flex items-end">
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <div className="flex max-w-[224px] items-center rounded-[20px] border-2 border-[#A259FF] bg-none px-[30px] py-[20px] transition-colors hover:bg-[#7437c4] mobile:max-w-full mobile:justify-center">
              <div className="mr-3">
                <img
                  className="h-auto w-[20px]"
                  src={RocketLaunch}
                  alt="logo"
                />
              </div>
              <p className="font-workSans text-base font-semibold leading-snug text-white">
                View Rankings
              </p>
            </div>
          </div>
        </div>
        {/* creators section */}
        <div className="grid grid-cols-4 gap-[30px] tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-[20px]">
          {visibleData.map((creator) => (
            <div
              className="flex flex-col items-center rounded-[20px] bg-[#3B3B3B] px-[20px] py-[20px] tablet:flex-row tablet:p-[20px]"
              key={creator.name}
            >
              <div className="mb-[20px] flex max-h-[120px] max-w-[110px] tablet:mb-0 tablet:mr-[20px]">
                <img className="" src={creator.image} alt="img" />
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-[5px] font-workSans text-[22px] font-semibold leading-snug text-white tablet:self-start">
                  {creator.name}
                </p>
                <p className="font-workSans text-[16px] font-normal leading-snug text-[#858584]">
                  Total Sales:{" "}
                  <span className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                    {creator.totalSales}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageCreatorsSection;
