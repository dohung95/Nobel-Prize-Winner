import NavBar from "./Navbar";
import Footer from "./Footer";
import '../Css/Dat/contact.css'
import icon_youtube from '../Img/Dat/youtube.png'
import icon_website from '../Img/Dat/world-wide-web.png'
import icon_facebook from '../Img/Dat/facebook.png'
import icon_tiktok from '../Img/Dat/tiktok.png'

const Contact = () => {
    // confirm call
    const confirmCall = (phoneNumber) => {
        const confirmMessage = `if you want to call this number +${phoneNumber}?`;
        if (window.confirm(confirmMessage)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }



    return (
        <>
            <div>
                <NavBar />
            </div>
            
            <div className="contact-content-dat" style={{margin: '5%'}}>
                <div className="contact-content-dat-about">
                    <h1>About US</h1>
                    <p style={{paddingLeft: '30px'}}>
                    This is a website about the biography of Marie Curie, who won two Nobel prizes in two different fields: 
                    Nobel Prize in Physics in 1903 with her husband and Nobel Prize in Chemistry in 1911.
                    </p>
                </div>

                <div className="row" style={{}}>
                    <div  className="contact-content-dat-network col-md-4">
                        <h2 align="center" style={{marginBottom: '20px'}}>Social Network</h2>
                        <div className="network">
                            <a target="_blank" className="network-website" href="https://aptech.fpt.edu.vn/?fbclid=IwY2xjawFg98dleHRuA2FlbQIxMAABHdo9XENpm8qTmU9GIZk6NvgEWf3g4lBpi2lB9PaTOVyLDy4buH-Zzb-O0A_aem_JYi65L0_SgA5MS8LK-h5QA">
                                <img src={icon_website} />
                            </a>
                            <div className="overlay-text">
                               CLICK GO TO THE WEBSITE
                            </div>
                        </div>

                        <div className="network">
                            <a target="_blank" className="network-facebook" href="https://www.facebook.com/aptech.fpt">
                                <img src={icon_facebook} />
                            </a>
                            <div className="overlay-text">
                            CLICK GO TO THE FACEBOOK
                            </div>
                        </div>

                        <div className="network">
                            <a target="_blank" className="network-titok" href="https://www.tiktok.com/@fptaptechofficial?is_from_webapp=1&sender_device=pc">
                                <img src={icon_tiktok} />
                            </a>
                            <div className="overlay-text">
                            CLICK GO TO THE TIKTOK
                            </div>
                        </div>

                        <div className="network">
                            <a target="_blank" className="network-youtube" href="https://www.youtube.com/@laptrinhfptaptech/">
                                <img src={icon_youtube} />
                            </a>
                            <div className="overlay-text">
                            CLICK GO TO THE YOUTUBE
                            </div>
                        </div>
                    </div>

                    <div className="contact-content-dat-contact col-md-4">
                        <h2 style={{marginBottom: '20px'}} align="center">Contact Us</h2>
                        <div >
                            <br />
                                ADDRESS: 
                            <a href="https://maps.app.goo.gl/sfuG6bZqQdCBgsbe6" target="_blank"> 590 CMT8, P.11, Q.3, Ho Chi Minh city, VietNam</a>
                            <br /> <br />
                                PHONE NUMBER: 
                            <a href="" onClick={() => confirmCall(842838803888)}> (028).3880.3888</a>
                            <br /> <br />
                                EMAIL: 
                            <a href="mailto:tuvan@aptechsaigon.edu.vn"> tuvan@aptechsaigon.edu.vn</a>
                        </div>
                        
                    </div>

                    <div className="contact-content-dat-map col-md-4" align="right">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.8313756314764!2d106.6656105!3d10.7863627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac37c5025%3A0xd5fab66e51e1049d!2zTeG7uSB0aHXhuq10IMSRYSBwaMawxqFuZyB0aeG7h24gRlBUIEFyZW5h!5e0!3m2!1svi!2s!4v1727270759189!5m2!1svi!2s" width="100%" height="450px" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                
                <div style={{padding: '20px 0 0 0'}}>
                    <dl>
                        <dt><h2>Group 1 with the theme "NOBEL Prize winners" includes the following members:</h2></dt>
                        <div style={{paddingLeft: '50px', fontSize: '24px', fontFamily: 'fantasy'}}>
                            <dd className="hung">mr. Do Thanh Hung</dd>
                                <dd className="hidden-text">leader</dd>   

                            <dd className="van">ms. Dang Le Phuong Van</dd>
                                <dd className="hidden-text">leader</dd>

                            <dd className="dat">mr. Do Thanh Hung</dd>
                                <dd className="hidden-text">leader</dd>

                            <dd className="dat">mr. Le Quoc Dat</dd>
                                <dd className="hidden-text">leader</dd>

                            <dd className="huy">mr. Phu Vinh Huy</dd>
                                <dd className="hidden-text">leader</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div>
                <Footer />
            </div>
            
        </>
    )
}
export default Contact