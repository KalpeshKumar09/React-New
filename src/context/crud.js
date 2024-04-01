import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";


const bookingCollectionRef = collection(db, "bookings");

class BookingDataService {
  addBookings = (newBooking) => {
    return addDoc(bookingCollectionRef, newBooking);
  }

  updateBooking = (id, updateBooking) => {
    const bookingDoc = doc(db, "bookings", id);
    return updateDoc(bookingDoc, updateBooking)
  }

  deleteBooking = (id) => {
    const bookingDoc = doc(db, "bookings", id);
    return deleteDoc(bookingDoc)
  }

  getAllBooking = () => {
    return getDoc(bookingCollectionRef);
  }

  getBooking = (id) => {
    const bookingDoc = doc(db, "bookings", id);
    return getDocs(bookingDoc)
  }
}

export default new BookingDataService();