import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Dropdown from 'react-bootstrap/Dropdown'; // Import Dropdown component
import { ListGroup, Figure, Container, Row, Col } from "react-bootstrap";
import hinhquot2 from '../Img/Van/hinhquot2.png'
import PopupComponent from './Galaryhinden'
const MoreMarieSecond = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const top = () => {
    document.documentElement.scrollTop = 0;
}
  const content1 = (
    <div>
      *** What you may not know is <a href="https://en.wikipedia.org/wiki/Uraninite#Overview" target='new'><b>that Pitchblende</b></a> is a complex mineral, and chemically separating its components is a difficult task. Furthermore, the radium contained in ore is extremely small, accounting for about 1/10g of radium in new raw ore. So, to successfully separate radioactive substances, the couple had to filter and do countless experiments. Exactly, the number was up to thousands of experiments repeated over the course of 4 years, in difficult conditions, poor laboratories, not enough specialized tools and both had to be taught to teach strategies. Ultimately, they successfully separated radioactive substances and, along with them, researched radium to treat cancer. The couple received the first Nobel Prize in Physics in 1903.
    </div>
  );

  const content2 = (
    <div>
      *** Additionally, shortly after the war began, she tried to donate her Nobel gold medals to the war effort but the French National Bank refused to accept them. She bought war bonds, using the prize money. his Nobel Prize. She said:
      <blockquote className="quote">
        "I will give up the little gold I possess. I will add to it the scientific medals, which are quite useless to me. There is another thing: by sheer laziness, I have allowed the money for my second Nobel Prize stays in Stockholm in the Swedish crown. This is the main part of what we own. I want to bring it back here and invest it in war loans . Only, I have no illusions: this money may be lost."
      </blockquote>
    </div>
  );

  const content3 = (
    <div> *** She was also an active member in committees of Polonia in France dedicated to the Polish cause. After the war, she summarized her wartime experiences in a book, Radiology in War (1919).
      <div className='container' style={{ color: 'black', margin: "10px auto  ", padding: '0px',  width: '80%' }}>
        <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
        <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
        <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto 0" }} />
        <hr style={{ borderTop: "2px solid black", margin: "0 auto ", width: "70%" }} /> <br />
      </div>
      <div>
        <h3>Review questions:</h3>
        <ul class="dropdown">
          <li>*<Link to='/SelectedWorks' onClick={top}>Question 1:How do her contributions impact today?</Link></li>
          <li>*<Link to='/Awards' onClick={top}>Question 2:What awards have she received during your career?</Link></li>
          <li>*<Link to='/Biography' onClick={top}>Question 3:What do you learn from Marie Curie's life story?</Link></li>
          <li>*<Link to='/Research' onClick={top}>Question 4:In what scientific fields did Marie Curie contribute?</Link></li>
        </ul>
      </div>
    </div>
    
  );

  const content4 = (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        You can learn more here!
      </Dropdown.Toggle> More link
      <div className='Van-khoitron-quot' style={{ alignItems: 'center', width: '45%', textAlign: 'center', marginBottom: '3%' }}>
        <Figure>
          <Figure.Image
            width={500}
            height={300}
            alt="quot1"
            src={hinhquot2} />
          <Figure.Caption>
            <span class="Van-quote-mark" >
              <h2 style={{ color: 'black', fontStyle: 'italic' }}>
                Nothing in life is to be feared, it is only to be understood.
              </h2>
            </span>
          </Figure.Caption>
        </Figure>
      </div >
      <Dropdown.Menu>
        <Dropdown.Item href="https://en.wikipedia.org/wiki/Marie_Curie" target='new'>
          Wikipedia
        </Dropdown.Item>
        <Dropdown.Item href="https://history.aip.org/exhibits/curie/stud1.htm"  target='new'>
          More Information
        </Dropdown.Item>
        <Dropdown.Item href="https://history.aip.org/exhibits/curie/curie.pdf" target='new'>
          More Curie
        </Dropdown.Item>
        <Dropdown.Item href="https://www.nobelprize.org" target='new'>
          The Nobel prize
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
   
    <div className="theEnd">
      <div className="custom-link VanBio_custom-link" style={{ textAlign: 'left' }}>

        <button onClick={handleButtonClick} style={{ border: '1px solid white', backgroundColor: "#D69840", textAlign: 'center', marginLeft: '10%' }}>CLICK HERE to more extention</button>

        {isExpanded && (
          <div className="expanded-content VanBio_expanded-content " style={{ color: 'black', }}>
            <Row>
              <div className="column VanBio_colum">
                {content1}
              </div>

              <div className="column VanBio_colum">
                {content2}
              </div>
            </Row>
            <Row>
              <div className="column VanBio_colum">
                {content3}
              </div>

              <div className="column VanBio_colum">
                {content4}
              </div>
            </Row>


            <div className="custom-link VanBio_custom-link" style={{ alignItem: 'Center' }}  >
              <a href='#gala' onClick={handleOpenPopup} > You may looking for pictrues!!! </a>
              {isPopupOpen && <PopupComponent onClose={handleClosePopup} />}
            </div>
          </div>

        )
        };
      </div>
    </div>
  )
}
export default MoreMarieSecond;