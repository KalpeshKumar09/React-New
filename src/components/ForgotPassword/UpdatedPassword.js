import React from "react";
import Images from "../Images/e5b8d8b6-80d3-4545-ab6d-24fdd706ef4c.png";
import { useNavigate } from "react-router-dom";

const UpdatedPassword = () => {
  const navigate = useNavigate();

  const updatedPassword = (e) => {
    e.preventDefault();

    navigate("/Login");
  };
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
              Hey, Password successfully changed
            </h2>
            <p className="text-left">
              Use the updated password fot logging the next time
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={updatedPassword}
                className="bg-[#545AFA] rounded-md text-white py-3 hover:scale-105 duration-300 w-44 h-14 text-lg text-center"
              >
                Go to Login Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedPassword;
