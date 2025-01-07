import { useState, useEffect } from "react";

import EyeImage from "../../../../assets/Eye.png";
// NFT IMAGES
import nftSectionOne from "../../../../assets/nftSectionOne.png";
import nftSectionTwo from "../../../../assets/nftSectionTwo.png";
import nftSectionThree from "../../../../assets/nftSectionThree.png";
// NFT AUTHORS IMAGES
import nftSectionAuthorOne from "../../../../assets/nftSectionAuthorTwo.png";
import nftSectionAuthorTwo from "../../../../assets/nftSectionAuthorTwo.png";
import nftSectionAuthorThree from "../../../../assets/nftSectionAuthorThree.png";

const HomepageNFTSection = () => {
  const NftsData = [
    {
      img: nftSectionOne,
      title: "Distant Galaxy",
      authorImg: nftSectionAuthorOne,
      author: "MoonDancer",
    },
    {
      img: nftSectionTwo,
      title: "Life On Edena",
      authorImg: nftSectionAuthorTwo,
      author: "NebulaKid",
    },
    {
      img: nftSectionThree,
      title: "AstroFiction",
      authorImg: nftSectionAuthorThree,
      author: "Spaceone",
    },
  ];
  
  const [visibleData, setVisibleData] = useState(NftsData);

  useEffect(() => {
    const updateVisibleData = () => {
      if (window.innerWidth <= 1279.99 && window.innerWidth > 834.99) {
        setVisibleData(NftsData.slice(0, 2));
      } else {
        setVisibleData(NftsData);
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
            Discover More NFTs
          </p>
          <div className="mb-[50px] flex justify-between gap-[20px] mobile:flex-col">
            <div className="flex items-end">
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                Explore new trending NFTs
              </p>
            </div>
            <div className="flex max-w-[224px] items-center rounded-[20px] cursor-pointer border-2 border-[#A259FF] bg-none px-[30px] py-[20px] transition-colors hover:bg-[#7437c4] mobile:max-w-full mobile:justify-center">
              <div className="mr-3">
                <img className="h-auto w-[20px]" src={EyeImage} alt="logo" />
              </div>
              <p className="font-workSans text-base font-semibold leading-snug text-white">
                See All
              </p>
            </div>
          </div>
        </div>
        {/* NFT section */}
        <div className="grid grid-cols-3 gap-[30px] tablet:grid-cols-2 mobile:grid-cols-1">
          {visibleData.map((nft) => (
            <div
              className="rounded-[45px] cursor-pointer hover:bg-[#4B4B4B] bg-[#3B3B3B] pb-[25px]"
              key={nft.title}
            >
              <div>
                <img
                  className="relative left-0 right-0 top-0 w-full"
                  src={nft.img}
                  alt="img"
                />
              </div>
              <div className="flex flex-col">
                <div className="mx-[30px] mb-[25px] mt-[20px]">
                  <p className="mb-[10px] font-workSans text-[22px] font-semibold leading-snug text-white">
                    {nft.title}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="mr-3 h-auto w-[24px]"
                      src={nft.authorImg}
                      alt=""
                    />
                    <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                      {nft.author}
                    </p>
                  </div>
                </div>

                <div className="mx-[30px] flex justify-between">
                  <div className="flex flex-col">
                    <p className="font-spaceMono text-[12px] font-normal leading-tight text-[#858584]">
                      Price
                    </p>
                    <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                      1.63 ETH
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex flex-col">
                      <p className="font-spaceMono text-[12px] font-normal leading-tight text-[#858584]">
                        Highest Bid
                      </p>
                      <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                        0.33 wETH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageNFTSection;
