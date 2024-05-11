import React from "react";

const BookingDetails = () => {
  return (
    <div className="flex flex-col items-center pt-10 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-5 justify-between w-full text-sm max-w-[308px] text-neutral-800">
        <div className="flex gap-2">
          <div className="shrink-0 rounded-3xl border-2 border-solid bg-zinc-300 border-neutral-800 h-[50px] w-[50px]" />
          <div className="flex flex-col px-5 my-auto">
            <div className="font-light">Hello,</div>
            <div className="mt-2.5 font-medium">Jhon Doe</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7d07b36a280d8f485d82aceda30be8cd44e7d1132fb72ed9a4f68a20e893a2?"
          className="shrink-0 self-start mt-1.5 aspect-square fill-black w-[26px]"
        />
      </div>
      <div className="flex flex-col px-2 py-3.5 mt-10 w-full text-sm font-medium text-black rounded-lg bg-zinc-300 max-w-[308px]">
        <div className="flex flex-col items-start py-2 pr-16 pl-5 bg-white rounded">
          <div className="self-center"> Service Details</div>
          <div className="mt-3.5 text-zinc-700">
            <span className="font-medium text-black">Name</span>:Jhon Doe
          </div>
          <div className="mt-3 text-neutral-800">
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
        <div className="flex gap-1.5 mt-3 text-neutral-800">
          <div className="flex flex-col justify-center px-6 py-2.5 whitespace-nowrap bg-white rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a332c729bc0da28aa2ca24e8bf63f9407eaaf4e6480c5ce4935a6e1735bd7111?"
              className="self-center aspect-square fill-black w-[26px]"
            />
            <div>Contact</div>
          </div>
          <div className="flex flex-col justify-center px-11 py-2.5 bg-white rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc093e914ac03b8c9aff87c8dea238881280d357d6a2dac4d69d70b4875594b0?"
              className="self-center aspect-square fill-black w-[26px]"
            />
            <div>Get Direction</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 py-3.5 mt-3 max-w-full text-sm font-medium rounded-xl bg-zinc-300 text-neutral-800 w-[184px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78612b831987be56292fced087bf91a838ec5ea534b2e47b80c519bded8c1797?"
          className="self-center aspect-[1.75] fill-neutral-800 w-[30px]"
        />
        <div>Mark As Completed</div>
      </div>
      <div className="flex gap-5 justify-center self-stretch px-16 py-3 mt-3.5 w-full bg-zinc-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc88636afd6e2a5e27ccd9c8641703fc1607d1e8c470dbc1746ce1dd8bd2acb?"
          className="shrink-0 aspect-square fill-zinc-400 w-[26px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/46faae34a21e7ec2922d25917ff7e4b13350f3216684fa8fb469506ea6328cd3?"
          className="shrink-0 aspect-square w-[26px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b7fce561189b1aa6e48506e85760a01a710c8873fba6d41469f2b85aaa902b?"
          className="shrink-0 aspect-square fill-zinc-400 w-[26px]"
        />
      </div>
    </div>
  );
};

export default BookingDetails;
