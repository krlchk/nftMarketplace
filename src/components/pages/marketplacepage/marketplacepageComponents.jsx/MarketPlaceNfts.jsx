
const MarketPlaceNfts = ({marketPlaceNftsData}) => {
  return (
    <section className="h-auto w-full bg-[#2B2B2B]">
      <div className="container flex flex-col bg-[#3B3B3B]">
        <div className="mb-[50px] flex justify-center rounded-3xl bg-[#2B2B2B]">
          <p className="p-2 font-workSans text-[22px] font-semibold leading-snug text-white">
            NFTs
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] tablet:grid-cols-2 mobile:grid-cols-1">
          {marketPlaceNftsData.map((nft) => (
            <div
              className="cursor-pointer rounded-[45px] bg-[#2B2B2B] pb-[25px] transition-colors hover:bg-[#4B4B4B]"
              key={nft.id}
            >
              <div>
                <img
                  className="relative left-0 right-0 top-0 w-full"
                  src={nft.image}
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
                      className="mr-3 h-auto w-[24px] rounded-3xl"
                      src={nft.artistLogo}
                      alt=""
                    />
                    <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
                      {nft.artistName}
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
      <hr className="border-[1px] border-[#2B2B2B]" />
    </section>
  );
};

export default MarketPlaceNfts;
