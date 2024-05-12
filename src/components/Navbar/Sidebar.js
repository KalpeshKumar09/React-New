import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-500 fixed h-full flex flex-col">
      <div className="bg-black w-full">asffsdg</div>
      <div className="my-2 mb-4 ">
        <h1 className="text-xl text-while font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded py-2">
          <h4>Home</h4>
        </li>
        <li className="mb-2 rounded py-2">
          <h4>Home</h4>
        </li>
        <li className="mb-2 rounded py-2">
          <h4>Home</h4>
        </li>
        <li className="mb-2 rounded py-2">
          <h4>Home</h4>
        </li>
        <li className="mb-2 rounded py-2">
          <h4>Home</h4>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
