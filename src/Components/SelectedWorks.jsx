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
const SelectedWorks = () => {
    return (
        <>
            <div>
                <div >
                    <NavBar />
                </div>

                <div align='center'>
                    <h1>Two great studies</h1>
                </div>
                {
                    Data.map((output) => (
                        <div key={output.id}>
                            <div style={{ padding: "3% 5% 3% 5%" }}>
                                <h3><img src={medal} width={35} /> {output.nobel}</h3>
                                <div className='Khoidiv row'>
                                    <div className='col-md-6'>
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4>Research Process:</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.textR1}</li>
                                                    <li>{output.textR2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ height: '300px' }} >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <img src={output.imgR} className='SizeImg_Hung' />
                                            <div>{output.textImgR}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4>{output.textProcess}</h4>
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
                                    <div className='col-md-6' style={{ height: '300px' }} >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <a href={`${output.urlWebImgP}`}>
                                                <img src={output.imgP} className='SizeImg_Hung' />
                                            </a>
                                            <div>{output.textImgP}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <h4>Applications:</h4>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.textA1}</li>
                                                    <li>{output.textA2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 row' style={{ height: '320px' }} >
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA1}`}>
                                                <img src={output.imgA1} className='SizeImg_Hung' />
                                            </a>
                                            <div>{output.textImgA1}</div>
                                        </div>
                                        <div align='center' style={{ paddingTop: '2%' }} className='col-md-6'>
                                            <a href={`${output.urlWebImgA2}`}>
                                                <img src={output.imgA2} className='SizeImg_Hung' />
                                            </a>
                                            <div>{output.textImgA2}</div>
                                        </div>
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