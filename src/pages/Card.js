import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Contact from '../components/Contact';
export default function Card() {

  let { state } = useLocation();
  // console.log(state && state)
  const { TITLE, Price , DESC , URL } = state["data"]; //* destruction
  return (
    <div className='d-flex justify-content-center container'>
      <div className='card'>
        <img src={URL} className='img-fluid' alt="..." />
        <div className='card-body'>
          <h5 className='card-title' > {TITLE}</h5>
          <p className='card-text'>{DESC} </p>
          <p className='card-text'><small className='text-body-secondary'>
            {Price} DT</small>
          </p>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo">
              place an order</button>

            {/* <button className='btn btn-success' id="exampleModal" >place an order</button> */}
          </div>

        </div>
        <div className='card-footer'>
          <Link to="/">Retourn to home page</Link>
        </div>






      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">place an order for :{TITLE}{" "}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <Contact   order={{TITLE,Price}} DB={"Orders/"}/>

              </div>
              <h3 className='text-success ms-2'>
                price: <span className='text-dark'>{Price}</span>
              </h3>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}
