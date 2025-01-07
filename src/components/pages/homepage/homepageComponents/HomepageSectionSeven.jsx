import Astronaut from "../../../../assets/Astronaut.png";

const HomepageSectionSeven = () => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex mobile:flex-col h-auto w-full rounded-[20px] bg-[#3B3B3B] p-[60px]">
        <div className="mr-[60px] mobile:mr-0 mobile:mb-[30px] flex items-center">
          <img className="inset-0 h-auto w-full" src={Astronaut} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="mb-[10px] font-workSans text-[38px] font-semibold leading-tight text-white">
            Join our weekly digest
          </h1>
          <p className="mb-[40px] font-workSans text-[22px] font-normal leading-relaxed text-white">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form className="flex items-center tablet:flex-col" action="">
            <input
              className="rounded-[20px] px-[20px] tablet:w-full tablet:rounded-[20px] tablet:mb-[16px] rounded-br-none rounded-tr-none py-[19px] font-workSans text-[16px] font-normal leading-snug text-[#2B2B2B] placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#2B2B2B]"
              placeholder="Enter your email here"
              type="text"
            />
            <button className=" rounded-[20px] tablet:w-full tablet:rounded-[20px] rounded-bl-none rounded-tl-none text-white font-workSans font-semibold text-[16px] leading-snug bg-[#A259FF] px-[50px] py-[19px] hover:bg-[#7437c4]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionSeven;
