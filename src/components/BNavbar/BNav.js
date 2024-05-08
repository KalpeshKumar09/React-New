import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-[#7276E8] ">
      <div className="flex gap-5 justify-evenly items-center py-2 px-6 text-md  font-semibold  text-white max-md:flex-wrap min-[360px]:flex-row">
        <Link to="/Home" className="text-[14px] text-center text-white">
          Home
        </Link>
        <Link to="/Booking" className="text-[14px] text-center text-white">
          Booking
        </Link>
        <Link className="text-[14px] text-center text-white">Wallet</Link>
      </div>
    </div>
  );
};

export default Nav;
