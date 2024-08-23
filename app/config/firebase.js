import { initializeApp } from "firebase/app";
import { addDoc } from "firebase"
import { products } from "@/data/asyncMock";

const firebaseConfig = {
  apiKey: "AIzaSyA6_qxy1jTI3AI2rkzWsC4rrZV_x2dSgoA",
  authDomain: "next-curs.firebaseapp.com",
  projectId: "next-curs",
  storageBucket: "next-curs.appspot.com",
  messagingSenderId: "174949241574",
  appId: "1:174949241574:web:9f6527bc640ab1efe1e127",
  measurementId: "G-45RQJ344MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

products.forEach((prod) => {
    addDoc(collection(db, "productos"), prod)
    .then((el) => console.log(`se agregó el producto id ${el.id}`))
    .catch((error) => console.log(error));
});