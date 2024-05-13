/** @format */
/* "use client"; */
/*
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-4">
        <div className="flex items-center gap-20">
          <section className="flex items-center gap-4">
           
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
          </section>
          <Link to="" className="opacity-0">
            Dashboard
          </Link>
          <Link to="" className="opacity-0">
            Bookings
          </Link>
          <Link className="opacity-0">Contact</Link>
          <Link className="opacity-0">About</Link>
        </div>

      
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen gap-4 z-50 w-64 flex overflow-hidden">
            <div className="p-3 ">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
              />
            </div>

            <div className="p-3 flex flex-row justify-start gap-2 border-b-2 border-gray-300">
              <svg
                width="32"
                height="32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_32)">
                  <path
                    d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                    fill="#E8EBF3"
                  />
                  <path
                    d="M32 29.091C36.2843 29.091 39.7576 25.6177 39.7576 21.3334C39.7576 17.049 36.2843 13.5758 32 13.5758C27.7157 13.5758 24.2424 17.049 24.2424 21.3334C24.2424 25.6177 27.7157 29.091 32 29.091Z"
                    fill="#6C63FF"
                    stroke="#6C63FF"
                    strokeWidth="1.27273"
                  />
                  <path
                    d="M18.9416 53.3334H45.0793C48.6846 53.3334 50.4242 52.3028 50.4242 50.07C50.4242 44.8412 43.2558 37.8182 32 37.8182C20.7441 37.8182 13.5757 44.8412 13.5757 50.07C13.5757 52.3028 15.3155 53.3334 18.9416 53.3334Z"
                    fill="#6C63FF"
                    stroke="#6C63FF"
                    strokeWidth="1.27273"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_32">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col">
                <h4 className="text-[12px]">Kalpesh Kumar</h4>
                <p className="text-[12px]">sutharkalpesh101@gmail.com</p>
              </div>
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
              <Link className="font-bold">LogOut</Link>
            </div>
          </section>
        </div>

      
        <section className="flex items-center gap-4">
        
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </div>

          <div className="flex items-center justify-center">
            <div className=" inline-block text-left dropdown">
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
                      className="bi bi-person-fill text-[#6C63FF] bg-gray-200 rounded-3xl"
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
    </main>
  );
}
 */
