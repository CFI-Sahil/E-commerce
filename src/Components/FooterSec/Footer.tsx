import Logo from "../../assets/LogoWhite.png";
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Mail from '../../assets/Email.svg';
import Call from '../../assets/Call.svg';
import Location from '../../assets/Address.svg';
import { PiTruckTrailer } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="mt-16 font-primary overflow-hidden relative">
        <div className="bg-primary w-full h-[70vh] md:h-96 lg:h-72">
          <div className="py-10 px-5 md:px-10 xl:px-20">
            <div className="flex flex-col lg:flex-row md:items-center lg:items-start lg:justify-start md:gap-6 lg:gap-12">
              <img src={Logo} alt="Logo" className="w-40 xl:w-50 relative mb-4 md:mb-0" />
              <div className="flex flex-col w-full gap-y-10">
              {/* section row 1 */}
              <div className='flex flex-col md:grid md:grid-cols-5  gap-x-5 gap-y-5 text-white w-full mt-4'>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Returns & Privacy Policy</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Shipping & Delivery Policy</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Terms & Conditions</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">FAQs</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="" className="uppercase hidden md:block">Get in Touch</a>
                  <div className="flex gap-5 absolute md:static mt-36 md:mt-2">
                    <a href="">
                  <img src={Facebook} alt="Facebook" className="h-7" />
                  </a>
                  <a href="">
                  <img src={Instagram} alt="Instagram"  className="h-7"/>
                  </a>
                  </div>
                </div>
              </div>
              {/* section row 2 */}
              <div className='grid md:grid-cols-5 gap-x-5 gap-y-5 text-white w-full justify-self-start -mt-10 md:mt-0'>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">About Us</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Payments & Charges</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Privacy Policy</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  <a href="">Contact Us</a>
                </div>
              </div>
              {/* section row 3 */}
              <div className='flex flex-col-reverse ml-42 md:ml-0 mt-2 md:mt-0 absolute md:static md:grid md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 text-white w-full justify-self-start'>
                <div className="text-[12px] lg:text-sm font-medium flex items-center h-10 gap-3 not-first:gap-4">
                    <img src={Mail} alt="" className="h-5 2xl:h-7" />
                  <a href="">support@ecmacom.com</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium flex items-center h-10 gap-3">
                    <img src={Call} alt="" className="h-5 2xl:h-7" />
                  <a href="">+91-900xxxxx01</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium flex items-center h-10 gap-3 col-span-2 w-53 md:w-auto">
                    <img src={Location} alt="" className="h-6 2xl:h-7" />
                  <a href="">Samrat Nagar, Sahar Village, Vile Parle (East), Mumbai - 400099</a>
                </div>
                <div className="text-[12px] lg:text-sm font-medium absolute md:static -mb-42 md:mb-0 mt-0 2xl:mt-2 -ml-20 md:ml-0">
                  <a href="">© 2025, EcmaCom owned by Bee Enterprises.</a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:flex justify-center items-center gap-6 md:gap-x-12  lg:gap-16 xl:gap-20 mt-6 md:mt-10 mb-6 md:mb-10 font-primary text-text uppercase overflow-hidden'>
            {/* section One */}
            <div className='flex justify-center items-center'>
                <PiTruckTrailer size={45} className="bg-primary text-white font-light rounded-full h-10 w-10 lg:h-15 lg:w-15 p-2 lg:p-3"/>
                <p className='ml-3 text-[10px] lg:text-sm'>Easy Shipping</p>
            </div>
            {/* section Two */}
            <div className='flex justify-start items-center'>
                <PiPackage size={45} className="bg-primary text-white font-light rounded-full h-10 w-10 lg:h-15 lg:w-15 p-2 lg:p-3"/>
                <p className='ml-3 text-[10px] lg:text-sm'>Easy Returns</p>
            </div>
            {/* section Three */}
            <div className='flex justify-center  items-center'>
                <PiMedalLight size={45} className="bg-primary text-white font-light rounded-full h-10 w-10 lg:h-15 lg:w-15 p-2 lg:p-3"/>
                <p className='ml-3 text-[10px] lg:text-sm'>100% Authentic</p>
            </div>
            {/* section Four */}
            <div className='flex justify-start items-center'>
                <IoSettingsOutline size={45} className="bg-primary text-white font-light rounded-full h-10 w-10 lg:h-15 lg:w-15 p-2 lg:p-3"/>
                <p className='ml-3 text-[10px] lg:text-sm'>Self Manufacturing</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
