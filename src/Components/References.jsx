import NavBar from './Navbar'
import Footer from './Footer'
import h1 from "../Img/Van/slide/marie-curie-15.jpg"
import h2 from "../Img/Van/slide/vochong.jpg"
import h3 from "../Img/Van/slide/vochongdapxe.png"
import h4 from "../Img/Van/slide/gia-dinh.jpg"
import h5 from "../Img/Van/slide/bamecon-nho.jpg"
import h6 from "../Img/Van/slide/bamecon.jpg"
import h7 from "../Img/Van/slide/chiem.png"
import h8 from "../Img/Van/slide/chong.jpg"
import h9 from "../Img/Van/slide/irene-marie.jpg"
import h10 from "../Img/Van/slide/congaidaulong.png"
import h11 from "../Img/Van/slide/nghiencuu.jpg"
import h12 from "../Img/Van/slide/eve.jpg"
import h13 from "../Img/Van/slide/nho.png"
import h14 from "../Img/Van/slide/con-irence.jpg"
import h15 from "../Img/Van/slide/gia.png"
import '../Css/Van/Reference.css'
const References = () => {
    return (
        <>
         <div >
                <NavBar />
            </div>
            <h1>Galary</h1>
            <div className="container">
                <div className="gallery " >
                    <img src={h3} alt="" className="col-4" />
                    <img src={h6} alt="" className="col-4" />
                    <img src={h13} alt="" className="col-4" />
                
                    <img src={h15} alt="" className="col-4" />
                    <img src={h5} alt="" className="col-4" />
                    <img src={h2} alt="" className="col-4" />

                    <img src={h7} alt="" className="col-4" />
                    <img src={h8} alt="" className="col-4" />
                    <img src={h9} alt="" className="col-4" />

                    <img src={h10} alt="" className="col-4" />
                    <img src={h1} alt="" className="col-4" />
                    <img src={h12} alt="" className="col-4" />

                    <img src={h11} alt="" className="col-4" />
                    <img src={h14} alt="" className="col-4" />
                    <img src={h4} alt="" className="col-4" />
                </div>
            </div>

            <h1>Youtube</h1>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default References;