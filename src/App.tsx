import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AroundTowne from "./components/pages/Around Towne";
import ChildCare from "./components/pages/Childcare";
import Rentals from "./components/pages/Rentals";
import PageNotFound from "./components/pages/PageNotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Rentals" element={<Rentals />} />
        <Route path="Childcare" element={<ChildCare />} />
        <Route path="AroundTowne" element={<AroundTowne />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
