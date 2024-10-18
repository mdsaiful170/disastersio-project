import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componetbox/main/Navbar";
import Dashboard from "./componetbox/main/Dashboard";
import Incidents from "./componetbox/main/Incidents";
import Getstarted from "./componetbox/main/Getstarted";
import Errorpage from "./componetbox/main/Errorpage";
import Newincident from "./componetbox/main/Newincident";
import Nextpageone from "./componetbox/main/Nextpageone";
import Nextlastpage from "./componetbox/main/Nextlastpage";
import Location from "./componetbox/main/Location";

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
