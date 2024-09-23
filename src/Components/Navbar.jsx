import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <div align='center'>
                <h1>LOGO</h1>
            </div>
            <div className="row navbartam" >
                <div className="col-md-1" >
                    <Link to='/'>HOME</Link>
                </div>
                <div className="col-md-2">
                    <Link>BIOGRAPHY</Link>
                </div>
                <div className="col-md-2">
                    <Link>RESEARCH</Link>
                </div>
                <div className="col-md-2">
                    <Link>AWARDS AND HONORS</Link>
                </div>
                <div className="col-md-2">
                    <Link to='/SelectedWorks'>SELECTED WORKS</Link>
                </div>
                <div className="col-md-2">
                    <Link>REFERENCES ETC</Link>
                </div>
                <div className="col-md-1">
                    <Link>CONTACT</Link>
                </div>
            </div>
        </>
    );
}

export default NavBar;