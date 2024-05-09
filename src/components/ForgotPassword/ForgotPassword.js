import React from "react";
import Images from "../Images/05041e86-1436-458c-8e7e-756fe84cbb89.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center flex-col  py-2 px-4 overflow-hidden">
      <div className=" bg-white flex flex-col justify-center items-center shadow-xl rounded-lg border-2 border-white">
        <div className=" flex  max-w-3xl p-2 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div className="max-w-xl">
            <img
              className="rounded-2xl sm:block visible"
              src={Images}
              alt="logo"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="font-bold text-3xl text-black text-left">
              Hey, Welcome Back To Continue!
            </h2>
            <p className="text-left">
              Your new password must be different from your last password
            </p>
            <form className="flex flex-col gap-4 py-2">
              <div className="flex flex-col">
                <label htmlFor="newPassword" className="text-lg">
                  Enter New Password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2] h-14"
                  type="password"
                  name="newPassword"
                  required
                />
                <div id="recaptcha-container"></div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-lg">
                  Confirm New Password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2] h-14"
                  type="password"
                  name="confirmPassword"
                  required
                />
                <div id="recaptcha-container"></div>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/UpdatedPassword"
                  className="bg-[#545AFA] rounded-md text-white py-3 hover:scale-105 duration-300 w-44 h-14 text-lg text-center"
                >
                  Update Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
