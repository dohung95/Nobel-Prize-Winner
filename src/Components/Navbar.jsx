import { Link, useLocation } from "react-router-dom";
import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/navbar.css';
import React, { useRef, useState, useEffect } from 'react';
import Viewer from './viewer';

const NavBar = () => {
    const [showHeader, setShowHeader] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navRef = useRef(null);
    const buttonRef = useRef(null); 

    const top = () => {
        window.scroll ({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleClickOutside = (event) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            const navElement = document.getElementById('navbarSupportedContent');
            if (navElement.classList.contains('show')) {
                const bsCollapse = new window.bootstrap.Collapse(navElement, { toggle: false });
                bsCollapse.hide();
            }
        }
    };

    const closeMenu = () => {
        const navElement = document.getElementById('navbarSupportedContent');
        if (navElement.classList.contains('show')) {
            const bsCollapse = new window.bootstrap.Collapse(navElement, {
                toggle: false
            });
            bsCollapse.hide();
        }
    };

    useEffect(() => {
        closeMenu();
    }, [location]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);






    const handleScroll = () => {
    // function to run header show hide event
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setShowHeader(false);
        } 
        else {
        setShowHeader(true);
        }
        setLastScrollY(currentScrollY); 
        };
    
    // effect to run header show hide event
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [lastScrollY]);

    return (
        <div className={`header-dat ${showHeader ? 'visible' : 'hidden'}`} style={{ backgroundColor: 'rgb(88, 85, 85)', color: 'white'}}>
            <nav className="bg-color navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to='/' onClick={top}>
                        <img className="header-logo-dat-img" src={Logo} alt="Logo" />
                    </Link>
                    <button ref={buttonRef} class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation" style={{border: 'none'}}>
                        <span style={{border: 'none'}} class="navbar-toggler icon"></span>
                    </button>
                    <div ref={navRef} className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" aria-current="page" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/Biography'>BIOGRAPHY</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/Research'>RESEARCH</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/Awards'>AWARDS AND HONORS</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/SelectedWorks'>SELECTED WORKS</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/References'>REFERENCES</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={top} className="nav-link" to='/Contact'>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <Viewer className="header-viewer-dat"/>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;