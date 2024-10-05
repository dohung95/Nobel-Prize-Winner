import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Chart from './Chart';
import NavBar from './Navbar'
import Footer from './Footer'
import MoreNobel from './MoreNobel'
import MarieCurieChart from './Charttwo'
import h2 from "../Img/Van/slide/vochong.jpg"
import h3 from "../Img/Van/slide/vochongdapxe.png"
import h4 from "../Img/Van/slide/gia-dinh.jpg"
import h6 from "../Img/Van/slide/bamecon1.jpg"
import h8 from "../Img/Van/slide/bamecon.jpg"
import h9 from "../Img/Van/slide/irene-marie.jpg"
import h10 from "../Img/Van/slide/congaidaulong.png"
import h11 from "../Img/Van/slide/nghiencuu.jpg"
import h12 from "../Img/Van/slide/xechupdidong1915.jpg"
import h13 from "../Img/Van/slide/fiveyears.png"
import h14 from "../Img/Van/slide/con-irence.jpg"
import hinhquot2 from '../Img/Van/sotay/hinhquot2.png'
import '../Css/Van/Reference.css'
import '../Css/Van/slide_left_right.css'
import Figure from 'react-bootstrap/Figure';
import { useMediaQuery } from 'react-responsive';

import van_sach from '../Data/Van/van_sach.json'

const References = () => {
    // const images_run = [ h8, h9, h10, h11, h14, h4];

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
    const getImagePath = (imageName) => {
        return require(`../Img/Van/sotay/${imageName}`);
    };
    return (
        <>
            <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} >MARIE'S quote</h1>

            <div className='Van_khoibio_refer ' style={{ alignItems: 'center', paddingLeft: '20%', paddingTop: '2%' }}>
                <div className='Van-khoitron-quot' style={{ alignItems: 'center' }}>
                    <Figure>
                        <Figure.Image
                            width={300}
                            height={1}
                            alt="quot1"
                            src={hinhquot2} />
                        <Figure.Caption>
                            <span class="Van-quote-mark" >
                                <h2 style={{ color: 'white', fontStyle: 'italic' }}>
                                    Nothing in life is to be feared, it is only to be understood.
                                </h2>
                            </span>
                        </Figure.Caption>
                    </Figure>
                </div >
            </div>

            <div>
                <div className='container' style={{ color: 'white', borderBottom: '3px solid', margin: "5% auto  ", padding: '0px', borderTop: '3px solid', width: '80%' }}>
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
                    <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto" }} />
                    <hr style={{ borderTop: "2px solid white", margin: "0 auto 0", width: "70%" }} /> <br />

                </div>
            </div>

            <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} >MARIE'S book</h1>
            <div className='Van_khoibio_refer ' style={{ paddingLeft: '5%' }}>
                <div className="Van_refer_sach">
                    {isMobile ? (
                        <div className="Van_refer_sach ">
                            {van_sach.slice(0, 3).map((book) => (
                                <div key={book.id} className="Van_refer_book">
                                    <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                                    <h3 style={{ color: "white" }}>{book.title}</h3>
                                    <p style={{ color: 'white' }}>{book.author}</p>
                                    <p style={{ color: 'white' }}>{book.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : isTabletOrDesktop ? (                       
                        <div className="Van_refer_row">
                            {van_sach.slice(0, 3).map((book) => (
                                <div key={book.id} className="col" style={{ flex: '1 1 30%', margin: '0 10px' }}>
                                    <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                                    <h3 style={{ color: "white" }}>{book.title}</h3>
                                    <p style={{ color: "white" }}>{book.author}</p>
                                    <p style={{ color: "white" }}>{book.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div >

            <div>                
                <div className='container' style={{ color: 'white', borderBottom: '3px solid', margin: "5% auto  ", padding: '0px', borderTop: '3px solid', width: '80%' }}>
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
                    <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto" }} />
                    <hr style={{ borderTop: "2px solid white", margin: "0 auto ", width: "70%" }} /> <br />
                </div>
            </div>

            <div className="container mt-4">
                <h3 className="text-center mb-4" data-aos="fade-up" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }}>Some Videos About Marie Curie</h3>
                <div className="row">
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-right">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.britannica.com/biography/Marie-Curie/Death-of-Pierre-and-second-Nobel-Prize#/media/1/146871/218158"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-left">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/PeVaEPFFNYc?si=CE0pvXgAJ7I2trXF"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='container' style={{ color: 'white', borderBottom: '3px solid', margin: "5% auto  ", padding: '0px', borderTop: '3px solid', width: '80%' }}>
                <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
                <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
                <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto" }} />
                <hr style={{ borderTop: "2px solid white", margin: "0 auto ", width: "70%" }} /> <br />

            </div>

            <MarieCurieChart />

        </>
    );
}

export default References;