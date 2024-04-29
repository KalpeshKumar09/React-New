import React, { useState } from "react";
import ReportDataService from "../../context/Report-Service";

const Report = () => {
  const [report, setReport] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReport = {
      report,
      message,
    };

    try {
      await ReportDataService.addReports(newReport);
      alert("report added");
    } catch (error) {
      console.log(error);
    }

    setReport("");
    setMessage("");
  };
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center items-center shadow-lg  bg-[#E5E8F2] ">
        <h1 className="text-[22px] font-medium mt-2 text-center">
          Report An Issue
        </h1>
        <div className=" flex max-w-3xl p-5 items-center lg:flex lg:flex-row  md:flex md:flex-row min-[320px]:flex min-[320px]:flex-col">
          <div className="w-full">
            <p className="text-[14px] text-center">
              Found a bug or have a suggestion? let us know here! Your feedback
              is invaluable in helping us enhance our services and address any
              issues promptly.
            </p>
          </div>
          <div className="w-full px-8 md:px-16">
            <form className="flex flex-col gap-4 py-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="report">
                  What Issue Do You Want To Report?
                </label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-gray-50"
                  type="text"
                  name="report"
                  onChange={(e) => setReport(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="message">
                  A Brief Description of The Problem
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  className="p-2 mt-1 rounded-xl border w-full bg-gray-50"
                ></textarea>
              </div>

              <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300">
                Submit Issue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
