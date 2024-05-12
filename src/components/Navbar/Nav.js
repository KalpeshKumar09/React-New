import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <button className="text-while me-4 cursor-pointer">=</button>
        <span>E-commerce</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="text-black">
          <div>n</div>
          <div>p</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
