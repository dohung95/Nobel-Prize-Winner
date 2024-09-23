import NavBar from "./Navbar";
import Footer from "./Footer";
import demo from '../Demo.jpg'
const Home = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div>
                
                <img src={demo} style={{width:'100%', height:'100%'}}/>

            </div>

            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;