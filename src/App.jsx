import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componetBox/main/Navbar";
import Dashboard from "./componetBox/main/Dashboard";
import Incidents from "./componetBox/main/Incidents";
import Getstarted from "./componetBox/main/Getstarted";
import ErrorPage from "./componetBox/main/ErrorPage";
import Newincident from "./componetBox/main/Newincident";
import Nextpageone from "./componetBox/main/Nextpageone";
import Nextlastpage from "./componetBox/main/Nextlastpage";
import Location from "./componetBox/main/Location";

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
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
