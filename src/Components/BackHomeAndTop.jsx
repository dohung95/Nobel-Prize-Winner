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
            <div className="Top_Hung">
                {check && (
                    <svg onClick={Top} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                    </svg>
                )}
            </div>
            <div className="BackHome_Hung">
                {check && (
                    <svg onClick={backhome} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0a84ff" class="bi bi-house-up-fill" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z" />
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
                    </svg>
                )}
            </div>
        </>
    );
}

export default BackHomeAndTop;