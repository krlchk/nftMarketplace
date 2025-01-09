const NftMore = ({ moreNft }) => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex justify-between mb-[60px]">
        <p className="text-white font-workSans leading-snug font-semibold text-[28px]">More From This Artist</p>
        <div className="flex cursor-pointer items-center rounded-[20px] border-2 border-[#A259FF] bg-none px-[50px] py-[20px] transition-colors hover:bg-[#7437c4] mobile:max-w-full mobile:justify-center">
          <p className="font-workSans  text-base font-semibold leading-snug text-white">
          Go To Artist Page
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[30px] tablet:grid-cols-2 mobile:grid-cols-1">
          {moreNft.map((nft) => (
            <div
              className="cursor-pointer rounded-[45px] bg-[#3B3B3B] transition-colors pb-[25px] hover:bg-[#4B4B4B]"
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
    </section>
  );
};

export default NftMore;