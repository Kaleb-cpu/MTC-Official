import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AroundTowne from "./components/pages/Around Towne";
import ChildCare from "./components/pages/Childcare";
import FacilityRentals from "./components/pages/Rentals";
import PageNotFound from "./components/pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="FacilityRentals" element={<FacilityRentals />} />
          <Route path="Childcare" element={<ChildCare />} />
          <Route path="AroundTowne" element={<AroundTowne />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
