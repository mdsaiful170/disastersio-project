import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./main/Navbar";
import Dashboard from "./main/Dashboard";
import Incidents from "./main/Incidents";
import Getstarted from "./main/Getstarted";
import Errorpage from "./main/Errorpage";
import Newincident from "./main/Newincident";
import Nextpageone from "./main/Nextpageone";
import Nextlastpage from "./main/Nextlastpage";
import Location from "./main/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="incidents" element={<Incidents />}>
              <Route path="getstarted" element={<Getstarted />}>
                <Route path="newincident" element={<Newincident />}>
                  <Route path="nextpageone" element={<Nextpageone />}>
                    <Route path="nextlastpage" element={<Nextlastpage />} />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="location" element={<Location />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
