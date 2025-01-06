import CategoryIcon from "../../../../assets/CategoryIcon.png";

const HomepageCategoriesSection = () => {
  const categoriesData = [
    {
      img: CategoryIcon,
      title: "Art",
    },
    {
      img: CategoryIcon,
      title: "Collectibles",
    },
    {
      img: CategoryIcon,
      title: "Music",
    },
    {
      img: CategoryIcon,
      title: "Photography",
    },
    {
      img: CategoryIcon,
      title: "Video",
    },
    {
      img: CategoryIcon,
      title: "Utility",
    },
    {
      img: CategoryIcon,
      title: "Sport",
    },
    {
      img: CategoryIcon,
      title: "Virtual Worlds",
    },
  ];
  return (
    <section className="container h-auto w-full bg-[#2B2B2B]">
      <div className="flex flex-col">
        <h1 className="mb-[60px] font-workSans text-[38px] font-semibold leading-tight text-white tablet:text-[28px]">
          Browse Categories
        </h1>
        {/* categories section */}
        <div className="grid grid-cols-4 gap-[30px] mobile:grid-cols-2">
          {categoriesData.map((category) => (
            <div className="rounded-3xl bg-[#3B3B3B]" key={category.title}>
              <div>
                <img
                  className="relative left-0 right-0 top-0 w-full"
                  src={category.img}
                  alt="img"
                />
              </div>
              <p className="mx-[30px] my-[25px] font-workSans text-[22px] font-semibold leading-snug text-white tablet:text-[16px]">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageCategoriesSection;
