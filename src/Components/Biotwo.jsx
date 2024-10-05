import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Figure from 'react-bootstrap/Figure';
import Infor from '../Data/Van/infor.json'
import hinhBiotwo1 from '../Img/Van/biotwo/hinhBiotwo1.jpg'
import hinhBiotwo4 from '../Img/Van/biotwo/hinhBiotwo4.jpg'
import hinhBiotwo3 from '../Img/Van/biotwo/hinhBiotwo3.png'
import hinhBiotwo5 from '../Img/Van/biotwo/hinhBiotwo5.jpg'
import hinhBiotwo6 from '../Img/Van/biotwo/hinhBiotwo6.jpg'
import '../Css/Hung/Css_Hung.css'
import { Row, Col } from "react-bootstrap";
const Biotwo = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

        const timer = setTimeout(() => {
            const tab1 = document.getElementById('overlay');
            const tab2 = document.getElementById('main-content');

            if (tab1 && tab2) {
                tab1.style.display = 'none';
                tab2.style.display = 'block';
            }
        }, 4800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div align='center'>
                <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} >MARIE'S IN PARIS</h1>
            </div>
            <div id="main-content" >
                {
                    Infor.map((output) => (
                        <div key={output.id} data-aos="fade-right">
                            <div  >
                                <span style={{ color: 'white' }}>
                                    <h3>
                                        {output.tittle}
                                    </h3>
                                </span>
                                <div className=' row '>
                                    <div className='col-lg-6' data-aos="fade-right" >
                                        <div align='center' style={{ paddingTop: '2%' }}>
                                            <div style={{ textAlign: "left", color: ' white', fontSize: '1.19rem' }}>
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', paddingRight: '20px' }}>
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
                                                    width={400}
                                                    height={300}
                                                    alt="hinh marie lam viec phong thi nghiem  Gabriel Lippmann"
                                                    src={hinhBiotwo1} />
                                                <Figure.Caption style={{ align: 'center', color: 'white' }}>
                                                    Pierre and Marie Curie in their laboratory. 1898, (1951).  A print from 100 Years in Pictures, A panorama of History in the Making, text by DC Somervell, Odhams press Limited, London, 1951. (Photo by The Print Collector/Print Collector/Getty Images).
                                                </Figure.Caption>
                                            </Figure>
                                        </div>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={3} style={{ marginLeft: '10%' }}>
                                        <div className='col-lg-8' data-aos="fade-right" >
                                            <div align='center' >
                                                <Figure>
                                                    <Figure.Image
                                                        width={250}
                                                        height={200}
                                                        alt="2 vo chong"
                                                        src={hinhBiotwo4} />
                                                    <Figure.Caption style={{ align: 'center', color: 'white' }}>
                                                        Pierre Curie and Marie Skłodowska-Curie, 1895
                                                    </Figure.Caption>
                                                </Figure>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} data-aos="fade-right"  >
                                        <div>
                                            <h3 style={{ color: 'white' }}>{output.mission}</h3>
                                            <div style={{ textAlign: "left", color: 'white', fontSize: '1.19rem' }}>
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', paddingRight: '20px' }}>
                                                    <li>{output.noidung_mission1}</li>
                                                    <li>{output.noidung_mission2}</li>
                                                    <li>{output.noidung_mission3}</li>
                                                    <li>{output.noidung_mission4}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div><h3 style={{ color: 'white' }}>{output.thefate}</h3></div>
                                <div className=' row '>
                                    <div className='col-lg-6' data-aos="fade-right" >
                                        <div style={{ textAlign: "left", color: 'white', fontSize: '1.19rem' }}>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '30px', paddingRight: '20px' }}>
                                                Their mutual passion for science brought them increasingly closer, and they began to develop feelings for one another.
                                                <li>{output.noidung_thefate1}</li>
                                                <li>{output.noidung_thefate2}</li>
                                                <li>{output.noidung_thefate3}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-6' data-aos="fade-right" >
                                        <div align='center' >
                                            <Figure>
                                                <Figure.Image
                                                    width={500}
                                                    height={1}
                                                    alt="dap xe"
                                                    src={hinhBiotwo3} />
                                                <Figure.Caption style={{ align: 'center', color: 'white' }} >
                                                    The Curies' honeymoon trip was a tour of France on bicycles purchased with a wedding gift. (Photo ACJC)
                                                </Figure.Caption>
                                            </Figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-4 text-center" data-aos="fade-left">
                                            <figure>
                                                <Figure.Image
                                                    width={300}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={hinhBiotwo5} />
                                                <Figure.Caption style={{textAlign:'left', color:'white'}}>
                                                    Pierre Curie (1859-1906) and Marie Sklodowska Curie (1867-1934) Artist: Anonymous
                                                </Figure.Caption>                                               
                                            </figure>
                                        </div>
                                        <div className="col-md-4 text-center" data-aos="zoom-in">
                                            <figure>
                                                <Figure.Image
                                                    width={300}
                                                    height={1}
                                                    alt="hinh thay doi"
                                                    src={hinhBiotwo6} />
                                                <Figure.Caption style={{ textAlign: 'left', color: "white" }} >
                                                    Pierre and Marie Curie at work in their laboratory at the Sorbonne (Wikimedia: The copyright of this image has expired because it was published more than 70 years ago without a public claim of authorship (anonymous or pseudonymous), and no subsequent claim of authorship was made in the 70 years following its first publication. https://commons. wikimedia.org/wiki/ File:Pierre_and_Marie_Curie. jpg)
                                                </Figure.Caption>
                                            </figure>
                                        </div>
                                        <div className="col-md-4" data-aos="fade-up">
                                            <p style={{ textAlign: "justify", color: 'white', fontSize: '1.19rem' }}>On 26 July 1895, they were married in Sceaux, neither wanted a religious service. Curie's dark blue outfit, worn instead of a bridal gown, would serve her for many years as a laboratory outfit. They shared two pastimes: long bicycle trips and journeys abroad, which brought them even closer. In Pierre, Marie had found a new love, a partner, and a scientific collaborator on whom she could depend.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    );
}

export default Biotwo;
