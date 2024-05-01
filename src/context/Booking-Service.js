import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookingCollectionRef = collection(db, "bookings");
class BookingDataService {
  addBookings = (newBooking) => {
    return addDoc(bookingCollectionRef, newBooking);
  };

  updateBooking = (id, updatedBooking) => {
    const bookingDoc = doc(db, "bookings", id);
    return updateDoc(bookingDoc, updatedBooking);
  };

  deleteBooking = (id) => {
    const bookingDoc = doc(db, "bookings", id);
    return deleteDoc(bookingDoc);
  };

  getAllBookings = () => {
    return getDocs(bookingCollectionRef);
  };

  getBooking = (id) => {
    const bookingDoc = doc(db, "bookings", id);
    return getDoc(bookingDoc);
  };
}

export default new BookingDataService();
