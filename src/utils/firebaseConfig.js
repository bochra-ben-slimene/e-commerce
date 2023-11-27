import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEk9mP6PmK1KjqxI3X-r8Olp1T9Tf8eJg",
  authDomain: "e-comerce-react-be90b.firebaseapp.com",
  databaseURL: "https://e-comerce-react-be90b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-comerce-react-be90b",
  storageBucket: "e-comerce-react-be90b.appspot.com",
  messagingSenderId: "169813507584",
  appId: "1:169813507584:web:96e25bb10cc4f58486a2e5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;