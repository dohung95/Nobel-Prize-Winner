
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react"

import AOS from 'aos'
import Game from "./Game";
import MyComponentBio from "./MyComponentBio";
const Biofirst = () => {
    const alertClicked = () => {

        alert('Corret answer!');
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Row className="align-items-center mb-4">

                <Col md={8} data-aos="slide-left">
                    <div style={{ textAlign: "justify", fontSize: "1.25rem", color: " #F2F2CE" }} className='chuhoa'>
                        <p className="col-md-8" data-aos="fade-right"> Marie Curie, from a burning passion for science to the first woman who won two Nobell prizes. Until now, women who do scientific research are few, the women have achieved great success in this industry. And Marie Curie is one of the few. Marie Curie is a physicist, Balan -original French chemist. She was a woman who impressed the world with discoveries that opened up new foundations in physics and chemistry, and also opened the door for advances in techniques, biology and medicine. learn. She was also the one who created a new platform for women in the field of science by becoming the first woman to receive a PhD scientist in France, the first woman to present in Solvbon and especially her. Also the first and only woman to achieve two Nobel prizes in two different areas: Physics and Chemistry.</p>
                        <hr align='center' />
                        <Row>
                            <Col md={6} data-aos="fade-up">
                                <div style={{ color: " #F2F2CE" }} > * Marie Curie was a pioneer in many ways.</div>
                                <div style={{ color: " #F2F2CE" }}> * Come find out with us!</div>
                                <div className="col-md-4" data-aos="fade-left">
                                    <ul>
                                        <ListGroup defaultActiveKey="#link1">
                                            <ListGroup.Item action href="#link1">
                                                <button >See more</button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} data-aos="fade-down">
                               <Game />
                            </Col>
                        </Row>

                    </div>

                    {/* <div className='row'>
                        <div className="col-md-4" data-aos="fade-left">
                            <div className='game'>
                                <ul>
                                    <ListGroup defaultActiveKey="#link1">
                                        <ListGroup.Item action href="#link1">
                                            We can play mini game now!
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Information
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Education
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Carrer
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Life story
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Intimate detail
                                        </ListGroup.Item>
                                    </ListGroup>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-left">
                            <div className='game'>
                                <ul>
                                    <ListGroup defaultActiveKey="#link1">
                                        <ListGroup.Item action href="#link1">
                                            We can play mini game now!
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Information
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Education
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Carrer
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Life story
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Intimate detail
                                        </ListGroup.Item>
                                    </ListGroup>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-4" data-aos="fade-left">
                            <div className='game'>
                                <ul>
                                    <ListGroup defaultActiveKey="#link1">
                                        <ListGroup.Item action href="#link1">
                                            We can play mini game now!
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Information
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Education
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Carrer
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Life story
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={alertClicked}>
                                            Intimate detail
                                        </ListGroup.Item>
                                    </ListGroup>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                </Col>

                {/* <Col md={4} data-aos="slide-left">
                   
                    <div className='card ' >
                        <figure style={{ textAlign: "center" }}>
                            <div className='myEffect'>
                                <img src={hinh_card} style={{ width: "100%" }} />
                            </div>
                            <figcaption style={{ textAlign: "center", marginTop: "10px" }}>Marie Curie (1920)</figcaption>
                        </figure>
                        <table>
                            <tr>
                                <th>Birth_name:</th>
                                <td>Maria Salomea Skłodowska</td>

                            </tr>
                            <tr>
                                <th>Birth_date:</th>
                                <td>7 November 1867</td>
                            </tr>
                            <tr>
                                <th>Birth_place:</th>
                                <td> Warsaw, Congress Poland, Russian Empire(now Poland)</td>
                            </tr>
                            <tr>
                                <th>Death_date:</th>
                                <td>4 July 1934 (aged 66)</td>
                            </tr>
                            <tr>
                                <th>Death_cause:</th>
                                <td> Aplastic anemia</td>
                            </tr>
                            <tr>
                                <th>Death_place:</th>
                                <td>Passy (Haute-Savoie)</td>
                            </tr>
                            <tr>
                                <th>Citizenship:</th>
                                <td>France (1895-1934)</td>
                            </tr>
                        </table>
                        <ListGroup>
                            <ListGroup.Item variant="nostyle">

                                <Figure><img src={chumarie} alt="chữ kí" style={{ width: "100%", height: "auto" }} /> </Figure>
                                <Figure.Caption>
                                    Chu ky
                                </Figure.Caption>


                            </ListGroup.Item>
                            
                        </ListGroup>
                    </div>
                </Col> */}

                <MyComponentBio />
            </Row>

        </>
    );
}

export default Biofirst
