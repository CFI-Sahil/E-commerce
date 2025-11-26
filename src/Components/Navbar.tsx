import Logo from "../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHome } from "react-icons/bi";
import { FiCreditCard } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import "../index.css";
import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {icon:<BiHome size={22} className="text-primary"/>, name:"Home",action: () => navigate("/")},
    {icon:<CiUser size={22} className="text-primary"/>, name:"My Profile", action: () => navigate("/account")},
    {icon:<FiCreditCard size={22} className="text-primary"/>, name:"My Orders", action: () => navigate("/cart")},
    {icon:<HiOutlineLocationMarker size={22} className="text-primary"/>, name:"My Address"},
    {icon:<IoLogOutOutline size={22} className="text-primary"/>, name:"Logout"}
  ];
  return (
    <>
      <div
        className="w-full h-auto md:h-20 flex flex-col md:flex-row justify-between items-center py-2 md:py-4 pl-4 pr-4 md:px-10 lg:px-20 font-primary sticky top-0 bg-white z-10"
        style={{ boxShadow: "0px 0px 6px rgba(0,0,0,0.25)" }}
      >
        {/* ---------sidebar--------- */}
        <div
          className={`fixed top-0 left-0 h-screen w-70 rounded-tr-3xl rounded-br-3xl bg-secondary shadow transform transition-transform duration-500 ${
            sideBarOpen ? "translate-x-0" : "-translate-x-70"
          } block md:hidden z-20`}
        >
            <div className="p-6 ">
              <Link to="/">
                <img src={Logo} className="h-12" />
                </Link>
            </div>
        {/* navigation bar */}
        <div>
            {navItems.map((item, index) => (
                <div key={index}  onClick={item.action} className="flex flex-col ">
                    <div className="flex items-center gap-4 p-4 hover:bg-primary/40 transition-colors duration-300 cursor-pointer">
                    {item.icon}
                    <span className="text-text">{item.name}</span>
                    </div>
                </div>
            ))}
        </div>
        </div>

        {/* ---------- Top Row ---------- */}
        <div className="w-full flex justify-between items-center">
          {/* burger menu icon */}
          <RxHamburgerMenu
            size={22}
            className="block md:hidden text-primary"
            onClick={() => setSideBarOpen(true)}
          />

          {sideBarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-60 z-10"
              onClick={() => setSideBarOpen(false)}
            >
            </div>
          )}

          {/* logo */}
          <div className="logo -ml-48 md:ml-0">
            <Link to="/">
            <img src={Logo} className="h-10 lg:h-12 object-contain" />
            </Link>
          </div>

          {/* cart and sign-in */}
          <div className="sig-cart flex justify-center items-center gap-4 lg:gap-8">
            {/* account */}
            <div className="text-text text-[14px]">
              <Link to="/account" className="hidden md:flex items-center gap-2">
              <CiUser size={22} className="text-primary" />
              <span className="text-sm">Account</span>
              </Link>
            </div>

            {/* cart */}
            <div className="text-text text-[14px]">
              <Link to="/cart" className="flex items-center gap-2">
              <PiHandbag size={22} className="text-primary" />
              <span className="text-sm hidden md:flex">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- Search Bar ---------- */}
        <div className="w-full flex justify-center mt-3 md:mt-0 md:absolute md:left-[46%] lg:left-[48%] xl:left-[40%] 2xl:left-[36%] md:-translate-x-1/2 md:w-[42%] lg:w-[40%] ">
          <div className="relative w-[90%] md:w-full">
            <IoIosSearch
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="search"
              className="w-full border border-border rounded-md py-2 px-10 bg-[#f3f3f3] outline-none font-semibold text-text text-[14px] focus:border-primary/60 focus:bg-white focus:shadow-md transition duration-400"
              placeholder="Search products, brands, etc."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
