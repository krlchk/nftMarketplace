import regImage from "../../../../assets/regImage.png";

const MainSection = () => {
  return (
    <section className="h-auto w-full bg-[#2B2B2B]">
      <div className="grid grid-cols-2 mobile:grid-cols-1">
        {/* IMG div */}
        <div className="h-full w-full">
          <img className="inset-0 h-full w-full" src={regImage} alt="img" />
        </div>

        {/* div 2 */}
        <div className="flex flex-col py-[100px] px-[60px] mobile:w-full mobile:px-[30px] mobile:py-[35px]">
          <div className="mb-[40px] space-y-[20px]">
            <h1 className="font-workSans text-[51px] font-semibold leading-tight text-white tablet:text-[38px]">
              Create account
            </h1>
            <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>

          {/* Form */}
          <div>
            <form action="">
                <input
                  placeholder="Username"
                  className="w-full mb-[15px] rounded-[20px] px-[20px] py-[12px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B] tablet:mb-[16px] tablet:w-full tablet:rounded-[20px]"
                  type="text"
                />
                <input
                  placeholder="Email Address"
                  className="w-full mb-[15px] rounded-[20px] px-[20px] py-[12px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B] tablet:mb-[16px] tablet:w-full tablet:rounded-[20px]"
                  type="text"
                />
                <input
                  placeholder="Password"
                  className="w-full mb-[15px] rounded-[20px] px-[20px] py-[12px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B] tablet:mb-[16px] tablet:w-full tablet:rounded-[20px]"
                  type="text"
                />
                <input
                  placeholder="Confirm Password"
                  className="w-full mb-[30px] rounded-[20px] px-[20px] py-[12px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B] tablet:mb-[30px] tablet:w-full tablet:rounded-[20px]"
                  type="text"
                />
              <button className="w-full rounded-[20px] bg-[#A259FF] px-[50px] py-[12px] font-workSans text-[16px] font-semibold leading-snug text-white hover:bg-[#7437c4] tablet:w-full tablet:rounded-[20px]">
                Create account
              </button>
            </form>
          </div>
          {/* Form */}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
