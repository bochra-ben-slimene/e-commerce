import React from 'react'
import Navbar from '../components/Navbar'
import SubNav from '../components/SubNav'
import Lazy from '../components/Lazy'
import Contact from '../components/Contact'
import { c6 , c4 , c7 } from '../ressources'

export default function Home() {
    return (
        <>
            {/* Nav component*/}
            <Navbar />
            {/*carousel + sub nav */}
            <div id="carouselExample" className="carousel slide mb-5" data-bs-ride ="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={c4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c6} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c7} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='nav-menu'><SubNav /></div>
            </div>

            {/* carousel */}
           
            {/* text descrip section*/}
            {/* shop component*/}
            <Lazy />
            {/*info section */}
            {/* contact component*/}
            <div className='container contact_home my-5'> 
                <h1 className=' titre text-center my-4'>CONTACT</h1>
                 <Contact DB={"Feedback/"} />
            </div>
            {/* footer component*/}
        </>
    )
}
