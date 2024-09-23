import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SelectedWorks from "./Components/SelectedWorks";
const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SelectedWorks" element={<SelectedWorks />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;