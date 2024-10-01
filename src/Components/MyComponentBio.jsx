import React, { useState } from 'react';
// import '../Css/Van/MoreNobel.css'
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import hinh_card from '../Img/Van/Nobel1903.jpg'

const MyComponent = () => {
    // State để điều khiển việc hiển thị đầy đủ hay thu gọn nội dung
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <Col md={4} data-aos="slide-left">
                <div className='card'>
                    <figure style={{ textAlign: "center" }}>
                        <div className='myEffect'>
                            <img src={hinh_card} style={{ width: "100%" }} />
                        </div>
                        <figcaption style={{ textAlign: "center", marginTop: "10px" }}>
                            <h2> Marie Curie (1920) </h2>
                        </figcaption>
                    </figure>

                    <div style={{ display: isExpanded ? 'block' : 'none' }}>
                        {/* Nội dung sẽ được ẩn/hiển thị */}

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
                            {/* ... nội dung list ... */}
                        </ListGroup>
                    </div>

                    <button onClick={toggleExpand}>
                        {isExpanded ? 'Ẩn bớt' : 'QUICK VIEW'}
                    </button>
                </div>
            </Col>
        </>
    );
};

export default MyComponent;
