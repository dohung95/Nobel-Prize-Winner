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
        window.open('https://en.wikipedia.org/wiki/Maria_Goeppert_Mayer', '_blank');
    };
    const NP2 = () => {
        window.open('https://en.wikipedia.org/wiki/Dorothy_Hodgkin', '_blank');
    };
    const NP3 = () => {
        window.open('https://en.wikipedia.org/wiki/Rosalyn_Sussman_Yalow', '_blank');
    };
    const NP4 = () => {
        window.open('https://en.wikipedia.org/wiki/Rita_Levi-Montalcini', '_blank');
    };
    const NP5 = () => {
        window.open('https://en.wikipedia.org/wiki/Gertrude_B._Elion', '_blank');
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
                        <a href="#NB2" style={{ paddingLeft: "2%" }}>2. Discovery of polonium and radium</a> <br />
                        <a href="#vitri3" style={{ paddingLeft: "2%" }}>3.Impact of Her Nobel Prizes on Science & Society</a><br />
                        <a href="#vitri2T1" style={{ paddingLeft: "6%" }}>- Open up new perspectives</a><br />
                        <a href="#vitri2T2" style={{ paddingLeft: "6%" }}>- In real life and medicine</a><br />
                        <a href="#vitri2T3" style={{ paddingLeft: "6%" }}>- On a social level</a>
                    </div>
                    <div className='col-md-8 bg_title' align='center'>
                        <br /><h1 data-aos="fade-right" className='shadow_text'> Two great studies</h1>
                    </div>

                </div>

                <div >
                    {Data.map((data) => (
                        <div data-aos="fade-right">
                            <div style={{ padding: "0% 6% 3% 6%" }} >
                                <h3 className='shadow_text' id={data.textID}><img src={medal} width={35} className='Nobel_Hung' /> {data.nobel}</h3>
                                <div className='Khoidiv'>
                                    <div className='row' style={{ paddingBottom: "2%" }}>
                                        <div className='col-md-6' data-aos="fade-right" >
                                            <div align='center' style={{ paddingTop: '2%' }} >
                                                <h4 className='shadow_text' >Research Process</h4>
                                                <div style={{ textAlign: "left", color: "white" }}>
                                                    <ul>
                                                        <li danhmuc="♔ .">{data.textR1}</li>
                                                        <li danhmuc="♔ .">{data.textR2}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' data-aos="fade-right">
                                            <div align='center' style={{ paddingTop: '2%' }}>
                                                <img src={`${path}${data.imgR}`} className='SizeImg_Hung' />
                                                <div><i><b>{data.textImgR}</b></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{ paddingBottom: "2%" }}>
                                        <div className='col-md-6' data-aos="fade-right">
                                            <div align='center' style={{ paddingTop: '2%' }}>
                                                <h4 className='shadow_text' >{data.textProcess}</h4>
                                                <div style={{ textAlign: "left" }}>
                                                    <ol>
                                                        <li danhmuc="1.">{data.textP1}</li>
                                                        <li danhmuc="2.">{data.textP2}</li>
                                                        <li danhmuc="3.">{data.textP3}</li>
                                                        <li danhmuc="4.">{data.textP4}</li>
                                                    </ol>                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' data-aos="fade-right">
                                            <div align='center' style={{ paddingTop: '2%' }}>
                                                <a href={`${data.urlWebImgP}`} target='new'>
                                                    <img src={`${path}${data.imgP}`} className='SizeImg_Hung' />
                                                </a>
                                                <div><i><b>{data.textImgP}</b></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{ paddingBottom: "2%" }}>
                                        <div className='col-md-6' data-aos="fade-right">
                                            <div align='center' style={{ paddingTop: '2%' }}>
                                                <h4 className='shadow_text' >Applications</h4>
                                                <div style={{ textAlign: "left" }}>
                                                    <ul>
                                                        <li danhmuc="🜲 .">{data.textA1}</li>
                                                        <li danhmuc="🜲 .">{data.textA2}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 row' data-aos="fade-right">
                                            <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                                <a href={`${data.urlWebImgA1}`} target='new'>
                                                    <img src={`${path}${data.imgA1}`} className='SizeImg_Hung1' />
                                                </a>
                                                <div><i><b>{data.textImgA1}</b></i></div>
                                            </div>
                                            <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                                <a href={`${data.urlWebImgA2}`} target='new'>
                                                    <img src={`${path}${data.imgA2}`} className='SizeImg_Hung1' />
                                                </a>
                                                <div><i><b>{data.textImgA2}</b></i></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
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
                                        <i><b>Radiation Therapy for Cancer 1940s Tumor Treated How it Works</b></i>
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
                                <div align='center'><i><b>Some women have won the nobel prize.</b></i></div>
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