import Nobel1 from '../Img/Hung/1903.jpg'
import Nobel2 from '../Img/Hung/1911.jpg'
import '../Css/Hung/Css_Hung.css'
import Footer from './Footer'
import NavBar from './Navbar'
import medal from '../Img/Hung/Nobel_Prize.png'
import nobel1 from '../Img/Hung/Nobel1.jpg'
import nobel2 from '../Img/Hung/Nobel2.JPG'
import application1_nobel1 from '../Img/Hung/Application1_Nobel1.jpg'
import application1_nobel2 from '../Img/Hung/Application1_Nobel2.jpg'
const SelectedWorks = () => {
    return (
        <>
            <div>
                <div >
                    <NavBar />
                </div>

                <div align='center'>
                    <h1>Two great studies</h1>
                </div>
                <div >
                    <div style={{ padding: "3% 5% 3% 5%" }}>
                        <h3><img src={medal} width={35} /> Marie Curie, her husband and Becquerel discovered radioactivity</h3>
                        <div className='Khoidiv row'>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Research Process:</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Marie Curie and her husband Pierre Curie studied radioactivity
                                                after Henri Becquerel discovered that uranium emitted radiation without sunlight.
                                            </li>
                                            <li>
                                                She conducted experiments to measure the radiation intensity of uranium and investigated other materials,
                                                discovering that some minerals also emitted strong radiation.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <img src={nobel1} className='SizeImg_Hung' />
                                    <div>
                                        Marie Curie and her husband and <br /> Becquerel researched together
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Process of Receiving the Nobel Prize in Physics (1903):</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ol>
                                            <li>
                                                Research Initiation: In 1896, Henri Becquerel discovered that uranium emitted radiation.
                                                Marie Curie and her husband Pierre Curie began to study this phenomenon in depth.
                                            </li>
                                            <li>
                                                Publication of Research: They conducted experiments to measure the radiation of uranium and found that some
                                                minerals also emitted strong radiation. In 1898, they published their research, which included the discovery
                                                of polonium and radium.
                                            </li>
                                            <li>
                                                Nominations: In 1903, Marie, Pierre, and Henri Becquerel were nominated for the Nobel Prize in Physics for
                                                their contributions to the study of radioactivity.
                                            </li>
                                            <li>
                                                Award Ceremony: The Nobel Prize was announced in November 1903 and awarded on December 10 of the same year.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <a href="https://en.wikipedia.org/wiki/File:Nobel_Pierre_et_Marie_Curie_1.jpg">
                                        <img src={Nobel1} className='SizeImg_Hung' />
                                    </a>
                                    <div>
                                        Nobel Prize diploma (1903)
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Applications:</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Medicine: Her research paved the way for using radiation in cancer treatment.
                                                Radiation therapy developed from this research helps to destroy cancer cells.
                                            </li>
                                            <li>
                                                Material Science: Understanding radioactivity led to advancements in nuclear
                                                materials and nuclear technology.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <a href="https://www.mskcc.org/timeline/msk-radiation-therapy-timeline-progress">
                                        <img src={application1_nobel1} className='SizeImg_Hung' />
                                    </a>
                                    <div>
                                        Radiation therapy at MSK circa 1949
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ padding: "3% 5% 3% 5%" }}>
                        <h3><img src={medal} width={35} /> Discovery of polonium and radium</h3>
                        <div className='Khoidiv row'>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Research Process:</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Marie Curie isolated and studied two new radioactive elements: polonium (Po) and radium (Ra).
                                            </li>
                                            <li>
                                                She developed a method to extract radium from uranium ore, allowing her to analyze and study
                                                the properties of this element.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <img src={nobel2} className='SizeImg_Hung' />
                                    <div>
                                    Research on polonium and radium
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Process of Receiving the Nobel Prize in Chemistry (1911):</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ol>
                                            <li>
                                                Continuing Research: After the success of her first Nobel Prize, Marie Curie continued her research on radium
                                                and polonium, focusing on extracting radium from uranium ore.
                                            </li>
                                            <li>
                                                Significant Contributions: In 1910, she successfully isolated radium and studied its properties, contributing
                                                to the knowledge of this element.
                                            </li>
                                            <li>
                                                Nominations: In 1911, she was nominated for the Nobel Prize in Chemistry for her discoveries and research related to radium.
                                            </li>
                                            <li>
                                                Award Ceremony: The Nobel Prize in Chemistry was announced in December 1911, and she received the award on December 10 of the same year.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <a href="https://commons.wikimedia.org/wiki/File:Marie_Sk%C5%82odowska-Curie%27s_Nobel_Prize_in_Chemistry_1911.jpg">
                                        <img src={Nobel2} className='SizeImg_Hung' />
                                    </a>
                                    <div>
                                        Nobel Prize diploma (1911)
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <h4>Applications:</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Medicine: Radium was used in radiation therapy to treat cancer, helping to kill cancer cells through radiation.
                                            </li>
                                            <li>
                                                Material Science: Her research also influenced the development of technologies related to nuclear energy and radioactive materials.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <a href="https://www.mskcc.org/timeline/msk-radiation-therapy-timeline-progress">
                                        <img src={application1_nobel2} className='SizeImg_Hung' />
                                    </a>
                                    <div>
                                    The use of concentrated chemical light rays in medicine                                   
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default SelectedWorks;