import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import Images from "../Images/7a7c7ed2-db3d-4c4a-959e-5f6018481360.png";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errors, setErrors] = useState({});

  const { logIn } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      await logIn(email, password);
      navigate("/Home");
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <section class="bg-gray-200 min-h-screen flex items-center justify-center flex-col  ">
      <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-xl border-2 border-white py-4 px-8">
        <div class=" flex  max-w-3xl p-4 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div class="w-1/2">
            <img class="rounded-2xl sm:block visible" src={Images} alt="logo" />
          </div>
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-medium text-2xl text-[#002D74]">
              Hey, Welcome Back To Continue!
            </h2>
            <form class="flex flex-col gap-4 py-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  class="p-2 mt-1 rounded-xl border bg-[#E5E8F2]"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  class="p-2 mt-1 rounded-xl border w-full bg-[#E5E8F2]"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div class=" text-xs #002D74] py-4 text-[#002D74]">
                <Link
                  to="/ForgotPassword"
                  className="text-[14px] font-semibold"
                >
                  Forgot your password?
                </Link>
              </div>

              <button class="bg-[#545AFA] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Sign In
              </button>
            </form>

            <div class="mt-3 text-xs flex justify-center items-center text-[#002D74]">
              <Link
                to="/OtpSignIn"
                class="py-2 px-5   hover:scale-110 duration-300 text-[14px]"
              >
                SignIn With Otp
              </Link>
            </div>
          </div>
        </div>
        <div class=" text-center flex justify-center items-center text-[#002D74]">
          <p class=" px-5 hover:scale-110 duration-300 md:px-5 sm:px-20 text-[14px]">
            By Logging In, I agree with Poodles's Terms of Services and Privacy
            Policy, I agree to receive transactional text messages and I can
            opt-out at any time
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
