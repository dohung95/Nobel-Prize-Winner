import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {

    const confirmCall = (phoneNumber) => {
        const confirmMessage = `if you want to call this number +${phoneNumber}?`;
        if (window.confirm(confirmMessage)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }
    return (
        <>
        <div className="footer-dat ">
            <div className="row">
                <div className="col-md-2">
                    <img src={Logo} />
                </div>
                
                <div className="footer-dat-aboutus col-md-5">
                    <h2>About Us</h2>
                    <div style={{ textAlign: "left" }}>
                        This is a website about the biography of a person who won the Nobel Prize
                        in both Physics and Chemistry named Marie Curie.
                        <br />
                        <Link style={{textDecoration: 'none'}} to='/'>Read more...</Link>
                    </div>
                </div>
                <div className="footer-dat-contact col-md-5">
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