import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";

export interface IBooks {
  capa: number;
  linkedUserId: string;
  nome: string;
}

const addBook = async () => {
  try {
    const docRef = await addDoc(collection(firestore, "teste"), {
      nome: "Teste de código",
      linkedUserId: "1",
      capa: 345,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getBooks = async (): Promise<IBooks[]> => {
  const querySnapshot = await getDocs(collection(firestore, "teste"));
  const books: any = [];

  querySnapshot.forEach((doc) => books.push(doc.data()));
  return books;
};

const updateBooks = async () => {
  const book = doc(firestore, "teste", "1");

  await updateDoc(book, {
    linkedUserId: 9,
  });
};

const getBookById = async (id: string) => {
  const book = doc(firestore, "teste", id);
  return book;
};

const deleteBooks = async (id: string) => {
  await deleteDoc(doc(firestore, "teste", id));
};

export { addBook, getBooks, updateBooks, getBookById, deleteBooks };
