import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SelectedWorks from "./Components/SelectedWorks";
import Research from "./Components/Research";
import Awards from './Components/AwardsAndHonor';
import Viewer from "./Components/viewer";
import Contact from "./Components/Contact";
const App = () => {
  return ( 
    <>
      <BrowserRouter>
      <Viewer />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Research" element={<Research />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/SelectedWorks" element={<SelectedWorks />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;