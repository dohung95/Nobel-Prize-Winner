import "../Css/Huy/Research.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import DataResearch from "../Data/Huy/data.json"
const Research = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    const path = process.env.PUBLIC_URL
    return (
        <>
            <h1 data-aos="flip-up" style={{textAlign: "center", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", fontFamily: "Sans-serif"}}>Scientific Research</h1>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8" data-aos="fade-right" style={{ border: "1px solid black", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                        <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>{DataResearch[0].p1}</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-left" style={{ marginTop: "2%" }}>
                        <figure style={{ textAlign: "center" }}>
                            <img src={`${path}${DataResearch[0].hinh1}`} className="img-fluid" style={{ width: "auto", height: "250px", border: "5px double gold", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }} />
                            <figcaption style={{ textAlign: "center", marginTop: "10px" }}><b>{DataResearch[0].caption}</b></figcaption>
                        </figure>
                    </div>
                </div>
            </div>


            <div className="container mt-4" data-aos="fade-up" style={{ border: "1px solid black", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                <p className="fst-italic" style={{fontSize: "1.4rem"}}>{DataResearch[0].p2}</p>
                <ul style={{ textAlign: "justify" }} className="list-unstyled">
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li1}</b>:</h5>
                        {DataResearch[0].li11}</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li2}</b>:</h5>
                        {DataResearch[0].li21}</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li3}</b>:</h5>
                        {DataResearch[0].li31}</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li4}</b>:</h5>
                        {DataResearch[0].li41}</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li5}</b>:</h5>
                        {DataResearch[0].li51}</li>
                </ul >
                <p className="fst-italic" style={{fontSize: "1.4rem", textAlign: "justify"}}>{DataResearch[0].p3}</p>
                <p className="fst-italic" style={{fontSize: "1.4rem", textAlign: "justify"}}>{DataResearch[0].p7}</p>
                <ul style={{ textAlign: "justify" }} className="list-unstyled">
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li6}</b></h5>
                        {DataResearch[0].li61}</li>
                    <br />
                    <li data-aos="zoom-in"><h5><b>{DataResearch[0].li7}</b></h5>
                        {DataResearch[0].li71}</li>
                </ul>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="slide-right">
                        <p className="lead" style={{ marginTop: "5%" }}>
                            <h4>{DataResearch[0].p4}</h4>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DataResearch[0].p5}</b>: {DataResearch[0].p51} <br />
                            <b>{DataResearch[0].p52}</b>: {DataResearch[0].p53} <br />
                            <b>{DataResearch[0].p54}</b>: {DataResearch[0].p55}
                        </p>
                    </div>
                    <div className="col-lg-6" data-aos="slide-left" >
                        <figure className="d-flex justify-content-around" style={{ border: "5px double gold", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                            <a href="https://www.facebook.com/iaeaorg/photos/on-26-december-1898-marie-and-pierre-curie-announced-their-discovery-of-radium-a/10153154478247062/" target="new" rel="noopener noreferrer"><img src={`${path}${DataResearch[0].hinh2}`} className="img-fluid hover-zoom" alt="Experiment Image 1" /></a>
                            <a href="https://history.aip.org/exhibits/curie/brief/03_radium/radium_8.html" target="new" rel="noopener noreferrer"><img src={`${path}${DataResearch[0].radium}`} className="img-fluid hover-zoom" alt="Radium Image" /></a>
                        </figure>
                        <figcaption className="text-center mt-2">
                            <b>{DataResearch[0].caption1}</b>
                        </figcaption>
                    </div>
                </div>
            </div>

            <hr data-aos="fade-up" style={{ width: "50%", margin: "0 auto" }} />

            <div className="container" style={{ marginTop: "3%", marginBottom: "2%" }}>
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="zoom-in">
                        <figure className="text-center">
                            <a href="https://www.openculture.com/2023/11/marie-curies-research-papers-are-still-radioactive-a-century-later.html" target="new" rel="noopener noreferrer">
                                <img src={`${path}${DataResearch[0].notebook}`} className="img-fluid hover-zoom" style={{ width: "auto", height: "250px", border: "5px double gold", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }} />
                            </a>
                            <figcaption style={{ marginTop: "2%" }}><b>{DataResearch[0].caption2}</b></figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6" data-aos="slide-left">
                        <h4>{DataResearch[0].h4}</h4>
                        <p style={{ textAlign: "justify" }}>
                            <b>{DataResearch[0].p6}</b>: {DataResearch[0].p61} <br />
                            <b>{DataResearch[0].p62}</b>: {DataResearch[0].p63} <br />
                            <b>{DataResearch[0].p64}</b>: {DataResearch[0].p65}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{border: "1px solid black", padding: "10px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", marginBottom: "2%"}}>
                <div className="row">
                    <div className="col-md-6 Strengths-Huy" data-aos="slide-left">
                        <h2>{DataResearch[0].S}</h2>
                        <ul style={{ listStyleType: "disc", textAlign: "justify" }}>
                            <li>{DataResearch[0].li8}</li>
                            <li>{DataResearch[0].li9}</li>
                        </ul>
                    </div>   
                    <div className="col-md-6" data-aos="slide-right">
                        <h2>{DataResearch[0].W}</h2>
                        <ul style={{ listStyleType: "disc", textAlign: "justify" }}>
                            <li>{DataResearch[0].li10}</li>
                            <li>{DataResearch[0].li101}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Research;