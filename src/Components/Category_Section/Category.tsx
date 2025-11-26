import Jewellery from "../../assets/Jhoomka_1.png";
import Purse from "../../assets/purse.png";
import Perfume from "../../assets/perfume.png";
import Watch from "../../assets/watch.png";
import Store199 from "../../assets/299_Store12.png";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <>
      <div className="overflow-x-scroll overflow-y-visible  md:overflow-x-hidden scroll-smooth scrollbar-hide">
        <div className="flex w-max md:w-auto mt-14 md:gap-6 lg:gap-10 pl-2 md:pl-0 md:px-0 lg:px-20 justify-start md:justify-center flex-nowrap font-primary text-[14px] text-text ">
          {/* jewellery section */}
          <Link to="/category/jewellery">
          <div className="flex flex-col items-center mr-4 sm:mr-6 md:mr-0">
            <div className="bg-secondary w-24 md:w-30 lg:w-32 h-16 md:h-20 rounded-xl flex justify-center shadow">
              <img
                src={Jewellery}
                alt=""
                className=" h-20 md:h-22 -mt-6 object-contain"
              />
            </div>
            <p className="mt-1.5 font-medium">Jewellery</p>
          </div>
          </Link>
          {/* Purse section */}
          <Link to="/category/purse">
          <div className="flex flex-col items-center mr-4 sm:mr-6 md:mr-0">
            <div className="bg-secondary w-24 md:w-30 lg:w-32 h-16 md:h-20 rounded-xl flex justify-center shadow">
              <img src={Purse} alt="" className=" h-24 md:h-26 -mt-10 object-contain" />
            </div>
            <p className="mt-1.5 font-medium">Purse</p>
          </div>
          </Link>
          {/* Perfume section */}
          <Link to="/category/perfume">
          <div className="flex flex-col items-center mr-6 md:mr-0">
            <div className="bg-secondary w-24 md:w-30 lg:w-32 h-16 md:h-20 rounded-xl flex justify-center shadow">
              <img
                src={Perfume}
                alt=""
                className="h-28 md:h-30 -mt-10 object-contain"
              />
            </div>
            <p className="mt-1.5 font-medium">Perfume</p>
          </div>
          </Link>
          {/* Watch section */}
          <Link to="/category/watch">
          <div className="flex flex-col items-center mr-6 md:mr-0">
            <div className="bg-secondary w-24 md:w-30 lg:w-32 h-16 md:h-20 rounded-xl flex justify-center shadow">
              <img src={Watch} alt="" className="h-24 md:h-28 -mt-8 object-contain" />
            </div>
            <p className="mt-1.5 font-medium">Watch</p>
          </div>
          </Link>
          {/* 299 Store off section */}
          <Link to="/category/299store">
          <div className="flex flex-col items-center mr-6 md:mr-0">
            <div className="bg-secondary w-24 md:w-30 lg:w-32 h-16 md:h-20 rounded-xl flex justify-center shadow">
              <img
                src={Store199}
                alt=""
                className="h-18 md:h-22 -mt-6 object-contain"
              />
            </div>
            <p className="mt-1.5 font-medium">299 Store</p>
          </div>
          </Link>
        </div>
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
            display: none;
            }`}
        </style>
      </div>
    </>
  );
};

export default Category;
