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
    <section className="bg-white min-h-screen flex  justify-center py-2 px-2 overflow-hidden">
      <div className="flex flex-col items-center shadow-lg rounded-lg  bg-[#E5E8F2]">
        <div className=" flex max-w-3xl py-4 items-center lg:flex lg:flex-row  md:flex md:flex-row min-[320px]:flex min-[320px]:flex-col">
          <div className="flex gap-6 flex-col">
            <h1 className="text-[22px] font-extrabold text-center">
              Report An Issue
            </h1>
            <p className="text-[14px] text-center px-4">
              Found a bug or have a suggestion? let us know here! Your feedback
              is invaluable in helping us enhance our services and address any
              issues promptly.
            </p>
            <form className="flex flex-col gap-4 py-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="report" className="text-lg">
                  What Issue Do You Want To Report?
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-white h-14"
                  type="text"
                  name="report"
                  onChange={(e) => setReport(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg">
                  A Brief Description of The Problem
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  className="p-2 mt-1 rounded-md border bg-white h-14"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-72 h-12 text-lg">
                  Submit Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
