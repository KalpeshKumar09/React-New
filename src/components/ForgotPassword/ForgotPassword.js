import React, { useState } from "react";
import Images from "../Images/05041e86-1436-458c-8e7e-756fe84cbb89.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  /* const [email, setEmail] = useState("");


  const forgotPassword = async (e) => {
    const 
  } */

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
              Hey, Welcome Back To Continue!
            </h2>
            <h4 className="text-center">Sign In With Otp</h4>
            <p>You'll receive a 5 digit code to verify next...</p>
            <form
              className="flex flex-col gap-4 py-6"
              onSubmit={forgotPassword}
            >
              <div className="flex flex-col">
                <label htmlFor="email">Enter Your Email Address</label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-[#E5E8F2]"
                  type="email"
                  name="email"
                  /* onChange={(e) => setEmail(e.target.value)} */
                  /* value={email} */
                  required
                />
                <div id="recaptcha-container"></div>
              </div>

              <Link
                to="/Otp"
                className="bg-[#545AFA] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Update Password
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
