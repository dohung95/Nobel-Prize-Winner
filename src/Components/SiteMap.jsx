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
            <div id="popupDiv" className="hidden_Hung row">
                <div style={{ float: "right" }} className='col-md-1'>
                    <button id="closeDivBtn" className='button_close_Hung ' style={{ borderRadius: "10px" }}><b>✘</b></button>
                </div>
                <div className='row site_map_text col-md-11'>
                    <h4 align='center' className='Tieude_Hung'>Site Map</h4>
                    <div className='row ' style={{ borderBottom: "1.5px solid white" }}>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-5 '>
                            <Link to='/Biography' onClick={top}>&nbsp;BIOGRAPHY&nbsp;</Link>
                        </div>
                        <div className='col-md-7' style={{ paddingBottom: "2%" }}>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography#mot' onClick={hideDiv}>&nbsp;- Personal Information&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography#hai' onClick={hideDiv}>&nbsp;- Education&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography#ba' onClick={hideDiv}>&nbsp;- Career&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography#mot' onClick={hideDiv}>&nbsp;- Life Story&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Biography#nam' onClick={hideDiv}>&nbsp;- Intimate details of experience&nbsp;</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ borderBottom: "1.5px solid white", paddingTop: "1%" }}>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-5 '>
                            <Link to='/Research' onClick={top}>&nbsp;RESEARCH&nbsp;</Link >
                        </div>
                        <div className='col-md-7 ' style={{ paddingBottom: "2%" }}>
                            <div className='paddingleft_Hung'>
                                <Link to='/Research#discovery' onClick={hideDiv}>&nbsp;- Discovery&nbsp;</Link >
                            </div>
                        </div>
                    </div>

                    <div className='row ' style={{ borderBottom: "1.5px solid white", paddingTop: "1%" }}>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-5 '>
                            <Link to='/Awards' onClick={top}>&nbsp;AWARDS & HONORS&nbsp;</Link>
                        </div>
                        <div className='col-md-7 ' style={{ paddingBottom: "2%" }}>
                            <div className='paddingleft_Hung'>
                                <Link to='/Awards#nobel' onClick={hideDiv}>&nbsp;- Two nobel&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung'>
                                <Link to='/Awards#recognition' onClick={hideDiv}>&nbsp;- Recognition&nbsp;</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ borderBottom: "1.5px solid white", paddingTop: "1%" }}>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-5 '>
                            <Link to='/SelectedWorks' onClick={top}>&nbsp;SELECTED WORKS&nbsp;</Link>
                        </div>
                        <div className='col-md-7' style={{ paddingBottom: "2%" }}>
                            <div className='paddingleft_Hung' onClick={hideDiv} >
                                <Link to='/SelectedWorks#NB1' >&nbsp;- Discovered radioactivity&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' onClick={hideDiv}>
                                <Link to='/SelectedWorks#NB2' >&nbsp;- Discovered Polonium & Radium&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' onClick={hideDiv}>
                                <Link to='/SelectedWorks#vitri3' >&nbsp;- Her influence&nbsp;</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ borderBottom: "1.5px solid white", paddingTop: "1%" }}>
                        <div style={{ paddingLeft: "5%" }} onClick={hideDiv} className='col-md-5 '>
                            <Link to='/References' onClick={top}>&nbsp;REFERENCES&nbsp;</Link>
                        </div>
                        <div className='col-md-7' style={{ paddingBottom: "2%"}} >
                            <div className='paddingleft_Hung' style={{ display:"inline-block" }}>
                                <Link to='/References#Book_Van' onClick={hideDiv}>&nbsp;- Book&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' style={{ display:"inline-block" }}>
                                <Link to='/References#Gallery_Van' onClick={hideDiv}>&nbsp;- Gallery&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' style={{ display:"inline-block" }}>
                                <Link to='/References#Video_Van' onClick={hideDiv}>&nbsp;- Video&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' style={{ display:"inline-block" }}>
                                <Link to='/References#Chart_Van' onClick={hideDiv}>&nbsp;- Chart&nbsp;</Link>
                            </div>
                            <div className='paddingleft_Hung' style={{ display:"inline-block" }}>
                                <Link to='/References#Link_Van' onClick={hideDiv}>&nbsp;- Link&nbsp;</Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: "1% 0% 2% 5%" }} onClick={hideDiv}>
                        <Link to='/Contact' onClick={top} >&nbsp;CONTACT&nbsp;</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Site_Map;
