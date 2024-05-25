import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpcomingBookings = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUpcomingBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBooking();
  }, []);

  /* const navigate = useNavigate();
  const details = () => {
    navigate("/BookingDetails");
  }; */

  return (
    <div className="flex justify-center py-4">
      <div className="flex flex-col text-sm text-neutral-800 md:min-w-[800px] min-w-[360px]">
        {upcomingBookings.map((booking) => (
          <div
            className="cursor-pointer shadow-xl rounded-lg flex flex-col gap-3 mt-3"
            /* onClick={details} */
            key={booking.id}
          >
            <div className="flex flex-col text-neutral-800">
              <div className="px-1">
                <div className="flex gap-5 justify-between sm:flex-col md:flex-row lg:flex-row">
                  <Link
                    to={`/BookingDetails/${booking.id}`}
                    className="font-bold text-black"
                  >
                    {booking.name}
                  </Link>
                  <div className="text-xs lg:opacity-0">Upcoming</div>
                </div>
                <div className="text-xs font-medium">Booking Slot</div>
                <div className="self-start mt-2 text-xs text-zinc-700">
                  Tuesday, March 30, 2024, 10:00 AM
                </div>
              </div>
              <div className="bg-white border border-white mt-1"></div>
              <div className="px-2 bg-[#E5E8F2]">
                <div className="text-sm text-zinc-700">
                  456 Anytown Lane, Anytown,
                  <br />
                  CA 90210
                </div>
                <div className="mt-3 text-xs text-zinc-400">
                  Received 20 minutes ago
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBookings;
