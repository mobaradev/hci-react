import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import IndexView from "./views/IndexView/IndexView";
import CarView from "./views/CarView/CarView";
import ComparisonView from "./views/ComparisonView/ComparisonView";
import ComparisonResultsView from "./views/ComparisonResultsView/ComparisonResultsView";
import OffersView from "./views/OffersView/OffersView";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexView />} />
          <Route path="/car/*" element={<CarView />} />
          <Route path="/offers/*" element={<OffersView />} />
          <Route path="/comparison" element={<ComparisonView />} />
          <Route path="/comparisonResults" element={<ComparisonResultsView />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
