import NavBar from './Navbar'
import Footer from './Footer'
import Bioone from './Bioone'
import Biofrist from './Biofrist'
import Biotwo from './Biotwo'
import Biothree from './Biothree'
import Biofour from './Biofour'
import "../Css/Van/Biography.css"



import { Container } from 'react-bootstrap';

const Biography = () => {

    return (
        <>
            <div className='background_bio' >
                <Container className='khoibio_Van_bio ' style={{ padding: "30px" }}>
                    <div>

                        <div className='quote' style={{ color: '#f479a3', background: '#b8cddb', padding: '5px 20px' }}>
                            <blockquote className="custom-quote">
                                <div>The quote "In science, what matters is what is discovered, not the researcher themselves".</div>
                                <footer style={{ color: 'black' }}>— Marie Curie</footer>
                            </blockquote>
                        </div>

                        <div className=" gioithieu" >
                            <Biofrist />
                        </div>

                        <div className=" gioithieu" >
                            <Bioone />
                        </div>

                        <div className=" gioithieu" >
                            <Biotwo />
                        </div>

                        <div className=" gioithieu" >
                            <Biothree />
                        </div>

                        <div className=" gioithieu" >
                            <Biofour />
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
}

export default Biography;