import React, { useState } from 'react';
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import hinh_card from '../Img/Van/Nobel1903.jpg'
import chukiMari from '../Img/Van/biofirst/chukiMari.png'

const QuickviewBio = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <Col md={4} data-aos="slide-left">
                <div className='card'>
                    <figure >
                        <div className='myEffect'>
                            <img src={hinh_card} style={{ width: "100%" }} />
                        </div>
                        <figcaption style={{ textAlign: "center", marginTop: "10px" }}>
                            <h2> Marie Curie (1920) </h2>
                            <p>Great scientist who won the Nobel Prize twice.</p>
                        </figcaption>
                    </figure>

                    <div style={{ display: isExpanded ? 'block' : 'none', textAlign: 'left' }}>
                        <table>
                            <tr>
                                <th>Birth_name:</th>
                                <td >Maria Salomea Skłodowska</td>
                            </tr>
                            <tr>
                                <th>Birth_date:</th>
                                <td >7 November 1867</td>
                            </tr>
                            <tr>
                                <th>Birth_place:</th>
                                <td > Warsaw, Congress Poland, Russian Empire(now Poland)</td>
                            </tr>
                            <tr>
                                <th>Death_date:</th>
                                <td >4 July 1934 (aged 66)</td>
                            </tr>
                            <tr>
                                <th>Death_cause:</th>
                                <td > Aplastic anemia</td>
                            </tr>
                            <tr>
                                <th>Death_place:</th>
                                <td >Passy (Haute-Savoie)</td>
                            </tr>
                            <tr>
                                <th>Citizenship:</th>
                                <td >France (1895-1934)</td>
                            </tr>
                        </table>
                    </div>
                    <ListGroup style={{ alignItems: 'center', fontSize: '1.75rem' }}>
                        <div><img src={chukiMari} alt="chu ki " /></div>
                    </ListGroup>
                    <button onClick={toggleExpand}>
                        {isExpanded ? 'COMPACT' : 'QUICK VIEW'}
                    </button>
                </div>
            </Col>
        </>
    );
};

export default QuickviewBio;
