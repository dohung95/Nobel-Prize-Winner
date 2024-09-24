import React, { useState, useEffect } from 'react';
import viewer from '../Img/Dat/icon-viewer.png';
import { useLocation } from 'react-router-dom';



const Viewer = () => {
    const [views, setViews] = useState(0);
    const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentViews = localStorage.getItem(currentPath) || 0;
    setViews(parseInt(currentViews, 10)+1);
    localStorage.setItem(currentPath, views);
    }, [location]);

    return ( 
        <>
            <div className="header-viewer-dat">
                <img src={viewer} style={{width:'50px', paddingTop: '5px'}}/>
                <div style={{color:'white', fontSize: '40px', float: 'right'}}>{views}</div>
            </div>
        </>
     );
}
 
export default Viewer;