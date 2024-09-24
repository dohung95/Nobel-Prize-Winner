import { Form, Link } from "react-router-dom";
import BackHomeAndTop from "./BackHomeAndTop";
import Logo from "../Img/Dat/logo.png";
import '../Css/Dat/navbar.css';

const NavBar = () => {
    return (
        <div className="header-dat">
            <BackHomeAndTop />
            <div align="center" className="header-logo-dat">
                <Link to='/'>
                    <img className="header-logo-dat-img" src={Logo} />
                </Link>
            </div>
            <div className="row header-navbar-dat" style={{backgroundColor: '#ffffff00', width: '100%', marginLeft:0}}>
                <div className="col-md-1 header-navbar-dat-item" >
                    <Link to='/'>HOME</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link>BIOGRAPHY</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/Research'>RESEARCH</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/Awards'>AWARDS AND HONORS</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link to='/SelectedWorks'>SELECTED WORKS</Link>
                </div>
                <div className="col-md-2 header-navbar-dat-item">
                    <Link>REFERENCES ETC</Link>
                </div>
                <div className="col-md-1 header-navbar-dat-item">
                    <Link>CONTACT</Link>
                </div>
            </div>
        </div>
    );
}


export default NavBar;