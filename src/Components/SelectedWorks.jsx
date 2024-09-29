import Data from '../Data/Hung/data.json'
import Data2 from '../Data/Hung/data2.json'
import '../Css/Hung/Css_Hung.css'
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
            <div>
                <div align='center' >
                    <br /><h1 data-aos="slide-right" className='shadow_text' style={{ color: "#222e50" }}> Two great studies</h1>
                    <hr width='35%' />
                </div>

                <div>
                    {
                        Data.map((output) => (
                            <div key={output.id} data-aos="fade-right">
                                <div style={{ padding: "0% 6% 3% 6%" }} >
                                    <h3 className='shadow_text'><img src={medal} width={35} className='Nobel_Hung' /> {output.nobel}</h3>
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

                <div style={{ padding: "0% 6% 3% 6%" }} >
                    <div className='Khoidiv2_Hung' style={{ padding: "0% 6% 3% 6%" }}>
                        <div align='center'>
                            <h1 className='shadow_text' style={{ color: "#222e50" }} data-aos="slide-left">Impact of Her Two Nobel Prizes on Science and Society</h1>
                        </div>

                        <div className='row' style={{ marginTop: "3%" }}>

                            <div className='col-md-5 container_Hung' data-aos="fade-right">
                                <img src={`${path}${Data2[0].img1}`} className='icon_Hung one' />
                                <img src={`${path}${Data2[0].img2}`} className='icon_Hung two' />
                                <img src={`${path}${Data2[0].img3}`} className='icon_Hung three' />
                                <img src={`${path}${Data2[0].img4}`} className='icon_Hung four' />

                            </div>
                            <div className='col-md-7' data-aos="fade-left" style={{boxShadow:"3px 3px 3px black", borderTop:"1px solid black", borderLeft:"1px solid black", borderRadius:"0px 25px 0px 25px"}}>
                                <h3 className='shadow_text'>Open up new perspectives</h3>
                                {Data2[0].text1}
                            </div>
                        </div>

                        <div className='row' style={{ marginTop: "3%" }}>
                            <div className='col-md-7' data-aos="fade-right" style={{boxShadow:"3px 3px 3px black",columnCount: 2, borderTop:"1px solid black", borderLeft:"1px solid black", borderRadius:"0px 25px 0px 25px"}}>
                                <h3 className='shadow_text'>In real life and medicine</h3>
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
                                    <img src={`${path}${Data2[0].img5}`} />
                                    <img src={`${path}${Data2[0].img6}`} />
                                    <img src={`${path}${Data2[0].img7}`} />
                                    <img src={`${path}${Data2[0].img8}`} />
                                    <img src={`${path}${Data2[0].img9}`} />
                                </div>
                                <div align='center'><b>Some women have won the nobel prize.</b></div>
                            </div>
                            <div className='col-md-6' data-aos="fade-left" style={{boxShadow:"3px 3px 3px black", borderTop:"1px solid black", borderLeft:"1px solid black", borderRadius:"0px 25px 0px 25px"}}>
                                <h3 className='shadow_text'>On a social level</h3>
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