/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, useNavigate } from "react-router-dom";
import { AllProducts } from "../../AllProducts";
import Navbar from "../Navbar";
import ImageMagnifier from "./ImageMagnifier";
import { RiMedalLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { GiPearlNecklace } from "react-icons/gi";
import { GiGoldNuggets } from "react-icons/gi";
import { useEffect, useState } from "react";
import "../../index.css";
import Footer from "../FooterSec/Footer";
import Similar from "./Similar";
import noProdFound from "../../assets/NoProducts.png";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Find the product that matches the ID from the URL
  // We use String() or parseInt() to ensure types match
  const product = AllProducts.find(
    (item) => item.name.replace(/\s+/g, "-").toLowerCase() === id
  );
  if (!product) {
    return (
      <><Navbar /><div className="flex justify-center items-center h-screen">
        <img src={noProdFound} alt="" className="w-36 md:h-auto md:w-auto" />
      </div></>
    );
  }
  const [qty, setQty] = useState(1);
  const mobileImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10 lg:px-20 font-primary">
        <div className="flex items-center capitalize py-5 list-none cursor-pointer">
          <li
            onClick={() => navigate(-1)}
            className="text-[12px] text-gray-400"
          >
            Home
          </li>
          <span className="text-sm text-text px-1">/</span>
          <li className="text-[12px] text-text">{product.name}</li>
        </div>
        {/* lower section */}
        <div className="flex justify-between items-start">
          {/*<------------------------------- mobile view  sections---------------------------->*/}
          {/* image section */}
          <div className="block md:hidden ">
            {/* Slider Wrapper */}
            <div
              className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-4"
              id="mobile-slider"
              onScroll={(e) => {
                const index = Math.round(
                  e.currentTarget.scrollLeft / e.currentTarget.clientWidth
                );
                setCurrentIndex(index);
              }}
            >
              {mobileImages.map((img, index) => (
                <div key={index} className="shrink-0 w-full snap-center px-2">
                  <div className="border border-border rounded-md p-3 bg-white">
                    <img
                      src={img}
                      alt="product"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-5">
              {mobileImages.map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const container = document.querySelector("#mobile-slider");
                    if (container) {
                      container.scrollTo({
                        left: index * container.clientWidth,
                        behavior: "smooth",
                      });
                    }
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full cursor-pointer transition
          ${
            currentIndex === index
              ? "bg-primary"
              : "bg-transparent border border-primary"
          }
        `}
                ></div>
              ))}
            </div>
            {/* content section */}
            <div className="text-text">
              <h1 className="font-semibold text-lg mb-4">
                Ecmacom's Royal Blue Gem Beaded Necklace Set
              </h1>
              <div className="flex gap-x-3.5 mt-3.5">
                <p className="text-[18px] font-semibold">₹600</p>
                <p className="text-md line-through text-gray-400 font-extralight">
                  ₹800
                </p>
                <p className="text-md text-offer font-medium">(40% off)</p>
              </div>
              <p className="text-[12px] font-normal text-priceline">
                Inclusive of all taxes
              </p>
              <small className="text-[15px] font-semibold text-red-500">
                Only 1 left in stock!
              </small>
              <hr className="border-[#D9D9D9] my-5 border-t" />
              {/* Quantity and increment / decrement button */}
              <div className="flex justify-between items-center border border-border p-3 rounded-md">
                <p className="font-semibold">Quantity</p>
                <div className="flex items-center rounded-md">
                  {/* Minus Button */}
                  <div
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    className="select-none w-10 rounded-l-md bg-secondary text-lg cursor-pointer flex items-center justify-center"
                  >
                    -
                  </div>

                  {/* Input Field */}
                  <input
                    type="text"
                    className="w-12 h-7 text-gray-400 text-center border-y border-[#D9D9D9] outline-none"
                    value={qty}
                    readOnly
                  />

                  {/* Plus Button */}
                  <div
                    onClick={() => setQty(qty + 1)}
                    className="select-none w-10 h-7 rounded-r-md bg-primary text-white text-[18px] cursor-pointer flex items-center justify-center"
                  >
                    +
                  </div>
                </div>
              </div>
              <hr className="border-[#D9D9D9] my-5 border-t" />
              {/* 4 icon in a row in a row */}
              <div className="grid grid-cols-4 place-items-center gap-5">
                <div className="flex flex-col items-center justify-center">
                  <RiMedalLine
                    size={50}
                    className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                  />
                  <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                    Top Quality Assurance
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <IoDiamondOutline
                    size={50}
                    className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                  />
                  <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                    Premium Craftsmanship
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <GiPearlNecklace
                    size={50}
                    className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                  />
                  <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                    Masterfully Designed
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <GiGoldNuggets
                    size={50}
                    className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                  />
                  <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                    A Touch of Luxury
                  </p>
                </div>
              </div>
              <hr className="border-[#D9D9D9] my-5 border-t" />
              {/* about product details */}
              <div>
                <h3 className="font-semibold text-md capitalize">
                  about this products
                </h3>
                <ul className="my-4 text-sm tracking-wide">
                  {product.about.map((point: string, i: number) => (
                    <li key={i} className="ml-7 list-disc">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* style tips */}
              <div>
                <p className="font-semibold text-md capitalize text-black">
                  Style Tip
                </p>
                <p className="my-4 text-sm tracking-wide">
                  Ecmacom suggests wear it with a pastel pink or emerald top to
                  create a coordinated, fashion-forward look that feels
                  effortlessly premium.
                </p>
              </div>
            </div>
          </div>

          {/* <---------------------------desktop view----------------------------->*/}
          {/* left side image */}
          <div className="hidden md:block lg:w-[32%] xl:w-[35%] lg:my-5 sticky top-[100px]">
            <div className="flex flex-col">
              <div className="p-[15px] border border-border rounded-md mb-[30px] relative ">
                <ImageMagnifier
                  src={product.image}
                  width={580}
                  height={550}
                  zoom={3}
                />
              </div>
              <div className="flex items-center gap-x-6 cursopointer">
                <div className="border border-border h-25 w-25 rounded-md flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="px-1 py-0.5 flex"
                  />
                </div>
                <div className="border border-border h-25 w-25 rounded-md flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="px-1 py-0.5 flex"
                  />
                </div>
                <div className="border border-border h-25 w-25 rounded-md flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="px-1 py-0.5 flex"
                  />
                </div>
                <div className="border border-border h-25 w-25 rounded-md flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="px-1 py-0.5 flex"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* middle  details */}
          <div className="hidden md:block md:w-[50%] lg:w-[40%] mt-5 font-primary text-text">
            <h2 className="font-medium md:text-xl xl:text-2xl">{product.name}</h2>
            <div className="flex lg:gap-x-2 xl:gap-x-4 lg:mt-2 xl:mt-4">
              <p className="text-[22px] font-semibold">{product.price}</p>
              <p className="text-xl line-through text-gray-400 font-extralight">
                {product.line}
              </p>
              <p className="text-xl text-offer font-medium">
                ({product.offer})
              </p>
            </div>
            <p className="text-[12px] font-normal text-priceline mb-1">
              Inclusive of all taxes
            </p>
            <small className="text-[16px] font-semibold text-red-500">
              Only 1 left in stock!
            </small>
            <hr className="border-[#D9D9D9] my-5 border-t" />
            {/* 4 icon in a row in a row */}
            <div className="grid grid-cols-4 place-items-center gap-5">
              <div className="flex flex-col items-center justify-center">
                <RiMedalLine
                  size={50}
                  className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                />
                <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                  Top Quality Assurance
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <IoDiamondOutline
                  size={50}
                  className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                />
                <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                  Premium Craftsmanship
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <GiPearlNecklace
                  size={50}
                  className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                />
                <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                  Masterfully Designed
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <GiGoldNuggets
                  size={50}
                  className="text-primary border border-[#D9D9D9] rounded-full p-2 my-2"
                />
                <p className="font-semibold text-center text-[12px] lg:text-[14px]">
                  A Touch of Luxury
                </p>
              </div>
            </div>
            <hr className="border-[#D9D9D9] my-5 border-t" />
            {/* product Description and details */}
            <div>
              <h3 className="font-semibold text-md">Description</h3>
              <p className="my-4 text-sm tracking-wide">
                Ecmacom's beautiful imitation jewelry set featuring a statement
                necklace and earrings adorned with intricate red and gold
                beadwork. Perfect for festive events and traditional attire.
              </p>
              <hr className="border-[#D9D9D9] my-5 border-t" />
              {/* about product details */}
              <div>
                <h3 className="font-semibold text-md capitalize">
                  about this products
                </h3>
                <ul className="my-4 text-sm tracking-wide">
                  {product.about.map((point: string, i: number) => (
                    <li key={i} className="ml-7 list-disc">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* style tips */}
              <div>
                <p className="font-semibold text-md capitalize text-black">
                  Style Tip
                </p>
                <p className="my-4 text-sm tracking-wide">{product.style}</p>
              </div>
            </div>
          </div>
          {/* right side  details */}
          <div className="hidden md:block lg:max-h-[36vh] xl:max-h-[30vh] 2xl:max-h-[24.5vh] lg:w-[25%] xl:w-[20%] border border-border rounded-md py-6 px-3 text-text sticky top-[100px]">
            {/* Quantity and increment / decrement button */}
            <div className="flex justify-between items-center">
              <p className="font-semibold">Quantity</p>

              <div className="flex items-center rounded-md">
                {/* Minus Button */}
                <div
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="select-none w-10 rounded-l-md bg-secondary text-lg cursor-pointer flex items-center justify-center"
                >
                  -
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  className="w-12 h-7 text-gray-400 text-center border-y border-[#D9D9D9] outline-none"
                  value={qty}
                  readOnly
                />

                {/* Plus Button */}
                <div
                  onClick={() => setQty(qty + 1)}
                  className="select-none w-10 rounded-r-md bg-primary text-white text-[18px] cursor-pointer flex items-center justify-center"
                >
                  +
                </div>
              </div>
            </div>
            {/* add to bag and buy now button */}
            <div>
              <button className="w-full uppercase font-semibold cursor-pointer bg-white text-primary border border-primary hover:bg-secondary py-3 rounded-md mt-12 mb-3 transition-all duration-300">
                Add to Bag
              </button>
              <button className="w-full uppercase font-semibold cursor-pointer border bg-primary text-white py-3 rounded-md transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* full time add to bag and buy now mobile*/}
      <div className="block md:hidden fixed w-full right-0 bottom-0 z-10">
        <div className="flex max-w-full">
          <button className="bg-white text-black border border-border py-3 px-5 flex-1 uppercase text-[14px]">
            Add to Bag
          </button>
          <button className="bg-primary text-white py-3 px-5 flex-1 uppercase text-[14px]">
            Buy Now
          </button>
        </div>
      </div>
      <Similar />
      <div className="mb-10 md:mb-0">
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;
