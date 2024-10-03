import React from 'react';
import { useMediaQuery } from 'react-responsive';

import van_sach from '../Data/Van/van_sach.json'



const Didyouknow = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
    const getImagePath = (imageName) => {
        return require(`../Img/Van/sotay/${imageName}`);
    };

    return (
        <div className="Van_refer_sach">
            {isMobile ? (
                // Mobile view with single column
                <div className="Van_refer_sach ">
                    {van_sach.slice(0, 3).map((book) => (
                        <div key={book.id} className="Van_refer_book">
                            <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
            ) : isTabletOrDesktop ? (
                // Tablet or Desktop view with 3 columns
                <div className="Van_refer_row">
                    {van_sach.slice(0, 3).map((book) => (
                        <div key={book.id} className="col" style={{ flex: '1 1 30%', margin: '0 10px' }}>
                            <img src={getImagePath(book.image)} alt={book.title} className='Van_Didyouknow_sach' />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
            ) : null}

           
        </div>
    );
};






export default Didyouknow;