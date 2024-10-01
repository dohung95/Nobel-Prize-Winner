import NavBar from './Navbar'
import Footer from './Footer'
import Bioone from './Bioone'
import Biofrist from './Biofrist'
import Biotwo from './Biotwo'
import Biothree from './Biothree'
import Biofour from './Biofour'
import "../Css/Van/Biography.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

//import Thunghiem from '../Components/Thunghiem.jsx' //   thử nghiêm thanh công
const Biography = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // thời gian hiệu ứng chạy, tính bằng ms
        });
    }, []);
    return (
        <>
            <div className='Van_khoibio_bio '>
                <div>

                    <div className='quote' data-aos="fade-up">
                        <blockquote className="custom-quote">
                            <div>The quote "In science, what matters is what is discovered, not the researcher themselves".</div>
                            <footer style={{ fontSize: '5rem' }}>— Marie Curie</footer>
                        </blockquote>
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Biofrist />
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Bioone />
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Biotwo />
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Biothree />
                    </div>

                    <div className=" Van_sheet_bio" >
                        <Biofour />
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Biography;