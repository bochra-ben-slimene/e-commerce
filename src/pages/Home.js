import React from 'react'
import Navbar from '../components/Navbar'
import SubNav from '../components/SubNav'
import Lazy from '../components/Lazy'
import Contact from '../components/Contact'
import { c1, c2, c3 } from '../ressources'

export default function Home() {
    return (
        <>
            {/* Nav component*/}
            <Navbar />
            {/*carousel + sub nav */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={c1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c3} className="d-block w-100" alt="..." />
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
            <Contact />
            {/* footer component*/}
        </>
    )
}
