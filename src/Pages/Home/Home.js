import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-300 flex flex-col items-center min-h-screen py-4">
      <div className="min-w-[360px] flex flex-col items-center   gap-4 rounded-xl py-4">
        <div className="">
          <button className=" flex flex-col gap-2 justify-center items-center p-2 mt-4  text-base font-medium rounded-md bg-black text-white w-64 h-12">
            Go Online
            <label class="flex items-center mb-4 justify-center cursor-pointer ">
              <input type="checkbox" value="" class="sr-only peer" />
              <span class="w-9 absolute h-5  rounded-full peer-checked:after:bg-[#FAAF19] bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7276E8]"></span>
            </label>
          </button>
        </div>
        <div className="flex gap-5 justify-between w-full text-sm max-w-screen text-neutral-800 py-6">
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between px-10 w-full">
              <div className=" font-bold">Upcoming Bookings</div>
              <div className="">View All</div>
            </div>

            <div className="px-10">
              <div className="flex flex-col bg-white sm:flex-col sm:justify-between  md:justify-center md:flex-col lg:flex-row lg:justify-between   mt-3.5 w-full  lg:bg-transparent  text-neutral-800 ">
                <div className="px-1">
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
                <div className="bg-[#E5E8F2] md:bg-transparent p-1">
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
            <div className="px-10">
              <div className="flex flex-col bg-white sm:flex-col sm:justify-between  md:justify-center md:flex-col lg:flex-row lg:justify-between   mt-3.5 w-full  lg:bg-transparent  text-neutral-800 ">
                <div className="px-1">
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
                <div className="bg-[#E5E8F2] md:bg-transparent p-1">
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
            <div className="px-10">
              <div className="flex flex-col bg-white sm:flex-col sm:justify-between  md:justify-center md:flex-col lg:flex-row lg:justify-between   mt-3.5 w-full  lg:bg-transparent  text-neutral-800 ">
                <div className="px-1">
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
                <div className="bg-[#E5E8F2] md:bg-transparent p-1">
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
