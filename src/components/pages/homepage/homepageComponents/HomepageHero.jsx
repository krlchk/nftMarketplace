import homePageImg from "../../../../assets/homepageHeroImage.png";
import homePageImgTwo from "../../../../assets/homepageHeroImgTwo.png";
import homepageHeroImgThree from "../../../../assets/homepageHeroImgThree.png";
import { Link } from "react-router-dom";

const HomepageHero = () => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex justify-between gap-[30px] mobile:flex-col mobile:items-center">
        <div className="flex h-auto w-1/2 flex-col space-y-[30px] justify-center mobile:w-full">
          <h1 className="font-workSans tablet:text-[38px] mobile:text-[28px] text-[67px] font-semibold leading-tight text-white">
            Discover digital art & Collect NFTs
          </h1>
          <p className="font-workSans tablet:text-[16px] text-[22px] font-normal leading-relaxed text-white">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Link to="/marketplace" className="flex max-w-[224px] mobile:justify-center mobile:max-w-full items-center rounded-[20px] transition-colors cursor-pointer hover:bg-[#7437c4] bg-[#A259FF] px-[30px] py-[20px]">
            <div className="mr-3">
              <img
                className="h-auto w-[20px]"
                src={homepageHeroImgThree}
                alt="logo"
              />
            </div>
            <p className="font-workSans text-base font-semibold leading-snug text-white">
              Get Started
            </p>
          </Link>
          <div className="flex justify-between">
            <div>
              <span className="font-spaceMono tablet:text-[22px] text-[28px] font-bold leading-relaxed text-white">
                240k+
              </span>
              <p className="font-workSans tablet:text-[16px] text-[23px] font-normal leading-relaxed text-white">
                Total Sale
              </p>
            </div>
            <div>
              <span className="font-spaceMono tablet:text-[22px] text-[28px] font-bold leading-relaxed text-white">
                100k+
              </span>
              <p className="font-workSans tablet:text-[16px] text-[23px] font-normal leading-relaxed text-white">
                Auctions
              </p>
            </div>
            <div>
              <span className="font-spaceMono tablet:text-[22px] text-[28px] font-bold leading-relaxed text-white">
                240k+
              </span>
              <p className="font-workSans tablet:text-[16px] text-[23px] font-normal leading-relaxed text-white">
                Artists
              </p>
            </div>
          </div>
        </div>

        <div className="h-auto w-1/2 mobile:w-full">
          <div className="rounded-3xl bg-[#3B3B3B]">
            <div>
              <img
                className="relative left-0 right-0 top-0 w-full"
                src={homePageImg}
                alt="img"
              />
            </div>
            <div className="px-[20px] py-[22px]">
              <p className="font-workSans mb-[10px] text-[22px] font-semibold leading-snug text-white">
                Space Walking
              </p>
              <div className="flex items-center">
                <img
                  className="mr-3 h-auto w-[24px]"
                  src={homePageImgTwo}
                  alt=""
                />
                <p className="font-workSans text-[16px] font-normal leading-snug text-white">
                  Animakid
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
