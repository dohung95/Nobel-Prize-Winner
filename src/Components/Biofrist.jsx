import { ListGroup } from 'react-bootstrap';
import { useEffect } from "react"
import hinh_card from '../Img/Van/Nobel1903.jpg'
import AOS from 'aos'
const Biofirst = () => {
    const alertClicked = () => {

        alert('Corret answer!');
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-8" data-aos="fade-right">
                    <div style={{ textAlign: "justify", fontSize: "1.25rem" }} className='chuhoa'>
                        <p > Marie Curie, from a burning passion for science to the first woman who won two Nobell prizes. Until now, women who do scientific research are few, the women have achieved great success in this industry. And Marie Curie is one of the few. Marie Curie is a physicist, Balan -original French chemist. She was a woman who impressed the world with discoveries that opened up new foundations in physics and chemistry, and also opened the door for advances in techniques, biology and medicine. learn. She was also the one who created a new platform for women in the field of science by becoming the first woman to receive a PhD scientist in France, the first woman to present in Solvbon and especially her. Also the first and only woman to achieve two Nobel prizes in two different areas: Physics and Chemistry.</p>
                        <hr align='center' />
                        <div >Who is this first many women ???</div>
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
                </div>

                <div className="col-md-4" style={{ padding: '0% 3%' }}>
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
                            <ListGroup.Item variant="info">MORE</ListGroup.Item>
                            {/* <p><button>MORE</button></p> */}
                        </ListGroup>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Biofirst
