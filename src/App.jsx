import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Startedcard } from "./componetBox/componet/Startedcard";

function App() {
  return (
    <>
    <main className="p-10">
      <Startedcard />
    </main>
      <BrowserRouter>
        <Routes>
          <Route path="" element={""}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
