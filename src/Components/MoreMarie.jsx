import React, { useState, useEffect } from 'react';
// import './YourComponent.css'; // Replace with your actual CSS file name

const MoreMarie = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeContent, setActiveContent] = useState(0);

  useEffect(() => {
    // Set the initial content to be expanded
    setIsExpanded(true);
    setActiveContent(0);
  }, []);

  const handleContentClick = (index) => {
    setIsExpanded(true);
    setActiveContent(index);
  };

  const handleCollapseClick = () => {
    setIsExpanded(false);
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
    <div>
      She was also an active member of Polonia's committees in France dedicated to the Polish cause. After the war, she summarized her wartime experiences in a book, Radiology in War (1919).   

    </div>
  );

  return (
    <div className="responsive-content">
      <button onClick={handleCollapseClick} className="collapse-button">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="content-container" style={{ display: isExpanded ? 'block' : 'none' }}>
        <div className="content-item" onClick={() => handleContentClick(0)} style={{ backgroundColor: activeContent === 0 ? '#f0f0f0' : 'transparent' }}>
          {content1}
        </div>
        <div className="content-item" onClick={() => handleContentClick(1)} style={{ backgroundColor: activeContent === 1 ? '#f0f0f0' : 'transparent' }}>
          {content2}
        </div>
        <div className="content-item" onClick={() => handleContentClick(2)} style={{ backgroundColor: activeContent === 2 ? '#f0f0f0' : 'transparent' }}>
          {content3}
        </div>
      </div>
    </div>
  );
};

export default MoreMarie;