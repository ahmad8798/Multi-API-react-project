
import React from 'react'
import "./nav.css"
import { NavLink, Outlet } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <h1 className="navbar-brand fs-5" href="#">APIs project</h1>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link fs-5 text-dark" aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='crypto' className="nav-link fs-5 text-dark" href="#">Cryptocurrency API</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='covid' className="nav-link fs-5 text-dark" href="#">Covid API</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to='quote' className="nav-link fs-5 text-dark" href="#">Quote</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='login' className="nav-link fs-5 text-dark" href="#">Login</NavLink>
                                </li>
                                
                                

                            </ul>

                        </div>
                    </div>

                </nav>
               
         

        </>
    )
}

