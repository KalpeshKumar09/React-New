import React from "react";

const AddProfile = () => {
  return (
    <section className="bg-white  flex justify-center  py-2 px-2 overflow-hidden">
      <div className="flex flex-col items-center shadow-lg rounded-lg  bg-[#E5E8F2] w-screen">
        <div className=" flex max-w-3xl  items-center lg:flex lg:flex-row  md:flex md:flex-row min-[320px]:flex min-[320px]:flex-col">
          <div className="flex gap-2 flex-col py-4">
            <h1 className="text-[22px]  text-center font-extrabold">
              Profile Details
            </h1>
            <form
              action=""
              className="flex flex-col gap-4 py-6"
              /* onSubmit={handleSubmit} */
            >
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-lg">
                  Full Name
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-12"
                  type="text"
                  name="fullName"
                  /* value={fullName}
                  onChange={(e) => setFullName(e.target.value)} */
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-12"
                  type="email"
                  name="email"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mobile" className="text-lg">
                  Mobile
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-12"
                  type="text"
                  name="mobile"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-lg">
                  Address
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-12"
                  type="text"
                  name="address"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg">Gender</h1>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row">
                    <input
                      className="p-2 mt-1 rounded-md border bg-white"
                      type="radio"
                      name="male"
                      /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                    />
                    <label htmlFor="male" className="text-lg">
                      Male
                    </label>
                  </div>
                  <div className="flex flex-row">
                    <input
                      className="p-2 mt-1 rounded-md border bg-white"
                      type="radio"
                      name="female"
                      /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                    />
                    <label htmlFor="female" className="text-lg">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-60 h-12 text-lg">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProfile;
