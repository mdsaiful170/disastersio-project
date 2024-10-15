import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componetBox/main/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            {/* <Route path="home" element={<div>Home</div>} />
            <Route path="about" element={<div>About</div>} />
            <Route path="contact" element={<div>Contact</div>} />
            <Route path="*" element={<div>Page Not Found</div>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
