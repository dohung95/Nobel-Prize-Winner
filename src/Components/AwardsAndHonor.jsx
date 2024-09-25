import "../Css/Huy/Awards.css"
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Awards = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // thời gian hiệu ứng chạy, tính bằng ms
        });
      }, []);
    return (
        <>
         <div >
                <NavBar />
            </div>
            <h1 data-aos="flip-up">Awards and Honors</h1>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-up">
                        <p style={{ textAlign: "justify" }}>Marie Curie, a pioneering scientist in the field of radioactivity, is renowned for her groundbreaking research and significant contributions to science. Her achievements in this domain were recognized with two Nobel Prizes:</p>
                        <ul>
                            <li>
                                <a href="https://www.nobelprize.org/prizes/physics/1903/summary/" target="_blank" rel="noopener noreferrer">
                                    <h4>Nobel Prize in Physics (1903)</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nobelprize.org/prizes/chemistry/1911/summary/" target="_blank" rel="noopener noreferrer">
                                    <h4>Nobel Prize in Chemistry (1911)</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center" data-aos="zoom-in">
                        <figure>
                            <img src={require("../Img/Huy/medal.png")} className="img-fluid" />
                            <figcaption>Nobel Prize Medal</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <Container className="mt-4">
                <h3 data-aos="flip-left">Honorary Recognitions</h3>
                <p style={{ textAlign: "justify", fontSize: "1.4rem" }} data-aos="fade-up">
                    Marie Curie, one of the greatest scientists of the 20th century, is not only known for her groundbreaking scientific discoveries but also for the honorary titles and recognitions she received throughout her career. These acknowledgments reflect the respect and admiration she garnered within the scientific community and society at large. Here are some of the notable honors and recognitions bestowed upon Marie Curie:
                </p>
                <ListGroup className="mb-4">
                    <ListGroup.Item data-aos="zoom-in">
                        <h4>Honorary Doctorates</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>University of Edinburgh (1909)</b>: Marie Curie was awarded an honorary doctorate by the University of Edinburgh, in recognition of her outstanding contributions to science, particularly in the field of radioactivity.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <b>University of Paris (1911)</b>: She also received an honorary doctorate from the University of Paris, acknowledging her exceptional achievements in research and the development of applications for radioactivity.
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="zoom-in">
                        <h4>Copley Medal (1921)</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>Royal Society of London</b>: Marie Curie was awarded the Copley Medal, one of the highest honors in scientific research, for her outstanding achievements in science. This award recognized her fundamental research on radioactivity and her discoveries of radium and polonium.
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="zoom-in">
                        <h4>Davy Medal (1903)</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>Royal Society</b>: Marie Curie received the Davy Medal, shared with her husband Pierre Curie and Henri Becquerel, for their joint research on radioactivity. This award acknowledged their significant contributions to the understanding of radioactive phenomena.
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="zoom-in">
                        <h4>Cross of the Legion of Honour (1921)</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>France</b>: Marie Curie was awarded the Cross of the Legion of Honour, one of France’s highest decorations, to honor her contributions to science and her role in advancing radiological techniques in medicine. This was the highest accolade the French government could bestow upon its citizens.
                        </p>
                    </ListGroup.Item>
                </ListGroup>
                <Row className="align-items-center mb-4">
                    <Col md={6} data-aos="slide-left">
                        <p style={{ textAlign: "justify", fontSize: "1.4rem" }}>
                            These honorary titles and recognitions not only reflect the acknowledgment of Marie Curie's contributions to science but also underscore her lasting impact on medicine and science in general. These honors helped solidify her legacy as a pioneering scientist and an inspiration for future generations of researchers.
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <Figure>
                            <a href="https://www.nobelprize.org/prizes/physics/1903/marie-curie/photo-gallery/"><Figure.Image
                                src={require("../Img/Huy/SICEP.png")}
                                className="img-fluid hover-zoom1"
                                target="new" rel="noopener noreferrer"
                            /></a>
                            <Figure.Caption>
                                The fifth Solvay International Conference on Electrons and Photons, held in October 1927.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
            <div className="container mt-4">
                <h3 className="text-center mb-4" data-aos="fade-up">Some Videos About Marie Curie</h3>
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
                        ></iframe>
                    </div>
                </div>
            </div>
            <div >
                <Footer />
            </div>
        </>
    );
}

export default Awards;