//import Bioone from './Bioone'
import Biotwo from './Biotwo'
import Biothree from './Biothree'
import Biofour from './Biofour'
import "../Css/Van/Biography.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import React, { useState } from 'react';

import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import QuickviewBio from "./QuickviewBio";

import Tab from 'react-bootstrap/Tab';
import hBioone1 from '../Img/Van/bioone/hBioone1.png'
import hBioone5 from '../Img/Van/bioone/hBioone5.png'
import hBioone4 from '../Img/Van/bioone/hBioone4.jpg'
import hBioone6 from '../Img/Van/bioone/hBioone6.png'
import hBioone7 from '../Img/Van/bioone/hBioone7.png'
import hBioone9 from '../Img/Van/bioone/hBioone9.jpg'
import hBioone8 from '../Img/Van/bioone/hBioone8.jpg'
import hBioone3 from '../Img/Van/bioone/hBioone3.png'
import hBioone10 from '../Img/Van/bioone/hBioone10.jpg'
import hBioone2 from '../Img/Van/bioone/hBioone2.jpg'

const Biography = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

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

            <div className='Van_khoibio_bio '>
                <div>
                    <div data-aos="fade-up" id='mot'>
                        <blockquote className="custom-quote">
                            <div className='sizeDT_Van'>The quote "In science, what matters is what is discovered, not the researcher themselves".</div>
                            <footer className='footer_Van'>— Marie Curie</footer>
                        </blockquote>
                    </div>
                    <div className=" Van_sheet_bio" >
                        <Row className="biofirst-row align-items-center mb-4">

                            <Col md={8} data-aos="slide-left" className="biofirst-col">
                                <div id='mot' style={{ textAlign: "justify", fontSize: "1.19rem", color: " white" }} className='Van-chuhoa'>
                                    <p data-aos="fade-right"> Marie Curie, from a burning passion for science to the first woman who won two Nobell prizes. Until now, women who do scientific research are few, the women have achieved great success in this industry. And Marie Curie is one of the few. Marie Curie is a physicist, Balan -original French chemist. She was a woman who impressed the world with discoveries that opened up new foundations in physics and chemistry, and also opened the door for advances in techniques, biology and medicine. learn. She was also the one who created a new platform for women in the field of science by becoming the first woman to receive a PhD scientist in France, the first woman to present in Solvbon and especially her. Also the first and only woman to achieve two Nobel prizes in two different areas: Physics and Chemistry.</p>
                                    <div style={{ padding: '2%' }}>
                                        <hr align='center' />
                                    </div>
                                    <Row >
                                        <Col md={3} data-aos="fade-up" className="biofirst-inner-col">
                                            <div style={{ color: " white" }} > * Marie Curie was a pioneer.</div>
                                            <div style={{ color: " white" }}> * Come find out with us!</div>
                                            <center style={{ padding: '40px' }}>
                                                <div data-aos="fade-left" style={{ textAlign: "center" }} >
                                                    <ListGroup defaultActiveKey="#link1">
                                                        <ListGroup.Item action href="#link1">
                                                            <button >See more</button>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </div>
                                            </center>
                                        </Col>

                                        <Col md={9} data-aos="fade-down" className="biofist-inner-col">

                                            <div style={{ boxShadow: ' 0 4px 8px 0 #F2F2CE', color: 'white', padding: '3%' }}>
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', paddingRight: '20px' }}>
                                                    <li>First woman to become a professor at the University of Paris.</li>
                                                    <li>First woman to be awarded a Nobel Prize.</li>
                                                    <li>The first woman to be honored with a burial at the Panthenon for her own merits.</li>
                                                    <li>First woman to win the Nobel Prize twice.</li>
                                                    <li>Only woman to win Nobel Prizes in two scientific fields.</li>
                                                    <li>The only woman along with Linus Pauling to be a Nobel Prize winner in each field.</li>
                                                    <li>Women pioneered research in radiation.</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <QuickviewBio />
                        </Row>
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                            <div >
                                <Row>
                                    <Col sm={3} >
                                        <ListGroup >
                                            <ListGroup.Item action href="#link1"  >
                                                <div className='Van-Bioone-clickme'>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="hinh gia dinh luc 5 tuoi"
                                                            src={hBioone1} />
                                                        <Figure.Caption>
                                                            <span style={{ color: 'white' }}> CLICK ME 1</span>
                                                        </Figure.Caption>
                                                    </Figure>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2" >
                                                <div className='Van-Bioone-clickme'>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="24 tuoi"
                                                            src={hBioone2} />
                                                        <Figure.Caption>
                                                            <span style={{ color: 'white' }}> CLICK ME 2</span>
                                                        </Figure.Caption>
                                                    </Figure>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link3">
                                                <div className='Van-Bioone-clickme'>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="sorbonne"
                                                            src={hBioone3} />
                                                        <Figure.Caption>
                                                            <span style={{ color: 'white' }} > CLICK ME 3</span>
                                                        </Figure.Caption>
                                                    </Figure>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#link1">
                                                <div id='link1' style={{ textAlign: "justify", fontSize: "1.25rem" }} className='Van-chuhoa'>
                                                    <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} id='hai'> Marie's childhood years </h1>

                                                    <p style={{ color: 'white', fontSize: '1.19rem' }} > Marie Curie whose real name is Marya Sklodowska, born on November 7, 1867, in Warsaw, Balan, the youngest child in the family has 5 children. Her parents are a teacher. Her mother, Bronislawa Sktodowska, is the principal of a boarding school reputation for women. Her father, Wladyslaw Sklodowski, teaches physics and mathematics about her balan heritage. As a result of patriotism, Russian supervisors forced him to be in a lower salary. He also lost his savings because of a bad investment. To raise 5 children, they have to accept boarding students. This will cause death. Maria's eldest siblings, her sister Zofia, suffered from a fever from one of the people who stayed in and died. A few years later, when Maria was 10, her mother died of tuberculosis. The tragedies have led Maria to abandon the Catholicism- the faith of her mother- and become you in the impossible theory. Her father will not forgive himself for losing his family's savings. However, his children will remember him as a man who nurtured them in terms of emotion and intelligence. However, Marie Curie did not give up but continued to find ways to continue the higher education path.</p>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#link2">
                                                <div id='link2' style={{ textAlign: "justify", fontSize: "1.25rem" }} className='Van-chuhoa'>
                                                    <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} > Her education </h1>

                                                    <p style={{ color: ' white', fontSize: '1.19rem' }} >Marie always holds the top position in schools in the years of school when she was ten years old, Maria started attending J. Sikorska boarding school; After that, she attended a high school for girls, where she graduated on June 12, 1883 with the gold medal. Warsaw, the school is only for male students. The Russian Empire prohibits women from attending college. She and her sister Bronisława participated in secret flight college, a Polish patriotic higher education organization to receive female students.</p>
                                                    <p style={{ color: ' white', fontSize: '1.19rem' }} >Maria agreed with her sister, Bronisława, that she would financially support Bronisława during medical time in Paris, in exchange for the same support two years later. Regarding this, Maria received a first place, a tutor at Warsaw, then a tutor for two years in Szczuki with a family of Dien Trang, the family żorawskis, her father's relatives. While working for her family later, she loved their son, Kazimierz żorawski, a prominent mathematician in the future. His parents protested the idea he married a poor relative, and Kazimierz could not object to them. Mary's loss of relationship with żorawski is a tragedy for both. He soon got a doctorate and pursued an academic career as a mathematician, becoming a professor and principal of Kraków University. However, as an old man and a mathematical professor at Warsaw University of Technology, he still sat down in front of the Maria Skłodowska statue built in 1935 before the Radium Institute, where she was founded in the year. 1932. </p>

                                                </div >
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#link3">
                                                <div id='link3' style={{ textAlign: "justify", fontSize: "1.25rem" }} className='Van-chuhoa'>
                                                    <h1 className="text-center mb-4" data-aos="slide-right" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color: 'black' }} > Marie Curie's efforts and struggles </h1>
                                                    <p style={{ color: ' white', fontSize: '1.19rem' }} >While working as a tutor, she continued to self-study and research whenever she had time.</p>
                                                    <p style={{ color: 'white', fontSize: '1.19rem' }} > In 1891, when Maria was 24 years old, she was finally able to move with her sister to Paris and now used the name Marie. She enrolled at the University of Paris—called the Sorbonne—where she studied physics and mathematics, starting her path into scientific research.</p>
                                                    <p style={{ color: ' white', fontSize: '1.19rem' }} > Shortly after arriving in Paris, thanks to her extraordinary efforts, Marie quickly became one of the most outstanding students at the Sorbonne University. While still a third-year student, she was awarded a master's degree in physics. And in her fourth year, she was awarded a master's degree in arithmetic. In addition, Marie also spoke and wrote in languages ​​such as French, Russian, English, German and was determined to do a doctoral thesis in Physics.</p>
                                                    <p style={{ color: ' white', fontSize: '1.19rem' }} > She studied the magnetic properties of alloys and wrote the first scientific project here.</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={3} >
                                        <div className="row align-items-center " data-aos="fade-right">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="gia dinh Maria"
                                                            src={hBioone4} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            Marie's family
                                                        </Figure.Caption>
                                                    </Figure>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="Warsaw"
                                                            src={hBioone5} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            Warsaw-Marie's brith-place
                                                        </Figure.Caption>
                                                    </Figure>
                                                    <Figure>
                                                        <div align='center'>
                                                            <Figure.Image
                                                                width={300}
                                                                height={1}
                                                                alt="hinh Maria 10 tuoi"
                                                                src={hBioone6} />
                                                            <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                                Marie was a child
                                                            </Figure.Caption>
                                                        </div>
                                                    </Figure>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="chi em"
                                                            src={hBioone7} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            Maria (left) and sister Bronisława, 1886.
                                                        </Figure.Caption>
                                                    </Figure>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="the chien 1"
                                                            src={hBioone8} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            World War I context
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link3">
                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="noi tien hanh cong trinh dau tien"
                                                            src={hBioone9} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            66 Krakowskie Przedmiescie Street, Warsaw, where Maria conducted her first scientific work (1890–91)
                                                        </Figure.Caption>
                                                    </Figure>

                                                    <Figure>
                                                        <Figure.Image
                                                            width={300}
                                                            height={1}
                                                            alt="tuonglublin"
                                                            src={hBioone10} />
                                                        <Figure.Caption style={{ color: 'white', textAlign: 'center' }}>
                                                            Statue of honor in Lublin
                                                        </Figure.Caption>
                                                    </Figure>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Tab.Container >
                    </div>

                    <div className=" Van_sheet_bio" id='nam'>
                        <Biotwo />
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Biothree />
                    </div>

                    <div className=" Van_sheet_bio" id='ba'>
                        <Biofour />
                    </div>


                </div>
            </div>
        </>
    );
}

export default Biography;