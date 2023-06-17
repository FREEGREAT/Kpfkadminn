import { collection } from "@firebase/firestore";
import { db } from "../config/firebase";

export const subjectCollectionRef = collection(db, 'kpfk')