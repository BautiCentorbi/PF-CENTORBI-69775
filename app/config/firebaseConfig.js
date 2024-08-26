import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6_qxy1jTI3AI2rkzWsC4rrZV_x2dSgoA",
    authDomain: "next-curs.firebaseapp.com",
    projectId: "next-curs",
    storageBucket: "next-curs.appspot.com",
    messagingSenderId: "174949241574",
    appId: "1:174949241574:web:9f6527bc640ab1efe1e127",
    measurementId: "G-45RQJ344MN"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
console.log('Conectando a Firebase')

// products.forEach(async (prod) => {
//   addDoc(collection(db, 'productos'), prod)
//   .then((el) => console.log(`Se agregó el producto nº ${el.id}`))
//   .catch((el) => console.log(`Ocurrió un error agregando el producto nº ${el.id}`))
// })

export default firebaseConfig