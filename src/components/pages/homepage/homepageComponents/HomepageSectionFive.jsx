import MashroomImg from "../../../../assets/Mashroom.png";
import Shroomie from "../../../../assets/Shroomie.png";
import EyeImage from "../../../../assets/Eye.png";
import { Link } from "react-router-dom";

const HomepageSectionFive = () => {
  return (
    <section
      className="container grid h-auto min-h-[640px] w-full items-end"
      style={{
        background: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%), url(${MashroomImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col">
        {/* first container */}
        <div className="mb-[30px] flex max-w-[151px] items-center rounded-[20px] bg-[#3B3B3B] px-[20px] py-[11px]">
          <img className="mr-3 h-auto w-[24px]" src={Shroomie} alt="img" />
          <p className="font-spaceMono text-[16px] font-normal leading-snug text-white">
            Shroomie
          </p>
        </div>

        <div className="flex justify-between mobile:flex-col">
          <div className="flex flex-col">
            <h1 className="mb-[30px] font-workSans text-[51px] font-semibold leading-tight text-white tablet:text-[38px]">
              Magic Mashrooms
            </h1>
            <Link to="" className="flex max-w-[200px] cursor-pointer items-center rounded-[20px] bg-violet-900/70 px-[50px] py-[19px] transition-colors hover:bg-violet-950/70 mobile:mb-[30px] mobile:max-w-full mobile:justify-center">
              <div className="mr-3">
                <img className="h-auto w-[20px]" src={EyeImage} alt="logo" />
              </div>
              <p className="font-workSans text-base font-semibold leading-snug text-white">
                See NFT
              </p>
            </Link>
          </div>

          {/* Timer */}
          <div className="flex cursor-pointer flex-col justify-center rounded-[20px] bg-violet-900/70 px-[30px] py-[30px] text-white backdrop-blur-sm hover:bg-violet-950/70 mobile:items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionFive;
