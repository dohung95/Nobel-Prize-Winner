import { Form, Link } from "react-router-dom";
import BackHomeAndTop from "./BackHomeAndTop";
import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/navbar.css';
import icon from '../Img/Dat/icon.svg';
import React, { useState } from 'react';


const NavBar = () => {
    const [showList, setShowList] = useState(false);




    return (
        <div className="header-dat">
            <BackHomeAndTop />
            <div align='center' className="header-logo-dat">
                <Link to='/'>
                    <img className="header-logo-dat-img" src={Logo} />
                </Link>
            </div>
            <div className="header-navbar-dat-desktop row" style={{backgroundColor: '#ffffff00', width: '100%', marginRight: '10px'}}>
                <div className="col-md-1 header-navbar-dat-item" >
                    <Link to='/'>HOME</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link>BIOGRAPHY</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/Research'>RESEARCH</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/Awards'>AWARDS AND HONORS</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/SelectedWorks'>SELECTED WORKS</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link>REFERENCES ETC</Link>
                </div>
                <div className="col-md-1 header-navbar-dat-item">
                    <Link to='/Contact' style={{width: '30px'}}>CONTACT</Link>
                </div>
            </div>
            <div className="header-navbar-dat-mobile">
                <div style={{textAlign: 'center'}} >
                    <img src={icon} 
                        onClick={() => setShowList(!showList)}
                    />
                    {showList && (
                        <div className="list-navbar-dat-mobile row" style={{position: 'absolute', width: '100%', marginTop: '5px', marginLeft: '0px'}}>
                            <div className="col-md-6">
                                <h3 >About of Marie Curie</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link>BIOGRAPHY</Link>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link to='/Research'>RESEARCH</Link>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link to='/Awards'>AWARDS AND HONORS</Link>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link to='/SelectedWorks'>SELECTED WORKS</Link> 
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3>More</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link to='/'>HOME</Link>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link>REFERENCES ETC</Link>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: 'rgb(199, 199, 199)'}}>
                                        <Link to='/Contact' style={{width: '30px'}}>CONTACT</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default NavBar;