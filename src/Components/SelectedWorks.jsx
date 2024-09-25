import Data from '../Data/Hung/data.json'
import '../Css/Hung/Css_Hung.css'
import Footer from './Footer'
import NavBar from './Navbar'
import medal from '../Img/Hung/Nobel_Prize.png'
import h1 from '../Img/Hung/Nobel1.jpg'
import h2 from '../Img/Hung/1903.jpg'
import h3 from '../Img/Hung/Application1_Nobel1.jpg'
import h4 from '../Img/Hung/Application1_Nobel2.jpg'
import h5 from '../Img/Hung/Nobel2.JPG'
import h6 from '../Img/Hung/1911.jpg'
import h7 from '../Img/Hung/Application2_Nobel1.jpg'
import h8 from '../Img/Hung/Application2_Nobel2.jpg'
import video from '../Img/Hung/video.mp4'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const SelectedWorks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // thời gian hiệu ứng chạy, tính bằng ms
        });
    
        const timer = setTimeout(() => {
            const tab1 = document.getElementById('overlay');
            const tab2 = document.getElementById('main-content');
    
            if (tab1 && tab2) {
                tab1.style.display = 'none';
                tab2.style.display = 'block';
            }
        }, 4800);
    
        // Cleanup timeout khi component unmount
        return () => clearTimeout(timer);
    }, []);
    return (
        <>

            <div id="overlay">
                <div >
                    <div className=' design_video_Hung'>
                        <video src={video} autoPlay className="overlay-content">
                            </video></div>

                    <div className="overlay-text">
                        The first person to win Nobel Prizes in two different fields. 
                    </div>
                </div>
            </div>
            <div id="main-content" >
                <div >
                    <NavBar />
                </div>

                <div align='center'>
                    <h1 data-aos="slide-right" className='shadow_text'> Two great studies</h1>
                </div>

                {
                    Data.map((output) => (
                        <div key={output.id} data-aos="fade-right">
                            <div style={{ padding: "3% 5% 3% 5%" }} >
                                <h3 className='shadow_text'><img src={medal} width={35} /> {output.nobel}</h3>
                                <div className='Khoidiv row' >
                                    <div className='col-md-6' data-aos="fade-right" >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>Research Process:</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.textR1}</li>
                                                    <li>{output.textR2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <img src={output.imgR} className='SizeImg_Hung' />
                                            <div>{output.textImgR}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' data-aos="fade-right">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>{output.textProcess}</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ol>
                                                    <li>{output.textP1}</li>
                                                    <li>{output.textP2}</li>
                                                    <li>{output.textP3}</li>
                                                    <li>{output.textP4}</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <a href={`${output.urlWebImgP}`}>
                                                <img src={output.imgP} className='SizeImg_Hung' />
                                            </a>
                                            <div>{output.textImgP}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' data-aos="fade-right">
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4 className='shadow_text'>Applications:</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.textA1}</li>
                                                    <li>{output.textA2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 row' style={{ height: '300px' }} data-aos="fade-left">
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA1}`}>
                                                <img src={output.imgA1} className='SizeImg_Hung1' />
                                            </a>
                                            <div>{output.textImgA1}</div>
                                        </div>
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA2}`}>
                                                <img src={output.imgA2} className='SizeImg_Hung1' />
                                            </a>
                                            <div>{output.textImgA2}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div >
                    <Footer />
                </div>

            </div>
        </>
    );
}

export default SelectedWorks;