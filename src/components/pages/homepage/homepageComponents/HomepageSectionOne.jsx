import dogNftSectionOne from "../../../../assets/dogNftSectionOne.png";
import HomepageSectionOneTwo from "../../../../assets/HomepageSectionOneTwo.png";
import HomepageSectionOneAvatarOne from "../../../../assets/HomepageSectionOneAvatarOne.png";
import Bear from "../../../../assets/Bear.png";
import MashroomOne from "../../../../assets/MashroomOne.png";
import MashroomTwo from "../../../../assets/MashroomTwo.png";
import MashroomThree from "../../../../assets/MashroomThree.png";
import RobotOne from "../../../../assets/RobotOne.png";
import RobotTwo from "../../../../assets/RobotTwo.png";
import RobotThree from "../../../../assets/RobotThree.png";

const HomepageSectionOne = () => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        <div className="mb-[60px]">
          <p className="mb-[10px] tablet:text-[28px] font-workSans text-[38px] font-semibold leading-tight text-white">
            Trending Collection
          </p>
          <p className="font-workSans text-[22px] tablet:text-[16px] font-normal leading-relaxed text-white">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div className="flex gap-[30px]">
          {/* first div nft */}
          <div className="flex h-auto w-1/3 flex-col gap-[15px] tablet:w-1/2 mobile:w-full">
            {/* big img */}
            <div className="rounded-[20px]">
              <img className="h-full w-full" src={dogNftSectionOne} alt="img" />
            </div>

            {/* small imgs */}
            <div className="flex justify-between gap-[15px]">
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={HomepageSectionOneTwo} alt="img" />
              </div>
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={Bear} alt="img" />
              </div>
              <div className="flex h-auto w-1/3 items-center justify-center rounded-[20px] cursor-pointer bg-[#A259FF] hover:bg-[#7437c4] tablet:rounded-[35px]">
                <p className="font-spaceMono text-[22px] font-bold leading-relaxed text-white">
                  1025+
                </p>
              </div>
            </div>

            {/* text div */}
            <div>
              <p className="mb-[10px] font-workSans text-[22px] font-semibold leading-snug text-white">
                DSGN Animals
              </p>
              <div className="flex items-center">
                <img
                  className="mr-3 h-auto w-[24px]"
                  src={HomepageSectionOneAvatarOne}
                  alt="img"
                />
                <p className="font-workSans text-[16px] font-normal leading-snug text-white">
                  MrFox
                </p>
              </div>
            </div>
          </div>

          {/* second div nft */}
          <div className="flex h-auto w-1/3 flex-col gap-[15px] tablet:w-1/2 mobile:hidden">
            {/* big img */}
            <div className="rounded-[20px]">
              <img className="h-full w-full" src={MashroomOne} alt="img" />
            </div>

            {/* small imgs */}
            <div className="flex justify-between gap-[15px]">
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={MashroomTwo} alt="img" />
              </div>
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={MashroomThree} alt="img" />
              </div>
              <div className="flex h-auto w-1/3 items-center justify-center rounded-[20px]  bg-[#A259FF] cursor-pointer hover:bg-[#7437c4] tablet:rounded-[35px]">
                <p className="font-spaceMono text-[22px] font-bold leading-relaxed text-white">
                  1025+
                </p>
              </div>
            </div>

            {/* text div */}
            <div>
              <p className="mb-[10px] font-workSans text-[22px] font-semibold leading-snug text-white">
                Magic Mushrooms
              </p>
              <div className="flex items-center">
                <img
                  className="mr-3 h-auto w-[24px]"
                  src={HomepageSectionOneAvatarOne}
                  alt="img"
                />
                <p className="font-workSans text-[16px] font-normal leading-snug text-white">
                  Shroomie
                </p>
              </div>
            </div>
          </div>

          {/* third div nft */}
          <div className="flex h-auto w-1/3 flex-col gap-[15px] tablet:hidden mobile:hidden">
            {/* big img */}
            <div className="rounded-[20px]">
              <img className="h-full w-full" src={RobotOne} alt="img" />
            </div>

            {/* small imgs */}
            <div className="flex justify-between gap-[15px]">
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={RobotTwo} alt="img" />
              </div>
              <div className="h-auto w-1/3 rounded-[20px]">
                <img src={RobotThree} alt="img" />
              </div>
              <div className="flex h-auto w-1/3 items-center justify-center rounded-[20px] bg-[#A259FF] cursor-pointer hover:bg-[#7437c4] tablet:rounded-[35px]">
                <p className="font-spaceMono text-[22px] font-bold leading-relaxed text-white">
                  1025+
                </p>
              </div>
            </div>

            {/* text div */}
            <div>
              <p className="mb-[10px] font-workSans text-[22px] font-semibold leading-snug text-white">
                Disco Machines
              </p>
              <div className="flex items-center">
                <img
                  className="mr-3 h-auto w-[24px]"
                  src={HomepageSectionOneAvatarOne}
                  alt="img"
                />
                <p className="font-workSans text-[16px] font-normal leading-snug text-white">
                  BeKind2Robots
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionOne;
