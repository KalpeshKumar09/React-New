import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../Images/262d36ab-e1e2-4075-9825-fe6332071f2e.png";

const Login = () => {
  /*  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*   console.log(email + password); */
    localStorage.setItem("user", "test");
    navigate("/Home");
  };
  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center flex-col  py-2 px-2  overflow-hidden">
      <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-xl border-2 border-white p-4">
        <div className=" flex  max-w-3xl p-1 items-center lg:flex lg:flex-row md:flex md:flex-row min-[360px]:flex min-[360px]:flex-col rounded-2xl ">
          <div className="max-w-xl">
            <img className=" sm:block visible" src={Images} alt="logo" />
          </div>
          <div className="max-w-2xl ">
            <h2 className="font-bold text-xl text-black px-10 text-center">
              Hey, Welcome Back To Continue!
            </h2>
            <form className="flex flex-col gap-2 py-2" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2] h-14"
                  type="email"
                  name="email"
                  /*  onChange={(e) => setEmail(e.target.value)} */
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border border-white w-full bg-[#E5E8F2] h-14"
                  type="password"
                  name="password"
                  /* onChange={(e) => setPassword(e.target.value)} */
                  required
                />
              </div>

              <div className=" text-xs #002D74] py-4 text-[#002D74]">
                <Link
                  to="/ForgotPassword"
                  className="text-[14px] font-semibold"
                >
                  Forgot your password?
                </Link>
              </div>

              <div className="flex  justify-center">
                <button
                  /* onClick={handleSubmit} */
                  className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-14 text-lg"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className=" text-xs flex justify-center items-center">
              <Link
                to="/OtpSignIn"
                className="py-2 px-5   hover:scale-110 duration-300 text-[14px] text-black text-md"
              >
                SignIn With Otp
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center items-center text-black">
          <p className=" hover:scale-110 duration-300 md:px-5 sm:px-10 text-[14px]">
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
