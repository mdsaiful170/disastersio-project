import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componetBox/main/Navbar";
import Dashboard from "./componetBox/main/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<Dashboard />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
