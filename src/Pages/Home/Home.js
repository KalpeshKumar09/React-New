import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center  bg-white max-w-screen">
        <div>
          <button className=" flex flex-col justify-center items-center p-1 mt-20  text-base font-medium rounded-md bg-black text-white min-[360px]:w-78 md:w-60 px-20 ">
            Go Online
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-yellow-400 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-[#E5E8F2] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </button>
        </div>
        <div className="flex gap-5 justify-between w-full text-sm max-w-screen text-neutral-800">
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between px-20 w-full p-4">
              <div className=" font-medium">Upcoming Bookings</div>
              <div className="">View All</div>
            </div>

            <div className="px-20">
              <div className="flex flex-col sm:flex-col sm:justify-between px-1  md:justify-center md:flex-col lg:flex-row lg:justify-between   mt-3.5 w-full  rounded-lg shadow-xl  lg:bg-transparent  text-neutral-800 ">
                <div>
                  <div className="flex gap-5 justify-between sm:flex-col md:flex-row lg:flex-row">
                    <div className="font-bold text-black">Jhon Doe</div>
                    <div className="text-xs md:opacity-5 lg:opacity-0">
                      Upcoming
                    </div>
                  </div>
                  <div className=" text-xs font-medium">Booking Slot</div>
                  <div className="self-start mt-2 text-xs text-zinc-700">
                    Tuesday, March 30, 2024, 10:00 AM
                  </div>
                </div>
                <div className="bg-[#E5E8F2] md:bg-transparent">
                  <div className="text-sm text-zinc-700">
                    456 Anytown Lane, Anytown,
                    <br />
                    CA 90210{" "}
                  </div>
                  <div className="mt-3 text-xs text-zinc-400">
                    Received 20 minutes Ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
