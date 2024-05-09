import React from "react";
import Images from "../Images/88352552-27fd-406f-86d1-b1d6ca9c1650.png";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center flex-col py-2 px-2  overflow-hidden">
      <div className="bg-white flex flex-col justify-center items-center  rounded-lg shadow-xl border-2 border-white p-4">
        <div className=" flex  max-w-3xl p-2 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div className="max-w-xl">
            <img
              className="rounded-2xl sm:block visible"
              src={Images}
              alt="logo"
            />
          </div>
          <div className="max-w-2xl ">
            <div>
              <h2 className="font-bold text-3xl text-black px-2 text-left">
                Hey, Show Us It's You!
              </h2>
            </div>
            <p className="text-left">Please verify your email to continue</p>
            <form className="flex flex-col gap-4 py-2" /* onSubmit={getOtp} */>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Enter Your Email Address
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2] h-14"
                  type="email"
                  name="email"
                  /*    onChange={(e) => setEmail(e.target.value)} */
                  /* value={email} */
                  required
                />
                <div id="recaptcha-container"></div>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  to="/Otp"
                  className="bg-[#545AFA] rounded-md text-white py-3 hover:scale-105 duration-300 w-44 h-14 text-lg text-center"
                >
                  Continue
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
