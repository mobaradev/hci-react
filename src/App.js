import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import IndexView from "./views/IndexView/IndexView";
import CarView from "./views/CarView/CarView";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexView />} />
          <Route path="/car/*" element={<CarView />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
