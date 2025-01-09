import { useState, useEffect } from "react";

const Browse = ({ setSearchQuery }) => {
  const [localQuery, setLocalQuery] = useState("");

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [localQuery, setSearchQuery]);

  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        <p className="mb-[10px] text-[51px] font-semibold leading-tight text-white">
          Browse Marketplace
        </p>
        <p className="mb-[30px] font-workSans text-[22px] font-normal leading-relaxed text-white">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <div>
          <form className="flex items-center tablet:flex-col">
            <input
              onChange={handleInputChange}
              className="w-full rounded-[20px] border-2 border-[#3B3B3B] bg-[#2B2B2B] px-[20px] py-[19px] font-workSans text-[16px] font-normal leading-snug text-white placeholder:font-workSans placeholder:text-[16px] placeholder:font-normal placeholder:leading-snug placeholder:text-[#4B4B4B] tablet:mb-[16px] tablet:rounded-[20px]"
              placeholder="Search your favourite NFTs"
              type="text"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Browse;
