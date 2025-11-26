import { useState } from "react";
import LadyBag from "../../assets/LadyShop.png";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^(?=.*\d)[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = () => {
    if (!email) {
      setError("Email Required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email must be valid and contain at least two number");
      return;
    }

    setEmail("");
    setError("");

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div className="bg-secondary flex flex-col md:flex-row items-center justify-center h-dvh font-primary">
          {/* image section for mobile */}
            <div className="flex flex-col md:flex-row md:hidden">
            <img
              src={LadyBag}
              alt="login image"
              className="w-[16vh] h-[20vh] rounded-md mb-5"
            />
          </div>
        <div className="flex flex-col md:flex-row w-[46vh] lg:w-[110vh] h-[47dvh] md:h-auto overflow-hidden shadow-lg bg-white rounded-2xl p-9.5 md:p-0">

          {/* image section for desktop */}
          <div className="md:flex flex-col md:flex-row hidden">
            <img
              src={LadyBag}
              alt="login image"
              className="w-dvh h-[60dvh] rounded-l-2xl"
            />
          </div>

          {/* content section */}
          <div className="flex flex-col justify-center px-5 md:px-20 w-full">
            <h1 className="text-xl md:text-[26px] font-semibold text-center">
              Verify Your Email
            </h1>

            <p className="text-[12px] text-[#666666] text-center">
              Please enter your email to receive One Time
              Password
            </p>

            <div className="mt-5">
              <input
                type="text"
                value={email}
                className={`border w-full h-12 md:h-14 rounded-md p-2 outline-none text-gray-600 placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-gray-600 pl-2 md:pl-3
                  ${error ? "border-red-500" : "border-border"}
                `}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
              />
              {/* Error message */}
              {error && (
                <p className="text-red-500 text-[12px] mt-2 text-center">
                  {error}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="mt-6 md:mt-8 bg-primary text-white py-2 rounded-md w-full h-12 font-semibold uppercase cursor-pointer"
              >
                Get Otp
              </button>
            </div>
            <p className="text-center text-gray-600 text-lg mt-4 md:mt-6 mb-4 md:mb-6">OR</p>
            <div className="">
              <button className="flex items-center justify-center gap-2 capitalize border border-border text-[#666666] py-2 rounded-md w-full h-12 cursor-pointer">
                <FcGoogle size={30}/>
                sign in with google
              </button>
            </div>
          </div>
        </div>
        {/* Toast notification */}
        {showToast && (
          <div
            className="fixed bottom-5 left-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-slide-in"
            style={{
              animation:
                "slideIn 0.3s ease-out forwards, slideOut 0.3s ease-in 2.7s forwards",
            }}
          >
            OTP sent successfully!
          </div>
        )}
        {/* Keyframes in React */}
        <style>
          {`
            @keyframes slideIn {
              0% { transform: translateX(-100%); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
              0% { transform: translateX(0); opacity: 1; }
              100% { transform: translateX(-100%); opacity: 0; }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Signin;
