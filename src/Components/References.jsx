import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

import '../Css/Van/Reference.css'
import '../Css/Van/slide_left_right.css'
import Figure from 'react-bootstrap/Figure';
import { useMediaQuery } from 'react-responsive';

import Charttimeline from '../Components/Charttimeline'
import van_sach from '../Data/Van/van_sach.json'
import MoreMarieSecond from './MoreMarieSecond';

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
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    return (
        <>


            <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' white', borderRadius: '1000px', color: 'black', marginTop: '3%' }} id='Book_Van'>MARIE'S book</h1>
            <div className='Van_khoibio_refer ' style={{ paddingLeft: '5%' }}>
                <div className="Van_refer_sach">
                    {isMobile ? (
                        <div className=" Van_refer_sach ">
                            {van_sach.slice(0, 6).map((book) => (
                                <div key={book.id} className=" Van_refer_book">
                                    <div align='center'>
                                        <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                                    </div>
                                    <h3 style={{ color: "white" }}>{book.title}</h3>
                                    <p style={{ color: 'white' }}>{book.author}</p>
                                    <p style={{ color: 'white' }}>{book.description}</p>
                                </div>

                            ))}
                        </div>
                    ) : isTabletOrDesktop ? (
                        <div className="container mt-5 Van_refer_row">
                            <div className="row"  >
                                {van_sach.slice(0, 6).map((book) => (
                                    <div key={book.id} className="col-md-4 Van_refer_book" style={{ flex: '1 1 30%' }}>
                                        <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                                        <h3 style={{ color: "white" }}>{book.title}</h3>
                                        <p style={{ color: "white" }}>{book.author}</p>
                                        <p style={{ color: "white" }}>{book.description}</p>
                                    </div>

                                ))}
                            </div>
                        </div>


                    ) : null}
                </div>
            </div >


            <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' white', borderRadius: '1000px', color: 'black', marginTop: '3%' }} id='Video_Van'>Some Videos About Marie Curie</h1>
            <div className="container mt-4">
               
                <div className="row">
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-right">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r4jCTiGSuwU?si=y6AzrzjKG54n58li" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                <div className="row">
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-right">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1o35t1DfXCE?si=7Af1pp9br0eSUjU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HhBEqybCs4Q?si=k9dxvPqDmHQd1Ety" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>


            
            <h1 className="text-center mb-4" data-aos="fade-up" style={{ backgroundColor: ' white', borderRadius: '1000px', color: 'black' }}>An overview of the difficulties and successes in Marie Curie's life.</h1>
            <div className='container'style={{ padding: '3%' }}>
                <Charttimeline />
            </div>
            <div id='Link_Van' >
                <MoreMarieSecond />
            </div>

            </div>
            <div className='container' style={{ color: 'white', borderBottom: '3px solid', margin: "5% auto  ", padding: '0px', borderTop: '3px solid', width: '80%' }}>
                <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
                <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
                <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto" }} />
                <hr style={{ borderTop: "2px solid white", margin: "0 auto ", width: "70%" }} /> <br />

            </div>

        </>
    );
}

export default References;