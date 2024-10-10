// import MoreMarieSecond from './MoreMarieSecond';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Biofour = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, 
        });
    }, []);
    
    return (
        <>
            <div className='container'>
                <h1 className="text-center mb-4" data-aos="fade-up" style={{ backgroundColor: ' #F2F2CE', borderRadius: '1000px', color:'black' }} >Career journey</h1>

                <div >
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-sm-4">
                                <div style={{ textAlign: "justify", color: " white" }} data-aos="fade-right">
                                    <h3> * Marie Curie devoted her whole life to science, brave and impartial.</h3>
                                </div>
                                <div style={{ textAlign: "justify", fontSize: "1.19rem", color: " white" }} className='Van-chuhoa'>
                                    <p> For many people today, accessing higher education is often not too difficult. But for Marie, that time was a huge, persistent effort. </p>
                                    <p> In addition to successfully isolating the radioactive substance radium, the Curies also demonstrated its role in inhibiting cancer cells, and with the successful isolation of this substance, In addition to helping to overturn established ideas in physics and chemistry, Curie's work had a profound impact on the social sphere. To achieve her scientific achievements, she had to overcome barriers, both in her homeland and in her adopted country, placed in her path because she was a woman.</p>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div style={{ textAlign: "justify", color: " white" }} data-aos="zoom-in">
                                    <h3 > * During World War I</h3>
                                </div>
                                <div style={{ textAlign: "justify", fontSize: "1.19rem", color: " white" }} className='Van-chuhoa'>
                                    <p> She researched and purchased X-ray equipment, mobile X-ray cars and auxiliary generators to treat wounded soldiers right on the battlefield. These machines were powered by Radium gas, a colorless radioactive gas emitted by radium, later recognized as radon, to sterilize infected tissue. She became the director of the Red Cross X-ray service and founded the first French Military X-ray Center. You see, all of her inventions were donated to science in general, or to save lives, not used for personal gain. That is what made her a great person honored by the whole world. Her image was honored to be printed on the Polish Zloty and the French franc. To honor her and her husband, scientists took the 96th element in the periodic table, Curium, symbol Cm, to honor her and Pierre.</p>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div style={{ textAlign: "justify", color: " white" }} data-aos="zoom-in">

                                    <h3 data-aos="fade-left"> * She was known for her honesty and moderation. </h3>
                                </div>
                                <div style={{ textAlign: "justify", fontSize: "1.19rem", color: " white" }} className='Van-chuhoa'>

                                    <p> After receiving a small scholarship in 1893, she returned it in 1897 as soon as she began earning a living. She gave most of her first Nobel Prize money to friends, family, students, and research associates. In an unusual decision, Curie deliberately chose not to patent her process for isolating radium so that the scientific community could work unhindered. She insisted that monetary gifts and awards be given to scientific organizations with which she was affiliated rather than to herself. She and her husband often refused awards and medals. Albert Einstein is said to have remarked that she was perhaps the only person who could not be bribed by fame.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container' style={{ color: 'white', borderBottom: '3px solid', margin: "10px auto  ", padding: '0px', borderTop: '3px solid', width: '80%' }}>
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "5px solid black", margin: " 1% auto 0" }} />
                    <hr style={{ borderTop: "10px solid #D69840", margin: "0 auto", width: "70%" }} />
                    <hr style={{ width: "50%", textAlign: "center", borderTop: "2px solid black", margin: "0 auto" }} />
                    <hr style={{ borderTop: "2px solid white", margin: "0 auto ", width: "70%" }} /> <br />

                </div>
            </div >

        </>
    );
}

export default Biofour;