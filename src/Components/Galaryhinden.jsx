import '../Css/Van/Galaryhinden.css';
import React from 'react';
import h1 from '../Img/Van/Galaryhiden/h1.png';
import h3 from '../Img/Van/Galaryhiden/h3.jpg';
import h5 from '../Img/Van/Galaryhiden/h5.jpg';
import h6 from '../Img/Van/Galaryhiden/h6.jpg';
import h7 from '../Img/Van/Galaryhiden/h7.png';
import h8 from '../Img/Van/Galaryhiden/h8.png';
import h9 from '../Img/Van/Galaryhiden/h9.jpg';
import h10 from '../Img/Van/Galaryhiden/h10.png';
import h12 from '../Img/Van/Galaryhiden/h12.png';
import h13 from '../Img/Van/Galaryhiden/h13.png';
import h14 from '../Img/Van/Galaryhiden/h14.png';
import h15 from '../Img/Van/Galaryhiden/h15.jpg';
import h16 from '../Img/Van/Galaryhiden/h16.jpg';
import h17 from '../Img/Van/Galaryhiden/h17.png';
import h18 from '../Img/Van/Galaryhiden/h18.jpg';
import h19 from '../Img/Van/Galaryhiden/h19.jpg';
import h20 from '../Img/Van/Galaryhiden/h20.png';
import h21 from '../Img/Van/Galaryhiden/h21.jpg';
import h23 from '../Img/Van/Galaryhiden/h23.png';
import h25 from '../Img/Van/Galaryhiden/h25.png';
import h26 from '../Img/Van/Galaryhiden/h26.jpg';

const PopupComponent = ({ onClose }) => {
    const Van_images = [h1, h3, h5, h6, h7, h8, h9, h10, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h23, h25, h26];

    return (
        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="scroll-container" id='gala'>
                        {Van_images.map((image, index) => (

                            <img style={{ objectFit: 'cover' }} src={image} key={index} width={400} alt={`image-${index}`} className="img-fluid img-full-fit " />

                        ))}
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default PopupComponent;
