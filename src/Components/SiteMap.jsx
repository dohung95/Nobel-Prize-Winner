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
                    <h4 align='center' className='Tieude_Hung'>Site Map</h4>
                    <div className='row '>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-6 LinkReal_Hung'>
                            <Link to='/Biography' onClick={top}>&nbsp;BIOGRAPHY&nbsp;</Link>
                        </div>
                        <div className='col-md-6'>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography' onClick={hideDiv}>- Personal Information&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography' onClick={hideDiv}>- Education&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography' onClick={hideDiv}>- Career&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography' onClick={hideDiv}>- Life Story&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography' onClick={hideDiv}>- Intimate details of experience&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-6 LinkReal_Hung'>
                            <Link to='/Research' onClick={top}>&nbsp;RESEARCH&nbsp;</Link >
                        </div>
                        <div className='col-md-6 '>
                            <div className='paddingleft_Hung'>
                                <Link to='/Research#discovery' onClick={hideDiv}>- Discovery&nbsp;</Link >
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-6 LinkReal_Hung'>
                            <Link to='/Awards' onClick={top}>&nbsp;AWARDS & HONORS&nbsp;</Link>
                        </div>
                        <div className='col-md-6 '>
                            <div className='paddingleft_Hung'>
                                <Link to='/Awards#nobel' onClick={hideDiv}>- Two nobel&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Awards#recognition' onClick={hideDiv}>- Recognition&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-6 LinkReal_Hung'>
                            <Link to='/SelectedWorks' onClick={top}>&nbsp;SELECTED WORKS&nbsp;</Link>
                        </div>
                        <div className='col-md-6'>
                            <div className='paddingleft_Hung' onClick={hideDiv}>
                                <Link to='/SelectedWorks#vitri1' >- Two outstanding studies&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' onClick={hideDiv}>
                                <Link to='/SelectedWorks#vitri2' >- Her influence&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-6 LinkReal_Hung'>
                            <Link to='/References' onClick={top}>&nbsp;REFERENCES&nbsp;</Link>
                        </div>
                        <div className='col-md-6'>
                            <div className='paddingleft_Hung'>
                                <Link to='/References' onClick={hideDiv}>- Image&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/References' onClick={hideDiv}>- Video&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/References' onClick={hideDiv}>- Link&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: "5%", paddingBottom: "3%" }} onClick={hideDiv}>
                        <Link to='/Contact' onClick={top} >&nbsp;CONTACT&nbsp;</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Site_Map;
