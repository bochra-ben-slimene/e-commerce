import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import { getDatabase, ref, onValue } from "firebase/database";
import auth from '../utils/firebaseConfig';
export default function Lazy() {
const [cards,setCards] = useState(null);

const getCards = () => {
  //* get cards from firbase
  //* save data into card state
  let authApp = auth;
  const db = getDatabase();
  const starCountRef = ref(db,'/prod1');
  onValue (starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    setCards(data);
  });
}

useEffect(() => {
  Aos.init({duration : 2000});
  getCards();
}, []);

  return (
    <div>
      lazy
    </div>
  )
}



























// const getCards = () => {
//   let authApp = auth;
//   const db = getDatabase();
//   const data = ref(db,'/prod1');
//   onValue(data, (i) => {
//     const x = i.val();
//     console.log(x);
//     setCards(x);