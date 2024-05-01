/** @format */
/* "use client"; */

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import "./navbar.css";

export default function Navbar1() {
  const { logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  const [isSideMenuOpen, setMenu] = useState(false);

  let { pathname } = useLocation();
  let subbase = pathname.split("/")?.[1] || "Dashboard";

  function Lankness(type = null) {
    let classes = "hidden lg:block text-gray-400 hover:text-black opacity-0";

    if (type === subbase) {
      classes += "bg-red text-white no-underline ";
    } else {
      classes += "";
    }

    return classes;
  }

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-4">
        <div className="flex items-center gap-20">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
          </section>
          <Link to="/" className={Lankness("Home")}>
            Dashboard
          </Link>
          <Link to="/" className={Lankness("Bookings")}>
            Bookings
          </Link>
          <Link className={Lankness("Contact")}>Contact</Link>
          <Link className={Lankness("About")}>About</Link>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen gap-8 z-50 w-56 flex">
            <div className="p-3 ">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
              />
            </div>

            <div className="border-b-2 border-gray-300 flex flex-col justify-center items-start gap-5 p-4 ml-4">
              <Link className="font-bold">Settings</Link>
              <Link to="/Contact" className="font-bold">
                Contact Us
              </Link>
              <Link className="font-bold" to="/Report">
                Report An Issue
              </Link>
              <Link className="font-bold" to="/Privacy">
                Privacy Policy
              </Link>
              <Link className="font-bold" to="/Terms">
                T&C
              </Link>
            </div>
            <div className="p-4 ml-4">
              <Link className="font-bold" onClick={handleLogout}>
                LogOut
              </Link>
            </div>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative inline-block text-left dropdown">
              <span className="">
                <button
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button"
                >
                  <span className="text-3xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-person-fill text-[#6C63FF] bg-gray-200 rounded-3xl"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </span>
                </button>
              </span>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  role="menu"
                >
                  <div className="py-1">
                    <Link
                      tabIndex="2"
                      className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-black-700 cursor-pointer"
                    >
                      Profile
                    </Link>
                    <Link
                      tabIndex="2"
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
      <hr />
    </main>
  );
}
