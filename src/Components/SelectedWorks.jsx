import Nobel1 from '../Img/Hung/1903.jpg'
import Nobel2 from '../Img/Hung/1911.jpg'
import '../Css/Hung/Css_Hung.css'
import Footer from './Footer'
import NavBar from './Navbar'
const SelectedWorks = () => {
    return (
        <>
            <div>
                <div >
                    <NavBar />
                </div>


                <div >
                    <div style={{ padding: "3% 5% 3% 5%" }}>
                        <div className='Khoidiv row'>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    Nobel Prize in Physics (1903): Marie Curie, along with her husband Pierre Curie and Henri Becquerel,
                                    was awarded the Nobel Prize in Physics for their joint research on radioactivity. Their work laid the foundation for the
                                    understanding of radioactive elements and the phenomenon of radiation, significantly advancing the field of physics.
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <img src={Nobel1} className='SizeImg_Hung' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: "3% 5% 3% 5%" }}>
                        <div className='Khoidiv row'>
                            <div className='col-md-6'>
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    Nobel Prize in Chemistry (1911): Marie Curie received the Nobel Prize in Chemistry for her discoveries of the
                                    elements radium and polonium, as well as her research on their chemical properties. This prize recognized her
                                    contributions to the field of chemistry and the advancement
                                    of knowledge about radioactive elements, marking her as a pioneering scientist in both physics and chemistry.
                                </div>
                            </div>
                            <div className='col-md-6' style={{ height: '300px' }} >
                                <div align='center' style={{ paddingTop: '2%' }}>
                                    <img src={Nobel2} className='SizeImg_Hung' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div >
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default SelectedWorks;