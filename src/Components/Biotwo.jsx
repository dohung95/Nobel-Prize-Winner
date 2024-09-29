import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Figure from 'react-bootstrap/Figure';
import Infor from '../Data/Van/infor.json'
import '../Css/Hung/Css_Hung.css'
import actinum from '../Img/Van/nguyento-mrsizemik/actinum.png'

const Biotwo = () => {
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
            <div align='center'>
                <h1 data-aos="slide-right" className='shadow_text'> Marie Curie in Paris:</h1>
            </div>

            <div id="main-content" >
                {
                    Infor.map((output) => (
                        <div key={output.id} data-aos="fade-right">

                            <div>
                                <h3 >
                                    {/* <img src={medal} width={35} /> hinh quyensach*/}
                                    {output.tittle}
                                </h3>
                                <div className=' row '>
                                    <div className='col-lg-6' data-aos="fade-right" >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.noidung_tittle1}</li>
                                                    <li>{output.noidung_tittle2}</li>
                                                    <li>{output.noidung_tittle3}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6' data-aos="fade-right" >
                                        <div align='center' >
                                            <Figure>
                                                <Figure.Image
                                                    width={500}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={actinum} />
                                                <Figure.Caption align='center'>
                                                    hinh thu nghiem
                                                </Figure.Caption>
                                            </Figure>
                                        </div>
                                    </div>
                                </div>

                                <div className=' row '>
                                    <div className='col-lg-4' data-aos="fade-right" >
                                        <div align='center' >
                                            <Figure>
                                                <Figure.Image
                                                    width={300}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={actinum} />
                                                <Figure.Caption align='center'>
                                                    hinh thu nghiem
                                                </Figure.Caption>
                                            </Figure>
                                        </div>
                                    </div>

                                    <div className='col-lg-8' data-aos="fade-right" >
                                        <div>
                                            <h3>{output.mission}</h3>
                                            <div style={{ textAlign: "left" }}>
                                                <ul>
                                                    <li>{output.noidung_mission1}</li>
                                                    <li>{output.noidung_mission2}</li>
                                                    <li>{output.noidung_mission3}</li>
                                                    <li>{output.noidung_mission4}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div><h3>{output.thefate}</h3></div>
                                <div className=' row '>
                                    <div className='col-lg-7' data-aos="fade-right" >
                                        <div style={{ textAlign: "left" }}>
                                            <ul textAlign='center'>Their mutual passion for science brought them increasingly closer, and they began to develop feelings for one another.
                                                <li>{output.noidung_thefate1}</li>
                                                <li>{output.noidung_thefate2}</li>
                                                <li>{output.noidung_thefate3}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='col-lg-5' data-aos="fade-right" >
                                        <div align='center' >
                                            <Figure>
                                                <Figure.Image
                                                    width={300}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={actinum} />
                                                <Figure.Caption align='center'>
                                                    hinh thu nghiem
                                                </Figure.Caption>
                                            </Figure>
                                        </div>

                                        <div align='center' >
                                            <Figure>
                                                <Figure.Image
                                                    width={300}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={actinum} />
                                                <Figure.Caption align='center'>
                                                    hinh thu nghiem
                                                </Figure.Caption>
                                            </Figure>
                                        </div>
                                    </div>

                                </div>

                                <div className="container">
                                    <div className="row align-items-center">

                                        <div className="col-md-6 text-center" data-aos="zoom-in">
                                            <figure>
                                                <img src={require("../Img/Huy/medal.png")} className="img-fluid" />
                                                <figcaption>HÌNH MƯỢN</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up">
                                            <p style={{ textAlign: "justify" }}>On 26 July 1895, they were married in Sceaux, neither wanted a religious service. Curie's dark blue outfit, worn instead of a bridal gown, would serve her for many years as a laboratory outfit. They shared two pastimes: long bicycle trips and journeys abroad, which brought them even closer. In Pierre, Marie had found a new love, a partner, and a scientific collaborator on whom she could depend.</p>

                                        </div>



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

export default Biotwo;
