import Logoschool from "../Img/Dat/logo_school.png";
import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/footer.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const top = () => {
        document.documentElement.scrollTop = 0;
    }

    // confirm call
    const confirmCall = (phoneNumber) => {
        const confirmMessage = `if you want to call this number +${phoneNumber}?`;
        if (window.confirm(confirmMessage)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }

    // timer
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },
        []);
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const year = time.getFullYear();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <>
            <div className="footer-dat ">
                <div className="footer-dat-navbar row" style={{ backgroundColor: '#ffffff00', width: '100%', marginLeft: '0px' }}>
                    <div className="col-md-1 footer-dat-navbar" >
                        <Link onClick={top} to='/'>HOME</Link>
                    </div>
                    <div className="col-md-2 footer-dat-navbar">
                        <Link onClick={top} to='/Biography'>BIOGRAPHY</Link>
                    </div>
                    <div className="col-md-2 footer-dat-navbar">
                        <Link onClick={top} to='/Research'>RESEARCH</Link>
                    </div>
                    <div className="col-md-2 footer-dat-navbar">
                        <Link onClick={top} to='/Awards'>AWARDS AND HONORS</Link>
                    </div>
                    <div className="col-md-2 footer-dat-navbar">
                        <Link onClick={top} to='/SelectedWorks'>SELECTED WORKS</Link>
                    </div>
                    <div className="col-md-2 footer-dat-navbar">
                        <Link onClick={top} to='/References'>REFERENCES</Link>
                    </div>
                    <div className="col-md-1 footer-dat-navbar">
                        <Link onClick={top} to='/Contact' style={{ width: '30px' }}>CONTACT</Link>
                    </div>
                </div>
                <hr style={{ marginBottom: '30px', marginTop: '3px' }} />
                <div className="row">
                    <div className="col-md-2 footer-dat-logo">
                        <div className="footer-dat-logo_team" style={{paddingLeft:"6%"}}>
                            <img  src={Logo} />
                        </div>
                        <div className="footer-dat-logo_school">
                            <img  src={Logoschool} />
                        </div>
                    </div>

                    <div className="footer-dat-aboutus col-md-3">
                        <h2>About Us</h2>
                        <div style={{ textAlign: "left" }}>
                            This is a website about the biography of a person who won the Nobel Prize
                            in both Physics and Chemistry named Marie Curie.
                            <br />
                            <Link to='/Contact' style={{ textDecoration: 'none' }} onClick={top}>Read more...</Link>
                        </div>
                    </div>
                    <div className="footer-dat-contact col-md-4">
                        <h2>Contact</h2>
                        <div style={{ textAlign: "left" }}>
                            Address:
                            <a href="https://maps.app.goo.gl/sfuG6bZqQdCBgsbe6" target="_blank"> 590 CMT8, P.11, Q.3, Ho Chi Minh city, VietNam</a>
                            <br />
                            Phone number:
                            <a href="" onClick={() => confirmCall(842838803888)}> (028).3880.3888</a>
                            <br />
                            Email:
                            <a href="mailto:tuvan@aptechsaigon.edu.vn"> tuvan@aptechsaigon.edu.vn</a>
                        </div>
                    </div>
                    <div className="footer-dat-timer col-md-3">
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.690135679622!2d106.66560528225443!3d10.786511276411357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1727787860372!5m2!1svi!2s" 
                        width="100%" height="200px" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="footer-dat-time">
                            <div className="footer-dat-timer-date" style={{ textAlign: "right", fontSize: "1.2rem" }}>
                                {day}/{month}/{year}&nbsp;{hours}:{minutes}:{seconds}
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginBottom: '10px' }} />
                <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                    &copy; 2024, Nobel Prize Winner
                </div>
            </div>
        </>
    );
}

export default Footer;