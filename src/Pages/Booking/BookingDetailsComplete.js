import React from "react";
import { useNavigate } from "react-router-dom";

const BookingDetailsComplete = () => {
  const navigate = useNavigate();

  const otp = () => {
    navigate("/BookingOtp");
  };
  return (
    <div className="flex flex-col pt-10 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col pr-7 pl-3 w-full">
        <div className="flex flex-col justify-center self-start px-2 py-3 mt-2 ml-4 text-sm font-medium text-black rounded-lg bg-zinc-300">
          <div className="flex flex-col items-start pt-1.5 pr-16 pb-7 pl-5 bg-white rounded">
            <div className="self-center"> Service Details</div>
            <div className="mt-4 text-neutral-800">
              <span className="font-medium text-black">Booking Id</span>:
              <span className="text-neutral-800">PETCARE-123456</span>
            </div>
            <div className="mt-3.5">
              Service: <span className="">Veterinary Care</span>{" "}
            </div>
            <div className="mt-3.5">
              Date:<span className="">March 30, 2024</span>{" "}
            </div>
            <div className="mt-3.5">
              Time: <span className="">Veterinary Care</span>{" "}
            </div>
            <div className="mt-3.5">
              Date:<span className="">10:00 AM</span>{" "}
            </div>
            <div className="mt-4">
              Address: <span className="">456 Anytown Lane, </span>
              <br />
              <span className="">Anytown,CA 90210 </span>
            </div>
            <div className="mt-3.5 text-red-500">
              Concern:{" "}
              <span className="text-red-500 ">Vomiting and loss of </span>
              <br />
              <span className="text-red-500 ">
                appetite for the past 2 days.
              </span>{" "}
            </div>
            <div className="mt-3.5">
              Additional Notes: <span className="">No recent </span>
              <br />
              <span className="">dietary changes, up-to-date </span>
              <br />
              <span className="">on vaccinations.</span>
            </div>
          </div>
          <div className="flex flex-col pt-1.5 pr-20 pb-5 pl-5 mt-3 bg-white rounded">
            <div className="self-center">Pet Profile</div>
            <div className="flex flex-col self-start mt-5">
              <div>
                Pet Name: <span className="">Whisks</span>{" "}
              </div>
              <div className="mt-4">
                Breed:<span className="">Persian</span>{" "}
              </div>
              <div className="mt-4">
                Age:<span className=""> 5 Years</span>{" "}
              </div>
              <div className="mt-3.5">
                Date:<span className="">10:00 AM</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={otp}
          className="flex flex-col justify-center self-center px-14 py-3.5 mt-5 max-w-full text-sm font-medium whitespace-nowrap rounded-xl bg-zinc-300 text-neutral-800 w-[184px]"
        >
          <svg
            width="30"
            height="17"
            viewBox="0 0 30 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9591 0.83753C17.3061 0.49759 17.7679 0.309657 18.247 0.313387C18.726 0.317117 19.185 0.512219 19.527 0.857523C19.8689 1.20283 20.0671 1.67133 20.0798 2.16416C20.0925 2.657 19.9186 3.13562 19.5948 3.49904L9.76627 16.1475C9.59726 16.3348 9.39328 16.4852 9.16653 16.5895C8.93978 16.6938 8.69491 16.7501 8.44656 16.7548C8.19821 16.7595 7.95148 16.7127 7.72113 16.617C7.49078 16.5214 7.28153 16.379 7.1059 16.1982L0.58801 9.49122C0.406497 9.31718 0.260911 9.1073 0.159935 8.8741C0.0589598 8.64091 0.00466427 8.38917 0.000287519 8.13391C-0.00408923 7.87866 0.0415425 7.6251 0.134461 7.38839C0.227379 7.15167 0.36568 6.93664 0.541113 6.75611C0.716546 6.57559 0.925517 6.43328 1.15556 6.33766C1.3856 6.24205 1.632 6.19509 1.88007 6.1996C2.12813 6.2041 2.37277 6.25997 2.59939 6.36388C2.82601 6.46778 3.02997 6.61759 3.19911 6.80437L8.35726 12.1096L16.9098 0.893295L16.9591 0.83753ZM14.6929 13.8662L16.9591 16.1982C17.1347 16.3786 17.3438 16.5207 17.5739 16.6161C17.804 16.7115 18.0505 16.7582 18.2985 16.7535C18.5466 16.7487 18.7911 16.6927 19.0177 16.5885C19.2442 16.4844 19.448 16.3344 19.617 16.1475L29.4505 3.49904C29.6271 3.31958 29.7668 3.10533 29.8612 2.86908C29.9556 2.63284 30.0028 2.37944 29.9999 2.12403C29.997 1.86861 29.9441 1.61642 29.8444 1.3825C29.7447 1.14858 29.6001 0.937746 29.4195 0.762575C29.2388 0.587404 29.0257 0.451494 28.7929 0.362961C28.56 0.274427 28.3122 0.235086 28.0643 0.247287C27.8163 0.259488 27.5733 0.322982 27.3497 0.433975C27.1262 0.544968 26.9266 0.701184 26.763 0.893295L18.208 12.1096L17.0133 10.8777L14.6929 13.8662Z"
              fill="#211F1F"
            />
          </svg>

          <div>Completed</div>
        </button>
      </div>
    </div>
  );
};

export default BookingDetailsComplete;
