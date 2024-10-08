import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SelectedWorks from "./Components/SelectedWorks";
import Research from "./Components/Research";
import Awards from './Components/AwardsAndHonor';
import Contact from "./Components/Contact";
import Biography from "./Components/Biography";
import References from "./Components/References"
import BackHomeAndTop from "./Components/BackHomeAndTop";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Information from './Components/Information'
import Education from "./Components/Education";
import Carrer from "./Components/Carrer";
import Story from "./Components/Story";
import Site_Map from "./Components/SiteMap";

const App = () => {
  return ( 
    <>
      <BrowserRouter>
      <NavBar/>
      <BackHomeAndTop/>
      <Site_Map/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Biography" element={<Biography />}/>
          <Route path="/Research" element={<Research />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/SelectedWorks" element={<SelectedWorks />} />
          <Route path="/References" element={<References />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Information" element={<Information />} />
          <Route path="/Education" element={<Education/>} /> 
          <Route path="/Carrer" element={<Carrer/>} /> 
          <Route path="/Story" element={<Story/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   );
}
 
export default App;