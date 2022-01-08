import { db } from "../firebase";
import {
  query,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  collection,
  Timestamp,
} from "firebase/firestore";

const worksRef = collection(db, "works");

const docRef = (id) => doc(db, "works", id);

async function getWorks() {
  try {
    let q = query(worksRef, orderBy("created", "desc"));
    let docsSnap = await getDocs(q);
    return docsSnap;
  } catch (err) {}
}

async function getById(id) {
  try {
    let docSnap = await getDoc(docRef(id));

    if (!docSnap.exists()) {
      throw new Error("No such doc");
    }
    return docSnap;
  } catch (err) {}
}

async function create(data) {
  try {
    await addDoc(worksRef, {
      ...data,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });
  } catch (err) {}
}

async function update(data, id) {
  try {
    await updateDoc(docRef(id), {
      ...data,
      updated: Timestamp.now(),
    });
  } catch (err) {}
}

async function deleteFromCollection(id) {
  try {
    await deleteDoc(docRef(id));
  } catch (err) {}
}

const works = {
  get: getWorks,
  getById,
  create,
  update,
  delete: deleteFromCollection,
};

export default works;
