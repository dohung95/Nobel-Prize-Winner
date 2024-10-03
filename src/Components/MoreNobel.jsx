import React, { useState } from 'react';
import '../Css/Van/MoreNobel.css'

const MoreNobel = () => {
    // State để điều khiển việc hiển thị đầy đủ hay thu gọn nội dung
    const [isExpanded, setIsExpanded] = useState(false);

    // Nội dung dài cần hiển thị theo cot
    const longText = [
        "The Nobel Prize is an international award that has been given annually since 1901 to honor individuals who have achieved in the fields of Physics, Chemistry, Medicine, Literature and Peace; the Nobel Peace Prize can be awarded to an individual or an organization.In 1968, the Bank of Sweden added to the award system a prize in the field of Economics to commemorate the scientist Alfred Nobel, who founded the Nobel Prize.",
        "Alfred Nobel was a great scientist and inventor, the owner of 355 patents, the most notable of which was the invention of dynamite.Dedicating his whole life to science, Alfred Nobel reached the pinnacle of glory and wealth. After his death in 1896, Alfred Nobel left a surprising and confusing will in which he left only a small portion of his fortune to his friends and relatives “to prevent the creation of lazy people”. Almost all of his assets were sold for cash, equivalent to 70 million Swedish krona at that time, and deposited in a bank. ",
        " The annual interest will be divided into 5 prizes awarded “to those who have made the greatest contribution to mankind” in the fields of Physics, Chemistry, Biology (or Medicine), Literature, and Peace. Among the Nobel Prizes, the Physics, Chemistry, Literature, and Economics Prizes are decided by the Royal Swedish Academy of Sciences; the Physiology or Medicine Prize is decided by the Nobel Committee of the Karolinska Institute; and the Peace Prize is decided by the Nobel Committee of the Norwegian Parliament."
    ];

    // Hàm để toggle giữa việc mở rộng và thu gọn nội dung
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div align='center' style={{ margin: '30px' }}>
                <h1>SEE MORE ABOUT NOBEL PRIZE</h1>
            </div>
            <div>
               
                <h2>WHAT IS THE NOBEL?</h2>
                <p style={{ marginLeft: '30px' }}>
                    NOBEL is a system of awards given to individuals and organizations with great achievements serving the interests of humanity,
                    according to the will of famous scientist Alfred Nobel.
                </p>
                <h2>Nobel - prestigious award</h2>
                <div className="text-container">
                    <p className={`text-content ${isExpanded ? 'expanded' : ''}`}>
                        {isExpanded ? longText.join(" ") : `${longText.join(" ").slice(0, 263)}...`}
                    </p>
                    <button onClick={toggleReadMore} className="read-more-btn">
                        {isExpanded ? 'Hide' : 'See more'}
                    </button>
                    {/* Chia thành 3 cột khi mở rộng */}
                    {isExpanded && (
                        <div className="row content-columns">
                            {longText.map((text, index) => (
                                // <div key={index} className="col-md-4 content-block">
                                <div key={index} className="col-md-4 col-sm-12 content-block">
                                    {text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div >
        </>
    );
}

export default MoreNobel;