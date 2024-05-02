import React from "react";

const Nav = () => {
  return (
    <nav className="bg-[#7276E8] ">
      <div className="flex gap-5 justify-evenly items-center py-2 px-6 text-md  font-semibold  text-white max-md:flex-wrap min-[360px]:flex-row">
        <h2 className="text-[14px] text-center">Home</h2>
        <h2 className="text-[14px] text-center">Booking</h2>
        <h2 className="text-[14px] text-center">Wallet</h2>
      </div>
    </nav>
  );
};

export default Nav;
