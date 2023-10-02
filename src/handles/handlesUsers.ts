import { firestore } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(firestore, "users"), {
      nome: "Lovelace",
      capa: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(firestore, "users"));

  return querySnapshot;
};

export { addUser, getUsers };
