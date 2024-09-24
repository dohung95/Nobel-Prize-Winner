import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SelectedWorks from "./Components/SelectedWorks";
import Research from "./Components/Research";
import Awards from './Components/AwardsAndHonor';
import Viewer from "./Components/viewer";
const App = () => {
  return ( 
    <>
      <BrowserRouter>
      <Viewer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SelectedWorks" element={<SelectedWorks />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;