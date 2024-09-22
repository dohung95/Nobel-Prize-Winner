import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" />
          <Route path="" />
          <Route path="" />
          <Route path="" />
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;