import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Routes/AuthContext";

const Nav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && (
        <>
          <div className="">
            <div className="bg-[#7276E8]">
              <div className="flex gap-5 justify-evenly items-center py-2 px-6 text-md  font-semibold  text-white flex-row">
                <Link to="/Home" className="text-[14px] text-center text-white">
                  Home
                </Link>
                <Link
                  to="/Booking"
                  className="text-[14px] text-center text-white"
                >
                  Booking
                </Link>
                <Link
                  to="/Wallet"
                  className="text-[14px] text-center text-white"
                >
                  Wallet
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
