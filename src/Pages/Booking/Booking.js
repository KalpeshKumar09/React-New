import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";


const Booking = () => {
  const [bookings, setBookings] = useState([]);
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
      <div>
        <AddBooking/>
        <div>
          <div>
            {bookings &&
              bookings.map((item) => (
                <div key={item.id}>
                  <div>
                    <div>
                      <img src={item.img} alt="" />
                      <div>{item.name}</div>
                    </div>
                    <div>
                      <button onClick={() => navigate(`/update/${item.id}`)}>
                        Update
                      </button>
                      <button onClick={() => handleModel(item)}>View</button>
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
