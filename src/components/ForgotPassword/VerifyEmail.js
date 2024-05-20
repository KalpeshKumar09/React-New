import React from "react";
import Images from "../Images/88352552-27fd-406f-86d1-b1d6ca9c1650.png";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const getOtp = (e) => {
    e.preventDefault();

    navigate("/VerifyOtp");
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center flex-col py-4 px-2  overflow-hidden">
      <div className="bg-white max-w-[360px] flex flex-col justify-center items-center  rounded-lg shadow-xl border-2 border-white">
        <div className=" flex flex-col p-4 items-center  rounded-2xl ">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-bold text-xl text-black text-left">
                Hey, <br />
                Show Us It's You!
              </h2>
              <p className="">Please verify your email to continue</p>
            </div>

            <form className="flex flex-col gap-6 py-2" onSubmit={getOtp}>
              <div className="flex flex-col">
                <label htmlFor="email" className="">
                  Enter Your Email Address
                </label>
                <input
                  className="p-2 rounded-md border bg-[#E5E8F2]"
                  type="email"
                  name="email"
                  /*    onChange={(e) => setEmail(e.target.value)} */
                  /* value={email} */
                />
                <div id="recaptcha-container"></div>
              </div>
              <div className="flex justify-center">
                <button
                  /* onClick={handleSubmit} */
                  className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-12 text-lg font-semibold"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
