import IconOne from "../../../../assets/SectionSixIconOne.png";
import IconTwo from "../../../../assets/SectionSixIconTwo.png";
import IconThree from "../../../../assets/SectionSixIconThree.png";

const HomepageSectionSix = () => {
  const sectionSixData = [
    {
      img: IconOne,
      title: "Setup Your Wallet",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      img: IconTwo,
      title: "Create Collection",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: IconThree,
      title: "Start Earning",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        {/* paragraf */}
        <div>
          <p className="font-workSans text-[38px] font-semibold leading-tight text-white tablet:text-[28px]">
            How it works
          </p>
          <div className="mb-[50px] flex justify-between gap-[20px] mobile:flex-col">
            <div className="flex items-end">
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                Find out how to get started
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mobile:grid-cols-1 mobile:gap-[20px]">
          {sectionSixData.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[20px] bg-[#3B3B3B] px-[30px] py-[20px] mobile:flex-row mobile:px-[20px] mobile:py-[28.5px]"
            >
              <div className="mb-[20px] mobile:mr-[20px]">
                <img className="h-auto w-full" src={card.img} alt="img" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="mb-[10px] font-workSans text-[22px] font-semibold leading-snug text-white tablet:text-[16px]">
                  {card.title}
                </h2>
                <p className="text-center font-workSans text-[16px] font-normal leading-snug text-white tablet:text-[12px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionSix;
