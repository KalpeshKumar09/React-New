import React, { useState } from "react";
import Images from "../Images/7a7c7ed2-db3d-4c4a-959e-5f6018481360.png";
import { Navigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [confirmObj, setConfirmObj] = useState("");

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) {
      return;
    }

    try {
      await confirmObj.confirm(otp);
      Navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center flex-col  ">
      <div className="flex flex-col justify-center items-center shadow-lg border-2 border-white py-4 px-8">
        <div className=" flex  max-w-3xl p-4 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div className="w-1/2">
            <img
              className="rounded-2xl sm:block visible"
              src={Images}
              alt="logo"
            />
          </div>
          <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center items-center">
            <h2 className="font-medium text-2xl text-[#002D74]">
              Hey, We've Sent You An Email With Your Code
            </h2>
            <p>Enter the code which has been send to contact@poodles.in</p>
            <form className="flex flex-col gap-4 py-6" onSubmit={verifyOtp}>
              <div className="flex flex-col">
                <label htmlFor="otp">Enter Your Email Address</label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-[#E5E8F2]"
                  type="text"
                  name="otp"
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <button className="bg-[#545AFA] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
