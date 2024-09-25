import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/footer.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Footer = () => {
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
        return () => clearInterval(interval);}, 
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
            <div className="row">
                <div className="col-md-2">
                    <img src={Logo} />
                </div>
                
                <div className="footer-dat-aboutus col-md-4">
                    <h2>About Us</h2>
                    <div style={{ textAlign: "left" }}>
                        This is a website about the biography of a person who won the Nobel Prize
                        in both Physics and Chemistry named Marie Curie.
                        <br />
                        <Link to='/Contact' style={{textDecoration: 'none'}}>Read more...</Link>
                    </div>
                </div>
                <div className="footer-dat-contact col-md-4">
                    <h2>Contact</h2>
                    <div style={{ textAlign: "left" }}>
                        address:
                        <a href="https://maps.app.goo.gl/sfuG6bZqQdCBgsbe6" target="_blank"> 590 CMT8, P.11, Q.3, Ho Chi Minh city, VietNam</a>
                        <br />
                        phone number:
                        <a href="" onClick={() => confirmCall(842838803888)}> (028).3880.3888</a>
                        <br />
                        email:
                        <a href="mailto:tuvan@aptechsaigon.edu.vn"> tuvan@aptechsaigon.edu.vn</a>
                    </div>
                </div>
                <div className="footer-dat-timer col-md-2">
                    <h2>Timer</h2>
                    <div style={{ textAlign: "center", fontSize: "2rem" }}>
                       {hours}:{minutes}:{seconds}
                    </div>
                    <div className="footer-dat-timer-date">
                        {day}/{month}/{year}
                    </div>
                </div>
            </div> 
            <hr />
            <div>
                &copy; 2023, Nobel Prize Winner
            </div>
        </div>
        </>
    );
}

export default Footer;