import Data from '../Data/Hung/data.json'
import '../Css/Hung/Css_Hung.css'
import Footer from './Footer'
import NavBar from './Navbar'
import medal from '../Img/Hung/Nobel_Prize.png'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const SelectedWorks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

    }, []);
    const path = process.env.PUBLIC_URL;
    return (
        <>
            <div style={{ backgroundColor: "#f7f7f7" }}>
                <div align='center' >
                    <br /><h1 data-aos="slide-right" className='shadow_text' style={{ color: "#222e50" }}> Two great studies</h1>
                </div>
                {
                    Data.map((output) => (
                        <div key={output.id} data-aos="fade-right">
                            <div style={{ padding: "2% 6% 3% 6%" }} >
                                <h3 className='shadow_text'><img src={medal} width={35} className='Nobel_Hung'/> {output.nobel}</h3>
                                <div className='Khoidiv row' >
                                    <div className='col-md-6' data-aos="fade-right" >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>Research Process</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li danhmuc="♔ .">{output.textR1}</li>
                                                    <li danhmuc="♔ .">{output.textR2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <img src={`${path}${output.imgR}`} className='SizeImg_Hung' />
                                            <div><b>{output.textImgR}</b></div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' data-aos="fade-right">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>{output.textProcess}</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ol>
                                                    <li danhmuc="1.">{output.textP1}</li>
                                                    <li danhmuc="2.">{output.textP2}</li>
                                                    <li danhmuc="3.">{output.textP3}</li>
                                                    <li danhmuc="4.">{output.textP4}</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <a href={`${output.urlWebImgP}`}>
                                                <img src={`${path}${output.imgP}`} className='SizeImg_Hung' />
                                            </a>
                                            <div><b>{output.textImgP}</b></div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' data-aos="fade-right">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>Applications</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li danhmuc="🜲 .">{output.textA1}</li>
                                                    <li danhmuc="🜲 .">{output.textA2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 row' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA1}`}>
                                                <img src={`${path}${output.imgA1}`} className='SizeImg_Hung1' />
                                            </a>
                                            <div><b>{output.textImgA1}</b></div>
                                        </div>
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA2}`}>
                                                <img src={`${path}${output.imgA2}`} className='SizeImg_Hung1' />
                                            </a>
                                            <div><b>{output.textImgA2}</b></div>
                                        </div>
                                    </div>
                                    <div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default SelectedWorks;