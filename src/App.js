import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import IndexView from "./views/IndexView/IndexView";
import CarView from "./views/CarView/CarView";
import ComparisonView from "./views/ComparisonView/ComparisonView";
import ComparisonResultsView from "./views/ComparisonResultsView/ComparisonResultsView";
import OffersView from "./views/OffersView/OffersView";
import PriceAnalysisView from "./views/PriceAnalysisView/PriceAnalysisView";

import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/hci-project-public/" element={<IndexView />} />
          <Route path="/hci-project-public/car/*" element={<CarView />} />
          <Route path="/hci-project-public/offers/*" element={<OffersView />} />
          <Route path="/hci-project-public/priceAnalysis/*" element={<PriceAnalysisView />} />
          <Route path="/hci-project-public/comparison" element={<ComparisonView />} />
          <Route path="/hci-project-public/comparisonResults" element={<ComparisonResultsView />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
