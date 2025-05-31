import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Enter1 from "./Component/Enter/Enter1";
import Enter2 from "./Component/Enter/Enter2";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Enter1 />} />
          <Route path="/enter1" element={<Enter2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
