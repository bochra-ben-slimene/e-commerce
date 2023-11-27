import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import AddWork from './AddWork';
import Orders from './Orders';
import Files from './Files';
import Inbox from './Inbox';
export default function Dashboard(props) {
    const {logout} = props;
    const [page,setPage] = useState(<AddWork />);
  return (
   <div className="dashboard">
  <ul className="nav justify-content-center border-bottom border-primary">
    <li className="nav-item">
    <Link to="/" className="nav-link active" aria-current="page" >
        <i className="bi bi-house" />
        home</Link>
    </li>
    <li className="nav-item">
    <button onClick={() =>setPage(<AddWork />)} className="nav-link">
      <i className="bi bi-bag-plus-fill"></i>add work</button>
    </li>
    <li className="nav-item">
    <button onClick={() =>setPage(<Inbox />)} className="nav-link" >
      <i className="bi bi-inbox"></i>Inbox</button>
    </li>
    <li className="nav-item">
    <Link onClick={() =>setPage(<Orders />)} className="nav-link">
      <i className="bi bi-bag"></i>orders</Link>
    </li>
    <li className="nav-item">
      <button onClick={() =>setPage(<Files />)} className="nav-link" >
      <i className="bi bi-file-earmark-arrow-down"></i>files 
      </button>
    </li>
    <button className='btn btn-link' onClick={logout}>
    <i className="bi bi-box-arrow-right"></i>Log out</button>
  </ul>
<div className='container'>
    {page}
</div>
</div>
  )
}
