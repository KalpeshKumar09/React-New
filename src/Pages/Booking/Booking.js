/* import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModel = (item) => {
    setOpen(true);
    setBooking(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that booking")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter((booking) => booking.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen ">
        <div className="flex flex-col">
          <button
            className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Booking
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div>
          <div className=" absolute grid px-4   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bookings &&
              bookings.map((item) => (
                <div
                  key={item.id}
                  className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700"
                >
                  <div className="flex flex-col justify-between items-center mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className="w-40 h-40 rounded-t-lg"
                    />
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                  <div className="p-1">
                    <button
                      onClick={() => handleModel(item)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                  {open && (
                    <BookingList
                      open={open}
                      setOpen={setOpen}
                      handleDelete={handleDelete}
                      {...booking}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
 */

/* import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModel = (item) => {
    setOpen(true);
    setBooking(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that booking")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter((booking) => booking.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen">
        <div className="flex flex-col">
          <button
            className="self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Booking
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mx-4">
          {bookings.map((item) => (
            <div
              key={item.id}
              className="max-w-sm p-4 bg-zinc-600 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col justify-between items-center mb-4">
                <img
                  src={item.img}
                  alt=""
                  className="w-40 h-40 rounded-t-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h3>
              </div>
              <div className="p-1">
                <button
                  onClick={() => handleModel(item)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  View Details
                  <svg
                    className="w-3.5 h-3.5 ms-2 transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 010-2h8.586L9.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {open && (
                <BookingList
                  open={open}
                  setOpen={setOpen}
                  handleDelete={handleDelete}
                  {...booking}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking; */

/* import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModel = (item) => {
    setOpen(true);
    setBooking(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that booking")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter((booking) => booking.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen">
        <div className="flex flex-col">
          <button
            className="self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Booking
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mx-0 bg-gray-950 ">
            {bookings.map((item) => (
              <div key={item.id} className="">
                <div className="flex flex-col py-3.5 pr-9 pl-3.5 mt-3.5 w-full rounded-lg bg-zinc-500 max-w-[280px] text-neutral-800">
                  <div className="flex gap-5 justify-between">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs">Upcoming</div>
                  </div>
                  <div className="mt-4 text-xs font-medium">Booking Slot</div>
                  <div className="mt-2 text-xs text-zinc-700">{item.data}</div>
                  <div className="shrink-0 mt-1.5 h-px bg-white border border-white border-solid" />
                  <div className="mt-2 text-sm text-zinc-700">
                    {item.address}
                  </div>
                  <div className="mt-3 text-xs text-zinc-400">
                    Received 20 minutes Ago
                  </div>
                  <div className="px-1 py-2">
                    <button
                      onClick={() => handleModel(item)}
                      className="inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      View Details
                    </button>
                    {open && (
                      <BookingList
                        open={open}
                        setOpen={setOpen}
                        handleDelete={handleDelete}
                        {...booking}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
 */

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModel = (item) => {
    setSelectedBooking(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that booking")) {
      try {
        setSelectedBooking(null);
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter((booking) => booking.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen">
        <div className="flex flex-col">
          <button
            className="self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Booking
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mx-4">
          {bookings.map((item) => (
            <div
              key={item.id}
              className="max-w-sm p-4 bg-zinc-600 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col justify-between items-center mb-4">
                <img
                  src={item.img}
                  alt=""
                  className="w-40 h-40 rounded-t-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h3>
              </div>
              <div className="p-1">
                <button
                  onClick={() => handleModel(item)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  View Details
                  <svg
                    className="w-3.5 h-3.5 ms-2 transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 010-2h8.586L9.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {selectedBooking && selectedBooking.id === item.id && (
                <BookingList
                  key={selectedBooking.id}
                  open={true}
                  handleDelete={handleDelete}
                  {...selectedBooking}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking;
