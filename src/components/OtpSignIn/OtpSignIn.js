import React, { useState } from "react";
import Images from "../Images/262d36ab-e1e2-4075-9825-fe6332071f2e.png";
import { Link, useNavigate } from "react-router-dom";

const OtpSignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getOtp = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/Otp");
  };

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
              <h2 className="font-bold text-3xl text-black px-2 text-center">
                Hey, Welcome Back To Continue!
              </h2>
            </div>
            <h4 className="text-center text-2xl font-medium">
              Sign In With Otp
            </h4>
            <p className="text-center">
              You'll receive a 5 digit code to verify next...
            </p>
            <form className="flex flex-col gap-4 py-2" onSubmit={getOtp}>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Enter Your Email Address
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2] h-14"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
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

            <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
              <Link
                to="/"
                className="py-2 px-5   hover:scale-110 duration-300 text-lg text-black"
              >
                SignIn With Email
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center items-center text-[#002D74]">
          <p className=" px-1 text-black hover:scale-110 duration-300 md:px-5 sm:px-20 text-[14px]">
            By Logging In, I agree with Poodles's Terms of Services and Privacy
            Policy, I agree to receive transactional text messages and I can
            opt-out at any time
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtpSignIn;
