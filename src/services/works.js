import { db } from "../firebase";
import {
  query,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  collection,
  Timestamp,
  where,
  limit,
} from "firebase/firestore";

const worksRef = collection(db, "works");

const docRef = (id) => doc(db, "works", id);

function getWorks() {
  let q = query(worksRef, orderBy("created", "desc"));
  return getDocs(q);
}

function getByTitle(title) {
  let q = query(worksRef, where("title", "==", title), limit(1));
  return getDocs(q);
}

function create(data) {
  return addDoc(worksRef, {
    ...data,
    created: Timestamp.now(),
    updated: Timestamp.now(),
  });
}

function update(data, id) {
  return updateDoc(docRef(id), {
    ...data,
    updated: Timestamp.now(),
  });
}

function deleteFromCollection(id) {
  return deleteDoc(docRef(id));
}

const works = {
  get: getWorks,
  getByTitle,
  create,
  update,
  delete: deleteFromCollection,
};

export default works;
