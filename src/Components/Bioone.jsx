import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';
import AOS from 'aos'
import { useEffect } from "react"
import fiveyears from '../Img/Van/form ngang/nho.png'
import birth_place from '../Img/Van/form ngang/birth_place.png'
import giadinh_marie from '../Img/Van/form ngang/giadinh_marie.jpg'
import marie_muoituoi from '../Img/Van/form ngang/marie_muoituoi.png'
import chiem from '../Img/Van/slide/chiem.png'
import thefirstplace from '../Img/Van/slide/thefirstplace.jpg'
import trunghoc from '../Img/Van/slide/trunghoc.jpg'
import thechien1 from '../Img/Van/slide/thechien1.jpg'
import phongxa from '../Img/Van/form ngang/phongxa.png'
import sorbonne from '../Img/Van/form ngang/sorbonne.png'
import giadinhmari from '../Img/Van/slide/giadinhmari.jpg'
import newelement from '../Img/Van/nguyento-mrsizemik/newelement.png'
function Bio_mot() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            About Marie Curie
                            <div >
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="hinh Maria luc nho"
                                        src={fiveyears} />
                                    <Figure.Caption>
                                        clik me
                                    </Figure.Caption>
                                </Figure>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Her education
                            <div>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="24 tuoi"
                                        src={trunghoc} />
                                    <Figure.Caption>
                                        click me
                                    </Figure.Caption>
                                </Figure>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            Marie nỗ lực, phấn đấu
                            <div>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="sorbonne"
                                        src={sorbonne} />
                                    <Figure.Caption>
                                        click me
                                    </Figure.Caption>
                                </Figure>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <div style={{ textAlign: "justify", fontSize: "1.25rem" }} className='chuhoa'>
                                <p> Marie Curie whose real name is Marya Sklodowska, born on November 7, 1867, in Warsaw, Balan, the youngest child in the family has 5 children. Her parents are a teacher. Her mother, Bronislawa Sktodowska, is the principal of a boarding school reputation for women. Her father, Wladyslaw Sklodowski, teaches physics and mathematics about her balan heritage. As a result of patriotism, Russian supervisors forced him to be in a lower salary. He also lost his savings because of a bad investment. To raise 5 children, they have to accept boarding students. This will cause death. Maria's eldest siblings, her sister Zofia, suffered from a fever from one of the people who stayed in and died. A few years later, when Maria was 10, her mother died of tuberculosis. The tragedies have led Maria to abandon the Catholicism- the faith of her mother- and become you in the impossible theory. Her father will not forgive himself for losing his family's savings. However, his children will remember him as a man who nurtured them in terms of emotion and intelligence. However, Marie Curie did not give up but continued to find ways to continue the higher education path.</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <div style={{ textAlign: "justify", fontSize: "1.25rem" }} className='chuhoa'>
                                <p>Marie always holds the top position in schools in the years of school when she was ten years old, Maria started attending J. Sikorska boarding school; After that, she attended a high school for girls, where she graduated on June 12, 1883 with the gold medal. Warsaw, the school is only for male students. The Russian Empire prohibits women from attending college. She and her sister Bronisława participated in secret flight college, a Polish patriotic higher education organization to receive female students.</p>
                                <p>Maria agreed with her sister, Bronisława, that she would financially support Bronisława during medical time in Paris, in exchange for the same support two years later. Regarding this, Maria received a first place, a tutor at Warsaw, then a tutor for two years in Szczuki with a family of Dien Trang, the family żorawskis, her father's relatives. While working for her family later, she loved their son, Kazimierz żorawski, a prominent mathematician in the future. His parents protested the idea he married a poor relative, and Kazimierz could not object to them. Mary's loss of relationship with żorawski is a tragedy for both. He soon got a doctorate and pursued an academic career as a mathematician, becoming a professor and principal of Kraków University. However, as an old man and a mathematical professor at Warsaw University of Technology, he still sat down in front of the Maria Skłodowska statue built in 1935 before the Radium Institute, where she was founded in the year. 1932. </p>
                                <p>While working as a tutor, she continued to self-study and research whenever she had time.</p>
                            </div >
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <div style={{ textAlign: "justify", fontSize: "1.25rem" }} className='chuhoa'>
                                <p> In 1891, when Maria was 24 years old, she was finally able to move with her sister to Paris and now used the name Marie. She enrolled at the University of Paris—called the Sorbonne—where she studied physics and mathematics, starting her path into scientific research.</p>
                                <p> Shortly after arriving in Paris, thanks to her extraordinary efforts, Marie quickly became one of the most outstanding students at the Sorbonne University. While still a third-year student, she was awarded a master's degree in physics. And in her fourth year, she was awarded a master's degree in arithmetic. In addition, Marie also spoke and wrote in languages ​​such as French, Russian, English, German and was determined to do a doctoral thesis in Physics.</p>
                                <p> She studied the magnetic properties of alloys and wrote the first scientific project here.</p>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
                <Col sm={3} >
                    <div className="row align-items-center " data-aos="fade-right">
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="gia dinh Maria"
                                        src={giadinh_marie} />
                                    <Figure.Caption>
                                        Marie's family
                                    </Figure.Caption>
                                </Figure>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="Warsaw"
                                        src={birth_place} />
                                    <Figure.Caption>
                                        Warsaw-Marie's brith-place
                                    </Figure.Caption>
                                </Figure>
                                <Figure>
                                    <div align='center'>
                                        <Figure.Image
                                            width={300}
                                            height={1}
                                            alt="hinh Maria 10 tuoi"
                                            src={marie_muoituoi} />
                                        <Figure.Caption>
                                            Marie was a child
                                        </Figure.Caption>
                                    </div>
                                </Figure>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="gia dinh Maria"
                                        src={giadinhmari} />
                                    <Figure.Caption>
                                        Marie's family
                                    </Figure.Caption>
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="chi em"
                                        src={chiem} />
                                    <Figure.Caption>
                                        Maria (trái) và chị gái Bronisława, 1886.
                                    </Figure.Caption>
                                </Figure>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="the chien 1"
                                        src={thechien1} />
                                    <Figure.Caption>
                                        Boi canh
                                    </Figure.Caption>
                                </Figure>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="phong xa"
                                        src={phongxa} />
                                    <Figure.Caption>
                                        phong xa
                                    </Figure.Caption>
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="noi tien hanh cong trinh dau tien"
                                        src={thefirstplace} />
                                    <Figure.Caption>
                                        Số 66 đường Krakowskie Przingmiescie, Warszawa, nơi Maria tiến hành công trình khoa học đầu tiên của mình (1890–91)
                                    </Figure.Caption>
                                </Figure>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={1}
                                        alt="new element"
                                        src={newelement} />
                                    <Figure.Caption>
                                        New element
                                    </Figure.Caption>
                                </Figure>                       

                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Col>
            </Row>
        </Tab.Container >
    );
}

export default Bio_mot;