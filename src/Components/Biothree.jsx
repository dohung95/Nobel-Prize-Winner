import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import '../Css/Van/Timeline.css'
// import Timeline from './IntimateDetail';
function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>{props.content}</p>
                </Modal.Title>
            </Modal.Header>
            <Button onClick={props.onHide}>Close</Button>
        </Modal>
    );
}

function Biothree() {
    const years = ["1906", "1909", "1910", "1911", "1912", "1914"];
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleShowModal = (content) => {
        setModalContent(content);
        setModalShow(true);
    };

    return (
        <>

            <h1 className="text-center mb-4" data-aos="fade-up" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px' }} >Timeline about MarieCurie's life from 1906 to 1914</h1>
            <Row className="align-items-center mb-4">
                <Col md={4}>
                    <div style={{ textAlign: "justify", fontSize: "1.19rem", color: " #F2F2CE" }} className='Van-chuhoa'>
                        <p data-aos="zoom-in"> From a poor woman who suffered from gender discrimination, she constantly tried her best for her passion for science and achieved countless achievements, becoming the first woman to receive a doctorate in science in France, the first woman to receive a doctorate in science. first female to become a professor at the University of Paris. </p>
                    </div>
                </Col>

                <Col md={3}>
                    <div style={{ color: '#F2F2CE', fontSize: '1.19rem' }} data-aos="zoom-in" className='chuhoa' >
                        <p data-aos="zoom-in"> Marie has two daughters. Irene, who followed her parents into science and eventually won a Nobel Prize with her husband for their work on nuclear reactions. The younger daughter, Eve, wrote the best biography of her mother and married a United Nations official who later won another Nobel Prize for her work with UNICEF. </p>
                    </div>
                </Col>
                <Col md={5}>
                    <div style={{ color: '#F2F2CE', fontSize: '1.19rem' }} data-aos="zoom-in" className='chuhoa' mb={4}>
                        <p data-aos="zoom-in"> In 1903, Marie shared the Nobel Prize in Physics with her husband and physicist Henri Becquerel. Eight years later, in 1911, she received her second Nobel Prize - Nobel in Chemistry, in recognition of her research in the field of radioactivity, which made great contributions to science, medicine and biology in general. Although her life went through a series of ups and downs, including 'discrimination', the way she overcame it left extremely useful lessons for everyone. At this moment, no one can doubt her abilities.</p>
                    </div>
                </Col>
            </Row >


            <div className="timeline">

                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal(" Her husband's death was a sudden accident and a big shock to her. But her love of science eventually helped her overcome her pain. Marie threw herself into radiation research and saved lives during World War I. On 19 April 1906, Pierre Curie was killed in a road accident. Walking across the Rue Dauphine in heavy rain, he was struck by a horse-drawn vehicle and fell under its wheels, fracturing his skull and killing him instantly. Curie was devastated by her husband's death. On 13 May 1906 the physics department of the University of Paris decided to retain the chair that had been created for her late husband and offer it to Marie. She accepted it, hoping to create a world-class laboratory as a tribute to her husband Pierre. She was the first woman to become a professor at the University of Paris.")}>
                            1906
                        </Button>
                    </div>
                </div>
                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal(" Curie's quest to create a new laboratory did not end with the University of Paris, however. In her later years, she headed the Radium Institute (Institut du radium, now Curie Institute, Institut Curie), a radioactivity laboratory created for her by the Pasteur Institute and the University of Paris. The initiative for creating the Radium Institute had come in 1909 from Pierre Paul Émile Roux, director of the Pasteur Institute, who had been disappointed that the University of Paris was not giving Curie a proper laboratory and had suggested that she move to the Pasteur Institute. Only then, with the threat of Curie leaving, did the University of Paris relent, and eventually the Curie Pavilion became a joint initiative of the University of Paris and the Pasteur Institute.")}>
                            1909
                        </Button>
                    </div>
                </div>
                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal("In 1910 Curie succeeded in isolating radium; she also defined an international standard for radioactive emissions that was eventually named for her and Pierre: the curie. Nevertheless, in 1911 the French Academy of Sciences failed, by one or two votes, to elect her to membership in the academy. Elected instead was Édouard Branly, an inventor who had helped Guglielmo Marconi develop the wireless telegraph. It was only over half a century later, in 1962, that a doctoral student of Curie's, Marguerite Perey, became the first woman elected to membership in the academy.")}>
                            1910
                        </Button>
                    </div>
                </div>
                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal(
                            <div className="row">
                                <div className='col-lg-4'>
                                    "Despite Curie's fame as a scientist working for France, the public's attitude tended toward xenophobia—the same that had led to the Dreyfus affair—which also fuelled false speculation that Curie was Jewish. During the French Academy of Sciences elections, she was vilified by the right-wing press as a foreigner and atheist. Her daughter later remarked on the French press's hypocrisy in portraying Curie as an unworthy foreigner when she was nominated for a French honour, but portraying her as a French heroine when she received foreign honours such as her Nobel Prizes.
                                </div>
                                <div className='col-lg-8'>
                                    In 1911 it was revealed that Curie was involved in a year-long affair with physicist Paul Langevin, a former student of Pierre Curie's, a married man who was estranged from his wife.This resulted in a press scandal that was exploited by her academic opponents. Curie (then in her mid-40s) was five years older than Langevin and was misrepresented in the tabloids as a foreign Jewish home-wrecker. When the scandal broke, she was away at a conference in Belgium; on her return, she found an angry mob in front of her house and had to seek refuge, with her daughters, in the home of her friend, Camille Marbo. International recognition for her work had been growing to new heights, and the Royal Swedish Academy of Sciences, overcoming opposition prompted by the Langevin scandal, honoured her a second time, with the 1911 Nobel Prize in Chemistry.This award was "in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element."Because of the negative publicity due to her affair with Langevin, the chair of the Nobel committee, Svante Arrhenius, attempted to prevent her attendance at the official ceremony for her Nobel Prize in Chemistry, citing her questionable moral standing. Curie replied that she would be present at the ceremony, because "the prize has been given to her for her discovery of polonium and radium" and that "there is no relation between her scientific work and the facts of her private life".
                                </div>
                            </div>
                        )}>
                            1911
                        </Button >
                    </div>
                </div>
                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal(" She was the first person to win or share two Nobel Prizes, and remains alone with Linus Pauling as Nobel laureates in two fields each. A delegation of celebrated Polish men of learning, headed by novelist Henryk Sienkiewicz, encouraged her to return to Poland and continue her research in her native country. Curie's second Nobel Prize enabled her to persuade the French government to support the Radium Institute, built in 1914, where research was conducted in chemistry, physics, and medicine. A month after accepting her 1911 Nobel Prize, she was hospitalised with depression and a kidney ailment. For most of 1912, she avoided public life but did spend time in England with her friend and fellow physicist, Hertha Ayrton. She returned to her laboratory only in December, after a break of about 14 months.")}>
                            1912
                        </Button>
                    </div>
                </div>
                <div className="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <Button variant="primary" onClick={() => handleShowModal("In 1912 the Warsaw Scientific Society offered her the directorship of a new laboratory in Warsaw but she declined, focusing on the developing Radium Institute to be completed in August 1914, and on a new street named Rue Pierre-Curie (today rue Pierre-et-Marie-Curie). She was appointed director of the Curie Laboratory in the Radium Institute of the University of Paris, founded in 1914. She visited Poland in 1913 and was welcomed in Warsaw but the visit was mostly ignored by the Russian authorities. The institute's development was interrupted by the coming war, as most researchers were drafted into the French Army, and it fully resumed its activities in 1919.")}>
                            1914
                        </Button>
                    </div>
                </div>
            </div>



            {/* <Timeline /> */}

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                content={modalContent}
            />
        </>
    );
}

export default Biothree;
