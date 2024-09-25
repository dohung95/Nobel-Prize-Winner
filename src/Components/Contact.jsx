import NavBar from "./Navbar";
import Footer from "./Footer";
import '../Css/Dat/contact.css'

const Contact = () => {

    return (
        <>
            <div>
                <NavBar />
            </div>
            
            <div className="contact-content-dat">
                <div>
                    <h1>About US</h1>
                    <p>

                    </p>
                </div>




                <div className="contact-content-dat-network">
                    <h2>Social Network</h2>

                </div>

                <div className="contact-content-dat-contact">
                    <h2>Contact Us</h2>
                </div>

                <div className="contact-content-dat-map">

                </div>
            </div>

            <div>
                <Footer />
            </div>
            
        </>
    )
}
export default Contact