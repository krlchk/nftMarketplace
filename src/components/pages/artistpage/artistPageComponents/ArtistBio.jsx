import CodePng from "../../../../assets/CodePng.png";
import Plus from "../../../../assets/Plus.png";

const ArtistBio = ({ artist }) => {
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div key={artist.id} className="flex flex-col">
        <div className="flex justify-between tablet:flex-col">
          <h1 className="mb-[30px] font-workSans text-[51px] font-semibold leading-tight text-white">
            {artist.name}
          </h1>
          <div className="flex tablet:mb-[30px] mobile:flex-col">
            <div className="mr-[20px] flex cursor-pointer items-center justify-center self-center rounded-[20px] bg-[#A259FF] p-[20px] hover:bg-[#7437c4] mobile:mb-[20px] mobile:mr-0 mobile:w-full">
              <div className="mr-[12px]">
                <img className="max-w-[20px]" src={CodePng} alt="img" />
              </div>
              <p className="font-workSans text-[16px] font-semibold leading-snug text-white">
                {artist.code}
              </p>
            </div>
            <div className="flex cursor-pointer items-center justify-center self-center rounded-[20px] border-2 border-[#A259FF] p-[20px] hover:bg-[#7437c4] mobile:w-full">
              <div className="mr-[12px]">
                <img className="max-w-[20px]" src={Plus} alt="img" />
              </div>
              <p className="font-workSans text-[16px] font-semibold leading-snug text-white">
                Follow
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 mobile:w-full">
          <div className="mb-[30px] flex justify-between">
            <div>
              <p className="font-spaceMono text-[28px] font-bold leading-snug text-white tablet:text-[22px]">
                {artist.volume}+
              </p>
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                Volume
              </p>
            </div>
            <div>
              <p className="font-spaceMono text-[28px] font-bold leading-snug text-white tablet:text-[22px]">
                {artist.sold}+
              </p>
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                NFTs Sold
              </p>
            </div>
            <div>
              <p className="font-spaceMono text-[28px] font-bold leading-snug text-white tablet:text-[22px]">
                {artist.followers}+
              </p>
              <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
                Followers
              </p>
            </div>
          </div>
          <div className="mb-[30px] flex flex-col">
            <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-relaxed text-[#858584] tablet:text-[16px]">
              Bio
            </p>
            <p className="font-workSans text-[22px] font-normal leading-relaxed text-white tablet:text-[16px]">
              {artist.bio}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="mb-[10px] font-spaceMono text-[22px] font-bold leading-relaxed text-[#858584] tablet:text-[16px]">
              Links
            </p>
            <div className="flex gap-[10px]">
              {Object.values(artist.socialLinks).map((link, index) => (
                <img
                  key={index}
                  className="max-h-[32px] max-w-[32px] cursor-pointer"
                  src={link}
                  alt="social icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
