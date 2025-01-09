import CategoryIconOne from "../../../../assets/CategoryIconOne.png";
import CategoryIconTwo from "../../../../assets/CategoryIconTwo.png";
import CategoryIconThree from "../../../../assets/CategoryIconThree.png";
import CategoryIconFour from "../../../../assets/CategoryIconFour.png";
import CategoryIconFive from "../../../../assets/CategoryIconFive.png";
import CategoryIconSix from "../../../../assets/CategoryIconSix.png";
import CategoryIconSeven from "../../../../assets/CategoryIconSeven.png";
import CategoryIconEight from "../../../../assets/CategoryIconEight.png";
import { Link } from "react-router-dom";

const HomepageCategoriesSection = () => {
  const categoriesData = [
    {
      img: CategoryIconOne,
      title: "Art",
    },
    {
      img: CategoryIconTwo,
      title: "Collectibles",
    },
    {
      img: CategoryIconThree,
      title: "Music",
    },
    {
      img: CategoryIconFour,
      title: "Photography",
    },
    {
      img: CategoryIconFive,
      title: "Video",
    },
    {
      img: CategoryIconSix,
      title: "Utility",
    },
    {
      img: CategoryIconSeven,
      title: "Sport",
    },
    {
      img: CategoryIconEight,
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
            <Link
            to="/"
              className="cursor-pointer rounded-3xl bg-[#3B3B3B] hover:bg-[#4B4B4B]"
              key={category.title}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageCategoriesSection;
