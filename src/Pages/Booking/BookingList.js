import React from "react";

const BookingList = ({
  open,
  setOpen,
  onClose,
  id,
  handleDelete,
  date,
  service,
  address,
  concern,
  additionalDetails,
  petName,
  breed,
  age,
}) => {
  return (
    <div
      className=" absolute flex flex-col py-8  max-md:px-5"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <div className="place-self-end">
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        <button
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
      <div className="ml-5 max-md:ml-10 max-md:max-w-full px-6">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-16 py-8 w-full bg-white rounded-md shadow-2xl text-zinc-700 max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="mt-7 mr-2.5 text-sm whitespace-nowrap">
                Booking Number:PETCARE-123456
              </div>
              <div className="mt-7 text-sm font-medium">Date and Time</div>
              <div className="mt-3.5 text-sm whitespace-nowrap">{date}</div>
              <div className="mt-5 text-sm font-medium">Contact Details:</div>
              <div className="flex gap-3 justify-between mt-6 text-sm whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/016db9d0bc17d48807449f6d6e5d5e824f2075687ffe7b2cc2d758a9ba06b0b1?"
                  className="self-start w-5 aspect-[1.25]"
                />
                <div className="flex-auto ">{email}</div>
              </div>
              <div className="flex gap-2.5 justify-between mt-4 text-sm whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a6d939b0ad1e2a01076ed5e0b42bf3634201bc3d84eee989c8356c7880274?"
                  className="w-4 aspect-[0.64] stroke-[2px] stroke-zinc-700"
                />
                <div className="flex-auto my-auto">{mobileNo}</div>
              </div>
              <div className="flex gap-3 self-start mt-3.5 text-sm whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25275e1c6110c576ad0ae57dae4c2dd96212b28d7e3ebab4d919d4d2430428f8?"
                  className="w-5 aspect-[0.63]"
                />
                <div className="self-start mt-2.5">{location}</div>
              </div>
              <div className="mt-8 text-sm font-medium">Allergies:</div>
              <div className="justify-center px-14 py-1.5 mt-5 text-sm whitespace-nowrap border border-green-600 border-solid max-md:px-5">
                None
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-2 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col py-6 pr-20 pl-7 bg-white rounded-md shadow-2xl max-md:px-5 max-md:max-w-full">
                <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-lg font-medium text-zinc-700 max-md:mt-10">
                        <div className="text-base font-semibold">
                          Service Details:
                        </div>
                        <div className="mt-4 text-sm">
                          Service: <span className="">{service}</span>
                        </div>
                        <div className="mt-6 text-sm">Date and Time</div>
                        <div className="mt-3.5 whitespace-nowrap text-sm">
                          {date}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-10 text-lg font-medium text-zinc-700 max-md:mt-10">
                        <div className="text-sm">
                          Address: <span className="text-sm">{address}</span>
                        </div>
                        <div className="mt-6 text-sm">
                          Payment Status: <span className="text-sm">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mr-6 text-sm font-medium text-red-500 max-md:mr-2.5 max-md:max-w-full">
                  Concern:{" "}
                  <span className="font-semibold text-red-500 text-sm">
                    {concern}
                  </span>
                </div>
                <div className="mt-5 mr-6 text-sm font-medium text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                  Additional Details:{" "}
                  <span className="text-sm">{additionalDetails}</span>
                </div>
              </div>
              <div className="flex flex-col items-start py-6 pr-20 pl-4 mt-3 bg-white rounded-md shadow-2xl max-md:pr-5 max-md:max-w-full">
                <div className="max-w-full w-[840px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                        <div className="text-base font-semibold">
                          Pet Details:
                        </div>
                        <div className="mt-7 text-sm">Pet Name</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          {petName}
                        </div>
                        <div className="mt-7 text-zinc-800 text-sm">Breed</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          {breed}
                        </div>
                        
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-11 text-base font-medium text-zinc-700 max-md:mt-10">
                        <div>Species</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          {species}
                        </div>
                        <div className="mt-7">Age</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          {age}
                        </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
