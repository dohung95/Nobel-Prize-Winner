import React, { useState } from 'react';
import '../Css/Van/MoreMarieSecond.css'; // Replace with your actual CSS file name
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Dropdown from 'react-bootstrap/Dropdown'; // Import Dropdown component

const MoreMarieSecond = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const content1 = (
    <div>
      What you may not know is that Pitchblende is a complex mineral, and chemically separating its components is a difficult task. Furthermore, the radium contained in ore is extremely small, accounting for about 1/10g of radium in new raw ore. So, to successfully separate radioactive substances, the couple had to filter and do countless experiments. Exactly, the number was up to thousands of experiments repeated over the course of 4 years, in difficult conditions, poor laboratories, not enough specialized tools and both had to be taught to teach strategies. Ultimately, they successfully separated radioactive substances and, along with them, researched radium to treat cancer. The couple received the first Nobel Prize in Physics in 1903.
    </div>
  );

  const content2 = (
    <div>
      Additionally, shortly after the war began, she tried to donate her Nobel gold medals to the war effort but the French National Bank refused to accept them. She bought war bonds, using the prize money. his Nobel Prize. She said:
      <blockquote className="quote">
        "I will give up the little gold I possess. I will add to it the scientific medals, which are quite useless to me. There is another thing: by sheer laziness, I have allowed the money for my second Nobel Prize stays in Stockholm in the Swedish crown. This is the main part of what we own. I want to bring it back here and invest it in war loans . Only, I have no illusions: this money may be lost."
      </blockquote>
    </div>
  );

  const content3 = (
    <div>She was also an active member in committees of Polonia in France dedicated to the Polish cause. After the war, she summarized her wartime experiences in a book, Radiology in War (1919).</div>

  );

  const content4 = (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        You can learn more here!
      </Dropdown.Toggle> More link
      <Dropdown.Menu>
        <Dropdown.Item href="https://en.wikipedia.org/wiki/Marie_Curie">
          Wikipedia
        </Dropdown.Item>
        <Dropdown.Item href="https://history.aip.org/exhibits/curie/stud1.htm">
          More Information
        </Dropdown.Item>
        <Dropdown.Item href="https://www.britannica.com/biography/Marie_Curie/Death-of-Pierre-and-second-Nobel-Prize">
          More Curie
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return (


    <div className="custom-link" >

      <button onClick={handleButtonClick} style={{ border: '1px solid white', backgroundColor:"#D69840", textAlign:'center' }}>LICK HERE to more extention</button>

      {isExpanded && (
        <div className="expanded-content">
          <div className="row">
            <div className="column">
              {content1}
            </div>
            <div className="column">
              {content2}
            </div>
          </div>
          <div className="row">
            <div className="column">
              {content3}
            </div>
            <div className="column">
              {content4}
            </div>
          </div>
        </div>
      )}


      <div className="custom-link" style={{alignItem:'Center'}}  >
        <a href='#' onClick={handleButtonClick} > You may read ONCE MORE again!!! </a>
      </div>
    </div>
  );
};

export default MoreMarieSecond;