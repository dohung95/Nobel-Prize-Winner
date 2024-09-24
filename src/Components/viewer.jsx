import React, { useState, useEffect } from 'react';
import viewer from '../Img/Dat/icon-viewer.png';



const Viewer = () => {
    const [views, setViews] = useState(0);

  useEffect(() => {
    // Lấy số lượt truy cập từ localStorage
    const currentViews = localStorage.getItem("page_views");
    
    // Nếu có lượt truy cập trước đó, tăng số lượt truy cập
    if (currentViews) {
      const newViews = parseInt(currentViews) + 1;
      setViews(newViews);
      localStorage.setItem("page_views", newViews);
    } else {
      // Nếu đây là lần truy cập đầu tiên
      setViews(1);
      localStorage.setItem("page_views", 1);
    }
  }, []);

    return ( 
        <>
            <div className="header-viewer-dat">
                <img src={viewer} style={{width:'40px', paddingTop: '5px'}}/>
                <div style={{color:'white', fontSize: '30px', float: 'right'}}>{views}</div>
            </div>
        </>
     );
}
 
export default Viewer;