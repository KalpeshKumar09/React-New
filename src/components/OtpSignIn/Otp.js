import React, { useState } from "react";
import Images from "../Images/7a7c7ed2-db3d-4c4a-959e-5f6018481360.png";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOtp = (e) => {
    e.preventDefault();
    console.log(otp);
    navigate("/Home");
  };

  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center flex-col py-2 px-2 overflow-hidden ">
      <div className="bg-white flex flex-col justify-center items-center shadow-xl rounded-lg border-2 border-white">
        <div className=" flex  max-w-3xl p-1 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div className="max-w-xl">
            <img
              className="rounded-2xl sm:block visible"
              src={Images}
              alt="logo"
            />
          </div>
          <div className="max-w-2xl flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl text-black px-10 text-center">
              Hey, We've Sent You An Email With Your Code
            </h2>
            <p className="text-center">
              Enter the code which has been send to contact@poodles.in
            </p>
            <form className="flex flex-col gap-4 py-6" onSubmit={verifyOtp}>
              <div className="flex flex-col">
                <label htmlFor="otp">Enter Your Email Address</label>
                <div className="flex flex-row gap-3">
                  <input
                    className="p-2 mt-1 rounded-md border-1 border-black bg-white h-14 w-10 text-[16px]"
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxlength="1"
                  />
                  <input
                    className="p-2 mt-1 rounded-md border-1 border-black bg-white h-14 w-10 text-[16px]"
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxlength="1"
                  />
                  <input
                    className="p-2 mt-1 rounded-md border-1 border-black bg-white h-14 w-10 text-[16px]"
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxlength="1"
                  />
                  <input
                    className="p-2 mt-1 rounded-md border-1 border-black bg-white h-14 w-10 text-[16px]"
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxlength="1"
                  />
                  <input
                    className="p-2 mt-1 rounded-md border-1 border-black bg-white h-14 w-10 text-[16px]"
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxlength="1"
                  />
                </div>
              </div>

              <div>
                <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-full h-12 text-lg">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
