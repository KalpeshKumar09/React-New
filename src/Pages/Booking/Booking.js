import React from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const details = () => {
    navigate("/BookingDetails");
  };
  return (
    <div className="flex flex-col items-center pt-10 bg-white max-w-screen py-20">
      <div className="flex gap-5 flex-col justify-between w-full text-sm max-w-screen text-neutral-800">
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between px-20 w-full p-4">
            <div className=" font-medium">Upcoming Bookings</div>
            <div className="">View All</div>
          </div>
          <div className="px-20 ">
            <div className="flex flex-col sm:flex-col sm:justify-between px-4  md:justify-center md:flex-col lg:flex-row lg:justify-between   py-3 mt-3.5 w-full  rounded-md  lg:bg-transparent  text-neutral-800 border-2 border-zinc-400 bg-gray-200">
              <div>
                <div className="flex gap-5 justify-between sm:flex-col md:flex-row lg:flex-row">
                  <div onClick={details} className="text-sm font-medium">
                    Jhon Doe
                  </div>
                  <div className="text-xs md:opacity-5 lg:opacity-0">
                    Upcoming
                  </div>
                </div>
                <div className=" text-xs font-medium">Booking Slot</div>
                <div className="self-start mt-2 text-xs text-zinc-700">
                  Tuesday, March 30, 2024, 10:00 AM
                </div>
              </div>
              <div className=" sm:bg-gray-500 md:bg-gray-500 lg:bg-white">
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
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between px-20 w-full p-4">
            <div className=" font-medium">Upcoming Bookings</div>
            <div className="">View All</div>
          </div>
          <div className="px-20">
            <div className="flex flex-row justify-between w-full rounded-md bg-white shadow-[0px_4px_4px_rgba(156,_154,_154,_0.25)]  overflow-hidden">
              <div className="">
                <img
                  className=""
                  alt=""
                  src="/vector5.svg"
                  width={30}
                  height={50}
                />
              </div>
              <div>
                <div className=" font-medium">Jhon Doe</div>
                <div className="">Grooming service for Max.</div>
              </div>
              <div>
                <div className="mr-5 font-medium">March 15, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
