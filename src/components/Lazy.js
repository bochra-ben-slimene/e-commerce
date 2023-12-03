import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { getDatabase, ref, onValue } from "firebase/database";
import auth from '../utils/firebaseConfig';
import { Link } from 'react-router-dom';
export default function Lazy() {
  const [cards, setCards] = useState(null);

  const getCards = () => {
    //* get cards from firbase
    //* save data into card state
    let authApp = auth;
    const db = getDatabase();
    const starCountRef = ref(db, '/MyProducts');
    onValue(starCountRef, (snapshot) => {
      const products = snapshot.val();
      let finalData = Object.entries(products);
      setCards(finalData)


    });

  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getCards();
  }, []);

  return (
    <div className=' card_produit_home container-fluid  row d-flex m-0 justify-content-center'>
      {cards &&
         cards.map((produit, index) => (
         
            <div key={index} data-aos= "fade-up" className="card m-2 p-0  col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src={produit[1].URL} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{produit[1].TITLE}</h5>
                <p className="card-text">{produit[1].DESC}</p>
                <p>{produit[1].Price} DT</p>
                <Link className="btn btn-success" to="/Card" state={{ data : produit[1] }} >
             Order now
            </Link>
              </div>
            </div>

        ))
      }
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