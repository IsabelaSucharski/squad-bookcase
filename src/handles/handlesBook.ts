import { firestore } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const addBook = async () => {
  try {
    const docRef = await addDoc(collection(firestore, "teste"), {
      nome: "Lovelace",
      capa: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getBooks = async () => {
  const querySnapshot = await getDocs(collection(firestore, "teste"));

  return querySnapshot.forEach((element) => {
    console.log(element.data());
  });
};

export { addBook, getBooks };
