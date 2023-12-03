import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Aos from 'aos';

import Swal from 'sweetalert2';



export default function Orders() {

  const [allOrders, setAllOrders] = useState(null);
  const getAllOrders = () => {
    const db = getDatabase();
    const data = ref(db, "/Orders");
    //* start req
    onValue(data, (i) => {
      const products = i.val();
      let finalData = Object.entries(products);
      setAllOrders(finalData)
    });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getAllOrders();
  }, []);

const db = getDatabase();
  const DealetOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        let orderRef = ref(db, 'Orders/' + id);
        remove(orderRef)
      }
    });
  }


  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {allOrders &&
        allOrders.map((order, index) => (
          <div
            data-aos="fade-up"
            className="card mb-3"
            style={{ width: "18rem" }}
            key={index}
          >
            <div className='d-flex justify-content-between'>
              <h5 className='ms-5'> N <sup>o</sup> : {index}</h5>
              <h5 className='text-danger'> <button onClick={() => DealetOrder(order[0])} className='btn btn-danger'>X</button></h5>
            </div>
            <div className="card-body">
              <h5 className="card-title"><span className='text-primary'>TITLE :</span> {order[1]['ORDER'].TITLE}</h5>
              <h5 className="card-title"><span className='text-primary'>PRICE :</span> {order[1]['ORDER'].Price}</h5>
              <h5 className="card-title"><span className='text-primary'>USER :</span> {order[1].NAME + " " + order[1].LASTNAME}</h5>
              <h5 className="card-title"><span className='text-primary'>PHONE :</span> {order[1].PHONE}</h5>
            </div>

          </div>
        ))}
    </div>
  )
}
