import "../Css/Huy/Research.css"
import Footer from './Footer'
import NavBar from './Navbar'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Research = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500, // thời gian hiệu ứng chạy, tính bằng ms
        });
      }, []);
    return (
        <>
            <div >
                <NavBar />
            </div>


            <h1 data-aos="flip-up">Scientific Research</h1>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8" data-aos="fade-right">
                        <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>Marie Curie was a pioneer in the study of radioactivity. She discovered and isolated two radioactive elements, polonium and radium, and studied radioactivity extensively and its applications in medicine and science. Her work opened up important insights into atomic physics and nuclear medicine.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-left">
                        <figure style={{ textAlign: "center" }}>
                            <img src={require("../Img/Huy/img1.png")} className="img-fluid" style={{ width: "auto", height: "250px" }} />
                            <figcaption style={{ textAlign: "center", marginTop: "10px" }}>Marie Curie (1867-1934)</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="container mt-4" data-aos="fade-up">
                <p className="lead">Marie Curie conducted several significant studies, especially in the field of radioactivity. Below are some of her most notable works:</p>
                <ul style={{ textAlign: "justify" }} className="list-unstyled">
                    <li data-aos="zoom-in"><h5><b>Discovery of Polonium and Radium (1898)</b>:</h5>
                        Marie and Pierre Curie discovered two new elements: polonium and radium, while studying pitchblende ore. Polonium was named after her homeland (Poland), and radium became known for its glowing properties.</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>Doctoral Thesis on Radioactive Substances (1903)</b>:</h5>
                        This thesis systematized Curie's research on radioactivity, confirming that radioactivity is an atomic property, independent of the element's chemical state.</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>Work on the Properties and Decay of Radium</b>:</h5>
                        Marie Curie determined the atomic mass of radium and published details of its isolation by fractional crystallization. She also studied radioactive decay, one of the discoveries that laid the foundation for the theory of nuclear decay.</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>Applications of Radiation in Medicine</b>:</h5>
                        After discovering radium, Marie Curie began researching its application in cancer treatment. This was an important step forward in the field of radiotherapy.</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>Wartime Research (1914-1919)</b>:</h5> During World War I, Marie Curie developed portable X-ray devices (called “petites Curies”) for battlefield diagnostics.</li>
                </ul>
                <p className="lead mt-3">These studies had a profound impact on nuclear physics and opened the door to crucial medical applications.</p>
            </div>

            <hr data-aos="fade-up" style={{ width: "90%", margin: "0 auto" }} />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="slide-right">
                        <p className="lead">
                            <h4>Applications of Radiation in Medical Treatment</h4>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <b>Discovery of Radium</b>: After discovering radium in 1898, Curie realized that it could be used to treat cancer. Radium emits strong gamma radiation, which can destroy cancer cells when used correctly. <br />
                            <b>Radium in Cancer Treatment</b>: Marie Curie began studying the application of radium in cancer treatment in the early 20th century. Together with her husband, Pierre Curie, she developed a radiation treatment method, called "radiotherapy," to destroy cancerous tumors. This method opened a new path in cancer treatment and continues to be widely used in modern medicine. <br />
                            <b>Curie Institute</b>: To continue research and develop the application of radiation in medicine, Marie Curie founded the Curie Institute (Institut Curie) in Paris in 1920. This institute became a leading center for cancer research and radiotherapy, continuing the work that Marie Curie began.
                        </p>
                    </div>
                    <div className="col-lg-6" data-aos="slide-left">
                        <figure className="d-flex justify-content-around">
                            <a href="https://www.facebook.com/iaeaorg/photos/on-26-december-1898-marie-and-pierre-curie-announced-their-discovery-of-radium-a/10153154478247062/" target="new" rel="noopener noreferrer"><img src={require("../Img/Huy/hinh2.png")} className="img-fluid hover-zoom" alt="Experiment Image 1" /></a>
                            <a href="https://history.aip.org/exhibits/curie/brief/03_radium/radium_8.html" target="new" rel="noopener noreferrer"><img src={require("../Img/Huy/radium.png")} className="img-fluid hover-zoom" alt="Radium Image" /></a>
                        </figure>
                        <figcaption className="text-center mt-2">
                            <small>Images related to Marie Curie's experiments and discovery of Radium</small>
                        </figcaption>
                    </div>
                </div>
            </div>

            <hr data-aos="fade-up" style={{ width: "50%", margin: "0 auto" }} />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="zoom-in">
                        <figure className="text-center">
                            <a href="https://www.openculture.com/2023/11/marie-curies-research-papers-are-still-radioactive-a-century-later.html" target="new" rel="noopener noreferrer">
                                <img src={require("../Img/Huy/notebook.png")} className="img-fluid hover-zoom" style={{ width: "auto", height: "250px" }} />
                            </a>
                            <figcaption>Marie Curie Research Papers Are Still Radioactive a Century Later</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6" data-aos="fade-in">
                        <h4>Other Studies on the Effects of Radiation</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>The Impact of Radiation on Health</b>: Marie Curie studied the effects of radiation on the human body. Although she was not fully aware of the dangers of radiation at the time, her research indicated that radiation could cause serious health problems if not carefully controlled. Her studies led to the development of protective measures and safety regulations regarding the use of radiation. <br />
                            <b>Development of Techniques and Equipment</b>: During World War I, Marie Curie developed mobile X-ray machines, known as "petites Curies," to help doctors diagnose injuries on the battlefield. These devices not only saved many soldiers' lives but also paved the way for the use of X-rays in medicine. <br />
                            <b>Research on Radon</b>: Marie Curie and Pierre Curie also researched radon, a decay product of radium. Although radon was not well-known at the time, her research contributed to the modern understanding of the health risks associated with radon gas, which is now recognized as a leading cause of lung cancer.
                        </p>
                    </div>
                </div>
            </div>

            <div >
                <Footer />
            </div>
        </>
    );
}

export default Research;