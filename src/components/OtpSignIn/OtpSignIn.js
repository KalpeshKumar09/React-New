import React, { useState } from "react";
import Images from "../Images/262d36ab-e1e2-4075-9825-fe6332071f2e.png";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const OtpSignIn = ({ setConfirmObj }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { setUpRecaptcha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (email === "" || email === undefined) {
      return setError("Please enter a valid email!");
    }
    try {
      const response = await setUpRecaptcha(email);
      console.log(response);
      setConfirmObj(response);
    } catch (error) {
      setError(error);
    }
    console.log(email);
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center flex-col  ">
      <div className="bg-white flex flex-col justify-center items-center  rounded-lg shadow-xl border-2 border-white py-4 px-8">
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
            <form className="flex flex-col gap-4 py-6" onSubmit={getOtp}>
              <div className="flex flex-col">
                <label htmlFor="email">Enter Your Email Address</label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-[#E5E8F2]"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  /* value={email} */
                  required
                />
                <div id="recaptcha-container"></div>
              </div>

              <Link
                to="/Otp"
                className="bg-[#545AFA] rounded-xl text-white py-2 hover:scale-105 duration-300 text-center"
              >
                Continue
              </Link>
            </form>

            <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
              <Link
                to="/"
                className="py-2 px-5   hover:scale-110 duration-300 text-[14px]"
              >
                SignIn With Email
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center items-center text-[#002D74]">
          <p className=" px-5 hover:scale-110 duration-300 md:px-5 sm:px-20 text-[14px]">
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
