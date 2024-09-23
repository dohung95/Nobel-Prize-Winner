import NavBar from "./Navbar";
import SelectedWorks from "./SelectedWorks";
import Footer from "./Footer";
const Home = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div style={{fontSize:"250pt",textAlign:'center'}}>
                CONTENT
            </div>

            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;