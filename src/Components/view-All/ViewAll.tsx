import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BsFillFunnelFill } from "react-icons/bs";
import noProdFound from "../../assets/NoProducts.png";
import {viewData} from "../view-All/view_Data";
import Footer from "../FooterSec/Footer";

const ViewAll: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate(); 

  if (!categoryName) {
    return <p className="p-6 text-red-500">Invalid category.</p>;
  }

  const categories = categoryName.split(",");

  const filteredProducts = viewData.filter((item) =>
    categories.includes(item.category.toLowerCase())
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toSlug = (name: string) =>
    name.replace(/\s+/g, "-").toLowerCase();
  return (
    <>
      <Navbar />
      <div className=" px-5 md:px-10 lg:px-20 font-primary">
        {/* Page Title */}
        <div className="flex items-center capitalize py-5 list-none">
          <li onClick={() => navigate(-1)} className="text-[12px] text-gray-400 cursor-pointer">Home</li>
          <span className="text-sm text-text px-1">/</span>
          <li className="text-[12px] text-text">{categoryName}</li>
        </div>
        <div className="py-2 hidden lg:flex justify-between items-center">
          {/* Filter  */}
          <p className="text-md font-medium">Filters</p>
          {/* sort section */}
          <div className="select-none cursor-pointer">
            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center border border-border p-2 w-40"
            >
              Sort
              <IoIosArrowDown />
            </div>
            {open && (
              <ul className="absolute mt-3 bg-white border border-border w-50 z-10">
                {[
                  "Price: Low To High",
                  "Price: High to Low",
                  "Discount: High to Low",
                  "Discount: Low to High",
                ].map((text, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setOpen(!open);
                    }}
                    className={`
                      text-text py-2 px-4 cursor-pointer hover:bg-border
                      ${activeIndex === index ? "bg-secondary" : "bg-white"}
                    `}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-[70dvh]">
            <img
              src={noProdFound}
              alt=""
              className="w-64"
            />
          </div>
        ) : (
          <div className="relative lg:flex lg:items-start lg:justify-between lg:gap-y-8">
            <div className="lg:sticky lg:top-24 w-0 lg:w-[18%] hidden lg:flex flex-col gap-y-5 text-text">
              {/* left side filters */}

              {/* Gender section */}
              <div className="flex flex-col p-3 bg-white border border-border rounded-lg gap-2 shadow">
                <p className="uppercase font-medium mb-3">Gender</p>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  Man
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  Woman
                </label>
              </div>
              {/* Price range section */}

              <div className="flex flex-col p-3 bg-white border border-border rounded-lg gap-2 shadow">
                <p className="uppercase font-medium mb-3">price range</p>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  ₹0 - ₹500
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  ₹500 - ₹2500
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  ₹2500 - ₹5000
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  ₹5000 - ₹10000
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  ₹10000 and above
                </label>
              </div>
              {/* Discount  section */}

              <div className="flex flex-col p-3 bg-white border border-border rounded-lg gap-2 shadow">
                <p className="uppercase font-medium mb-3">Discount</p>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  10% - 20%
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  20% - 30%
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  30% - 50%
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  50% - 70%
                </label>
                <label className="text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="woman"
                    className="mr-2 accent-primary "
                  />
                  70% and above
                </label>
              </div>

              {/* product colour filter section */}
              <div className="flex flex-col p-3 bg-white border border-border rounded-lg gap-2 shadow">
                <p className="uppercase font-medium mb-3">Colour</p>
                <label className=" flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  <div className="flex gap-x-2 items-center">
                    <FaCircle size={14} className="text-red-600" />
                    <p>Red</p>
                  </div>
                </label>
                <label className=" flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  <div className="flex gap-x-2 items-center">
                    <FaCircle size={14} className="text-blue-600" />
                    <p>Blue</p>
                  </div>
                </label>
                <label className=" flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  <div className="flex gap-x-2 items-center">
                    <FaCircle size={14} className="text-green-600" />
                    <p>Green</p>
                  </div>
                </label>
                <label className=" flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  <div className="flex gap-x-2 items-center">
                    <FaCircle size={14} className="text-black" />
                    <p>Black</p>
                  </div>
                </label>
                <label className=" flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    value="man"
                    className="mr-2 accent-primary "
                  />
                  <div className="flex gap-x-2 items-center">
                    <FaCircle size={14} className="text-pink-600" />
                    <p>Pink</p>
                  </div>
                </label>
              </div>
            </div>
            {/* right side cards section*/}
            <div className="relative w-full lg:w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8">
              {filteredProducts.map((item) => (
                
                <div key={item.id} onClick={() => navigate(`/product/${toSlug(item.name)}`)} className="">
                  <div className="w-full h-[260px] md:h-[290px] lg:h-[260px] xl:h-[300px] rounded-md shadow flex flex-col pt-2 pb-3.5 px-1.5 border border-border bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover pointer-events-none h-[170px] sm:h-[180px] md:h-[200px] lg:h-auto xl:h-[200px]"
                    />
                    <p className="mt-4 text-[12px] lg:text-sm">{item.name}</p>
                    <p className="text-black">{item.price}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-offer text-[12px] font-medium">
                        {item.offer}
                      </p>
                      <p className="line-through text-[12px] text-priceline">
                        {item.line}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* mobile filter and sort */}
        <div className="block md:hidden fixed w-full right-0 bottom-0 z-10">
          <div className="flex max-w-full bg-[#f8f8f8] text-text">
            <button className="flex items-center justify-center gap-1  py-3 px-5 flex-1 text-[12px] border border-border">
              <RiArrowUpDownFill size={20} />
              <p className="font-semibold">Sort</p>
            </button>
            <button className="flex items-center justify-center gap-1 py-3 px-5 flex-1 text-[12px] border border-border">
              <BsFillFunnelFill size={20} />
              <p className="font-semibold">Filter</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-10 md:mb-0">
        <Footer />
      </div>
    </>
  );
};

export default ViewAll;
