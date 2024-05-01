import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

const contactCollectionRef = collection(db, "contacts");
class ContactDataService {
  addContacts = (newContact) => {
    return addDoc(contactCollectionRef, newContact);
  };
}

export default new ContactDataService();
