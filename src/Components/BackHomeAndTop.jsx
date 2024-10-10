import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
const BackHomeAndTop = () => {
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)

    const Follow = () => {
        if (window.scrollY > 150) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    const Top = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    const backhome = () => {
        navigate('/');
        Top();
    }

    useEffect(() => {
        window.addEventListener('scroll', Follow)
        return () => {
            window.removeEventListener('scroll', Follow)
        }
    }, []);

    return (
        <>
            <div className="Button_Hung">              
                <div className="BackHome_Hung">
                    {check && (
                        <svg onClick={backhome} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                        </svg>

                    )}
                </div>
                <div className="Top_Hung">
                    {check && (
                        <svg onClick={Top} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                      </svg>
                    )}
                </div>
            </div>
        </>
    );
}

export default BackHomeAndTop;