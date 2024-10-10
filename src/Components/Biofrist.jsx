
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react"

import AOS from 'aos'
import Game from "./Game";
import QuickviewBio from "./QuickviewBio";
const Biofirst = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Row className="align-items-center mb-4">

                <Col md={8} data-aos="slide-left">
                    <div style={{ textAlign: "justify", fontSize: "1.19rem", color: " #F2F2CE" }} className='Van-chuhoa'>
                        <p className="" data-aos="fade-right"> Marie Curie, from a burning passion for science to the first woman who won two Nobell prizes. Until now, women who do scientific research are few, the women have achieved great success in this industry. And Marie Curie is one of the few. Marie Curie is a physicist, Balan -original French chemist. She was a woman who impressed the world with discoveries that opened up new foundations in physics and chemistry, and also opened the door for advances in techniques, biology and medicine. learn. She was also the one who created a new platform for women in the field of science by becoming the first woman to receive a PhD scientist in France, the first woman to present in Solvbon and especially her. Also the first and only woman to achieve two Nobel prizes in two different areas: Physics and Chemistry.</p>
                        <hr align='center' />
                        <Row >
                            <Col md={3} data-aos="fade-up">
                                <div style={{ color: " #F2F2CE" }} > * Marie Curie was a pioneer in many ways.</div>
                                <div style={{ color: " #F2F2CE" }}> * Come find out with us!</div>
                                <center>
                                    <div data-aos="fade-left" style={{ textAlign: "center" }}>
                                        <ul>
                                            <ListGroup defaultActiveKey="#link1">
                                                <ListGroup.Item action href="#link1">
                                                    <button >See more</button>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </ul>
                                    </div>
                                </center>
                            </Col>
                            <Col md={9} data-aos="fade-down">
                                <Game />
                            </Col>
                        </Row>

                    </div>
                </Col>

                <QuickviewBio />
            </Row>

        </>
    );
}

export default Biofirst;