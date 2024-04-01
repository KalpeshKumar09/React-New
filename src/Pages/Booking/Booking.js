import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
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
    const uncut = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      uncut();
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
            className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-10 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add User
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bookings &&
              bookings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <img
                      src={item.profile}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-2 font-bold">{item.name}</div>
                  </div>
                  <div className="flex justify-between">
                    {/* <button
                      onClick={() => navigate(`/update/${item.id}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Update
                    </button> */}
                    <button
                      onClick={() => handleModel(item)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      View
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
