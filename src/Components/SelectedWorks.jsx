import Data from '../Data/Hung/data.json'
import Data2 from '../Data/Hung/data2.json'
import '../Css/Hung/Css_Hung.css'
import medal from '../Img/Hung/Nobel_Prize.png'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from 'react';
const SelectedWorks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

    }, []);
    const path = process.env.PUBLIC_URL;
    const NP1 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Maria_Goeppert_Mayer';
    };
    const NP2 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Dorothy_Hodgkin';
    };
    const NP3 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Rosalyn_Sussman_Yalow';
    };
    const NP4 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Rita_Levi-Montalcini';
    };
    const NP5 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Gertrude_B._Elion';
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
            <div style={{ backgroundColor: "rgb(21,21,21)", color: "white" }}>
                <br />
                <div className='row' style={{ padding: "0% 6% 3% 6%", '--bs-gutter-x': 'none' }}>
                    <div className='col-md-4 content_Hung' style={{ padding: "0% 0% 1% 1%" }}>
                        <b>Contents:</b> <br />
                        <a href="#NB1" style={{ paddingLeft: "2%" }}>1. Marie Curie, her husband and Becquerel discovered radioactivity</a><br />                       
                        <a href="#NB2"style={{ paddingLeft: "2%" }}>2. Discovery of polonium and radium</a> <br />                   
                        <a href="#vitri3"style={{ paddingLeft: "2%" }}>3.Impact of Her Nobel Prizes on Science & Society</a><br />
                        <a href="#vitri2T1"style={{ paddingLeft: "6%" }}>- Open up new perspectives</a><br />
                        <a href="#vitri2T2"style={{ paddingLeft: "6%" }}>- In real life and medicine</a><br />
                        <a href="#vitri2T3"style={{ paddingLeft: "6%" }}>- On a social level</a>
                    </div>
                    <div className='col-md-8 bg_title' align='center'>
                        <br /><h1 data-aos="fade-right" className='shadow_text'> Two great studies</h1>
                    </div>

                </div>

                <div >

                    <div data-aos="fade-right">
                        <div style={{ padding: "0% 6% 3% 6%" }} >
                            <h3 className='shadow_text' id='NB1'><img src={medal} width={35} className='Nobel_Hung' /> {Data[0].nobel}</h3>
                            <div className='Khoidiv row' >
                                <div className='col-md-6' data-aos="fade-right" >
                                    <div align='center' style={{ paddingTop: '2%' }} >
                                        <h4 className='shadow_text' >Research Process</h4>
                                        <div style={{ textAlign: "left", color: "white" }}>
                                            <ul>
                                                <li danhmuc="♔ .">{Data[0].textR1}</li>
                                                <li danhmuc="♔ .">{Data[0].textR2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <img src={`${path}${Data[0].imgR}`} className='SizeImg_Hung' />
                                        <div><b>{Data[0].textImgR}</b></div>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-right">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <h4 className='shadow_text' >{Data[0].textProcess}</h4>
                                        <div style={{ textAlign: "left" }}>
                                            <ol>
                                                <li danhmuc="1.">{Data[0].textP1}</li>
                                                <li danhmuc="2.">{Data[0].textP2}</li>
                                                <li danhmuc="3.">{Data[0].textP3}</li>
                                                <li danhmuc="4.">{Data[0].textP4}</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <a href={`${Data[0].urlWebImgP}`} target='new'>
                                            <img src={`${path}${Data[0].imgP}`} className='SizeImg_Hung' />
                                        </a>
                                        <div><b>{Data[0].textImgP}</b></div>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-right">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <h4 className='shadow_text'>Applications</h4>
                                        <div style={{ textAlign: "left" }}>
                                            <ul>
                                                <li danhmuc="🜲 .">{Data[0].textA1}</li>
                                                <li danhmuc="🜲 .">{Data[0].textA2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                        <a href={`${Data[0].urlWebImgA1}`} target='new'>
                                            <img src={`${path}${Data[0].imgA1}`} className='SizeImg_Hung1' />
                                        </a>
                                        <div><b>{Data[0].textImgA1}</b></div>
                                    </div>
                                    <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                        <a href={`${Data[0].urlWebImgA2}`}>
                                            <img src={`${path}${Data[0].imgA2}`} className='SizeImg_Hung1' />
                                        </a>
                                        <div><b>{Data[0].textImgA2}</b></div>
                                    </div>
                                </div>
                                <div>
                                    <br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right">
                        <div style={{ padding: "0% 6% 3% 6%" }} >
                            <h3 className='shadow_text' id='NB2'><img src={medal} width={35} className='Nobel_Hung' /> {Data[1].nobel}</h3>
                            <div className='Khoidiv row'>
                                <div className='col-md-6' data-aos="fade-right" >
                                    <div align='center' style={{ paddingTop: '2%' }} >
                                        <h4 className='shadow_text' >Research Process</h4>
                                        <div style={{ textAlign: "left", color: "white" }}>
                                            <ul>
                                                <li danhmuc="♔ .">{Data[1].textR1}</li>
                                                <li danhmuc="♔ .">{Data[1].textR2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <img src={`${path}${Data[1].imgR}`} className='SizeImg_Hung' />
                                        <div><b>{Data[1].textImgR}</b></div>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-right">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <h4 className='shadow_text' >{Data[1].textProcess}</h4>
                                        <div style={{ textAlign: "left" }}>
                                            <ol>
                                                <li danhmuc="1.">{Data[1].textP1}</li>
                                                <li danhmuc="2.">{Data[1].textP2}</li>
                                                <li danhmuc="3.">{Data[1].textP3}</li>
                                                <li danhmuc="4.">{Data[1].textP4}</li>
                                            </ol>                                                </div>
                                    </div>
                                </div>
                                <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <a href={`${Data[1].urlWebImgP}`} target='new'>
                                            <img src={`${path}${Data[1].imgP}`} className='SizeImg_Hung' />
                                        </a>
                                        <div><b>{Data[1].textImgP}</b></div>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-right">
                                    <div align='center' style={{ paddingTop: '2%' }}>
                                        <h4 className='shadow_text' >Applications</h4>
                                        <div style={{ textAlign: "left" }}>
                                            <ul>
                                                <li danhmuc="🜲 .">{Data[1].textA1}</li>
                                                <li danhmuc="🜲 .">{Data[1].textA2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row' style={{ height: '300px' }} data-aos="fade-left">
                                    <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                        <a href={`${Data[1].urlWebImgA1}`} target='new'>
                                            <img src={`${path}${Data[1].imgA1}`} className='SizeImg_Hung1' />
                                        </a>
                                        <div><b>{Data[1].textImgA1}</b></div>
                                    </div>
                                    <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                        <a href={`${Data[1].urlWebImgA2}`}>
                                            <img src={`${path}${Data[1].imgA2}`} className='SizeImg_Hung1' />
                                        </a>
                                        <div><b>{Data[1].textImgA2}</b></div>
                                    </div>
                                </div>
                                <div>
                                    <br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ padding: "0% 6% 3% 6%" }} >
                    <div className='Khoidiv2_Hung' style={{ padding: "0% 6% 3% 6%" }}>
                        <div align='center' id='vitri3'>
                            <h1 className='shadow_text' data-aos="fade-left">Impact of Her Two Nobel Prizes on Science and Society</h1>
                        </div>

                        <div className='row' style={{ marginTop: "3%" }}>

                            <div className='col-md-5 container_Hung' data-aos="fade-right">
                                <img src={`${path}${Data2[0].img1}`} className='icon_Hung one' />
                                <img src={`${path}${Data2[0].img2}`} className='icon_Hung two' />
                                <img src={`${path}${Data2[0].img3}`} className='icon_Hung three' />
                                <img src={`${path}${Data2[0].img4}`} className='icon_Hung four' />

                            </div>
                            <div className='col-md-7' data-aos="fade-left" style={{ boxShadow: "3px 3px 3px #dddddd", borderTop: "1px solid white", borderLeft: "1px solid white", borderRadius: "0px 25px 0px 25px" }}>
                                <h3 className='shadow_text' id='vitri2T1'>Open up new perspectives</h3>
                                {Data2[0].text1}
                            </div>
                        </div>

                        <div className='row' style={{ marginTop: "3%" }}>
                            <div className='col-md-7' data-aos="fade-right" style={{ boxShadow: "3px 3px 3px #dddddd", columnCount: 2, borderTop: "1px solid white", borderLeft: "1px solid white", borderRadius: "0px 25px 0px 25px" }}>
                                <h3 className='shadow_text' id='vitri2T2'>In real life and medicine</h3>
                                {Data2[0].text2}
                            </div>
                            <div className='col-md-5' >
                                <div align='center' style={{ marginTop: "2%" }} data-aos="fade-left">
                                    <iframe src="https://www.youtube.com/embed/CKjEz-9CbgE" height={200} width={'80%'} ></iframe>
                                    <div>
                                        <b>Radiation Therapy for Cancer 1940s Tumor Treated How it Works</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: "3%" }}>
                            <div className='col-md-6' data-aos="fade-right">
                                <div className='slide_Hung'>
                                    <img src={`${path}${Data2[0].img5}`} onClick={NP1} />
                                    <img src={`${path}${Data2[0].img6}`} onClick={NP2} />
                                    <img src={`${path}${Data2[0].img7}`} onClick={NP3} />
                                    <img src={`${path}${Data2[0].img8}`} onClick={NP4} />
                                    <img src={`${path}${Data2[0].img9}`} onClick={NP5} />
                                </div>
                                <div align='center'><b>Some women have won the nobel prize.</b></div>
                            </div>
                            <div className='col-md-6' data-aos="fade-left" style={{ boxShadow: "3px 3px 3px #dddddd", borderTop: "1px solid white", borderLeft: "1px solid white", borderRadius: "0px 25px 0px 25px" }}>
                                <h3 className='shadow_text' id='vitri2T3'>On a social level</h3>
                                {Data2[0].text3}
                            </div>
                        </div>
                        <br />

                        <div data-aos="fade-in" data-aos-delay="1000">
                            <h3>
                                <i>{Data2[0].text4}</i>
                            </h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default SelectedWorks;