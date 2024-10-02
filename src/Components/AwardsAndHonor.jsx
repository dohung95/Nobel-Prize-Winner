import "../Css/Huy/Awards.css"
import { Carousel, ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import DTB from "../Data/Huy/data.json"
import React from 'react';
const Awards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    const path = process.env.PUBLIC_URL
    const slideImg = [
        "/img/Huy/MarieCurie1.png",
        "/img/Huy/MarieCurie2.png",
        "/img/Huy/MarieCurie3.png",
        "/img/Huy/MarieCurie4.png",
        "/img/Huy/MarieCurie5.png",
        "/img/Huy/MarieCurie6.png",
        "/img/Huy/MarieCurie7.png",
        "/img/Huy/MarieCurie8.png",
        "/img/Huy/MarieCurie9.png",
        "/img/Huy/MarieCurie10.png"
    ]
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
        <div style={{ backgroundColor: "rgb(21,21,21)", color: "white" }}>
            <Carousel interval={4000} pause={false} controls={true}>
                {slideImg.map((img, index) => (
                    <Carousel.Item key={index}>
                        <img

                            src={path + img}
                            alt={`Slide ${index + 1}`}
                            style={{
                                height: "500px",
                                width: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <br />

            <div className="container" >
                <div className="row align-items-center"  >
                    <div className="col-md-6" style={{ border: "1px solid white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                        <p style={{ textAlign: "justify" }}>{DTB[1].p1}</p>
                        <ul>
                            <li>
                                <a href="https://www.nobelprize.org/prizes/physics/1903/summary/" target="_blank" rel="noopener noreferrer" className="linkNobel">
                                    <h4>{DTB[1].li1}</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nobelprize.org/prizes/chemistry/1911/summary/" target="_blank" rel="noopener noreferrer" className="linkNobel">
                                    <h4>{DTB[1].li2}</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center" data-aos="zoom-in" id='nobel'>
                        <figure>
                            <img src={`${path}${DTB[1].medal}`} className="img-fluid" style={{ border: "5px double white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px #DDDDDD" }} />
                            <figcaption style={{ marginTop: "2%" }}><b>{DTB[1].caption1}</b></figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <Container className="mt-4" style={{ border: "1px solid white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px #DDDDDD"  }} id='recognition'>
                <h3 data-aos="flip-left">{DTB[1].h3}</h3>
                <p style={{ textAlign: "justify", fontSize: "1.4rem" }} data-aos="fade-up">
                    {DTB[1].p2}
                </p>
                <ListGroup className="mb-4">
                    <ListGroup.Item style={{ backgroundColor: "rgb(21,21,21)", color: "white" }} data-aos="zoom-in">
                        <h4>{DTB[1].LG1}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG12}</b>: {DTB[1].LG13}
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG14}</b>: {DTB[1].LG15}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "rgb(21,21,21)", color: "white" }} data-aos="zoom-in">
                        <h4>{DTB[1].LG3}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG31}</b>: {DTB[1].LG32}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "rgb(21,21,21)", color: "white" }} data-aos="zoom-in">
                        <h4>{DTB[1].LG5}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG51}</b>: {DTB[1].LG32}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "rgb(21,21,21)", color: "white" }} data-aos="zoom-in">
                        <h4>{DTB[1].LG2}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG21}</b>: {DTB[1].LG22}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "rgb(21,21,21)", color: "white" }} data-aos="zoom-in">
                        <h4>{DTB[1].LG4}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DTB[1].LG41}</b>: {DTB[1].LG42}
                        </p>
                    </ListGroup.Item>
                </ListGroup>
                <Row className="align-items-center mb-4">
                    <Col md={6} data-aos="slide-left">
                        <p style={{ textAlign: "justify", fontSize: "1.4rem" }}>
                            {DTB[1].p3}
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <Figure>
                            <a href="https://www.nobelprize.org/prizes/physics/1903/marie-curie/photo-gallery/" target="_blank" rel="noopener noreferrer"><Figure.Image
                                src={`${path}${DTB[1].SICEP}`}
                                className="img-fluid hover-zoom1"
                                style={{ border: "5px double white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px #DDDDDD" }}
                            /></a>
                            <Figure.Caption style={{ color: "white" }}>
                                <b>{DTB[1].caption2}</b>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
            <div className="container mt-4">
                <h3 style={{ textShadow: "0 4px 6px #DDDDDD" }} className="text-center mb-4" data-aos="fade-up">{DTB[1].video}</h3>
                <div className="row">
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-right">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/m1HxOaEawBQ?si=55oT_q3OvJEGINUK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ border: "5px solid white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px #DDDDDD" }}
                        ></iframe>
                    </div>
                    <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-left">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/w7RoFj3q4_U?si=FB9ZWzC-ZcU-tU0l"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ border: "5px solid white", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px #DDDDDD" }}
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Awards;