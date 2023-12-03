import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div className=" p-4">
            <h5 className="text-body-emphasis h4">E-commerce</h5>
            <span className="text-body-secondary"> welcom ! go to dashboard </span>
            <hr /> 
            <Link className='btn_dashbord' to="/Login">Admin Dashboard</Link>
            
          </div>
        </div>
        <nav className="navbar navbar-dark ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </div>

    </>
  )
}
