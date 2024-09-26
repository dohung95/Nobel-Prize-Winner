import { Link } from "react-router-dom";
import BackHomeAndTop from "./BackHomeAndTop";
import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/navbar.css';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <BackHomeAndTop />
            <div align='center' className="header-logo-dat">
                <Link to='/'>
                    <img className="header-logo-dat-img" src={Logo} alt="Logo" />
                </Link>
            </div>
            <nav className="bg-color navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Biography'>BIOGRAPHY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Research'>RESEARCH</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Awards'>AWARDS AND HONORS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/SelectedWorks'>SELECTED WORKS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/References'>REFERENCES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Contact'>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;