import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

const reportCollectionRef = collection(db, "reports");
class ReportDataService {
  addReports = (newReport) => {
    return addDoc(reportCollectionRef, newReport);
  };
}

export default new ReportDataService();
