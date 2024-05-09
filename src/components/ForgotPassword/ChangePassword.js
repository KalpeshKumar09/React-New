import React from "react";

const ChangePassword = () => {
  return (
    <section className="bg-white min-h-screen flex justify-center overflow-hidden py-2 px-2">
      <div className="flex flex-col items-center shadow-lg rounded-lg  bg-[#E5E8F2]">
        <div className=" flex max-w-3xl p-1 items-center lg:flex lg:flex-row  md:flex md:flex-row min-[320px]:flex min-[320px]:flex-col">
          <div className="flex gap-3 flex-col ">
            <h1 className="text-[22px]  text-center font-extrabold">
              Change password
            </h1>
            <p className="text-[14px] text-center px-4">
              Your password must be at least 8 characters and should include a
              combination of numbers, letters ans special characters (!$@%).
            </p>
            <form
              action=""
              className="flex flex-col gap-4 py-6"
              /*   onSubmit={handleSubmit} */
            >
              <div className="flex flex-col">
                <label htmlFor="currentPassword" className="text-lg">
                  currentpassword
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-14"
                  type="password"
                  name="currentPassword"
                  /*  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} */
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg">
                  password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-14"
                  type="password"
                  name="password"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-lg">
                  confirmpassword
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-14"
                  type="password"
                  name="confirmPassword"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                />
              </div>

              <div className="flex justify-center">
                <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-72 h-12 text-lg">
                  Updated Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
