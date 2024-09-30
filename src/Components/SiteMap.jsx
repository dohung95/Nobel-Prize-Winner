import '../Css/Hung/Site_Map.css';
import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
const Site_Map = () => {
    const hideDiv = useCallback(() => {
        const popupDiv = document.getElementById('popupDiv');
        if (popupDiv) {
            popupDiv.style.display = 'none'; // Ẩn khối div
        }
    }, []); // Không phụ thuộc vào state hoặc props

    useEffect(() => {
        const showDivBtn = document.getElementById('showDivBtn');
        const closeDivBtn = document.getElementById('closeDivBtn');

        if (showDivBtn) {
            showDivBtn.addEventListener('click', function () {
                const popupDiv = document.getElementById('popupDiv');
                if (popupDiv) {
                    popupDiv.style.display = 'block'; // Hiển thị khối div
                }
            });
        }

        if (closeDivBtn) {
            closeDivBtn.addEventListener('click', hideDiv);
        }

        return () => {
            // Dọn dẹp các sự kiện khi component bị unmount
            if (showDivBtn) {
                showDivBtn.removeEventListener('click', function () { });
            }
            if (closeDivBtn) {
                closeDivBtn.removeEventListener('click', hideDiv);
            }
        };
    }, [hideDiv]); // Thêm hideDiv vào dependency array
    const top = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div id="showDivBtn" className='Site_Map_Hung'>
                <img src={require('../Img/Hung/sitemap.png')} alt="Site Map" />
            </div>
            <div id="popupDiv" className="hidden row">
                <div style={{ float: "right" }} className='col-md-1'>
                    <button id="closeDivBtn" className='button_close_Hung ' style={{ borderRadius: "30%" }}><b>✘</b></button>
                </div>
                <div className='row site_map_text col-md-11'>
                    <h4 align='center' style={{ textShadow: "3px 3px 3px black" }}>Site Map</h4>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/Biography' onClick={top}>BIOGRAPHY</Link>
                    </div>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/Research' onClick={top}>RESEARCH</Link >
                    </div>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/Awards' onClick={top}>AWARDS AND HONORS</Link>
                    </div>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/SelectedWorks' onClick={top}>SELECTED WORKS</Link>
                    </div>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/References' onClick={top}>REFERENCES</Link>
                    </div>
                    <div style={{ padding:"0% 0% 5% 5%"  }} onClick={hideDiv}>
                        <Link to='/Contact' onClick={top} >CONTACT</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Site_Map;
