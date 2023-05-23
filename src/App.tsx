
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './pages/components/sections/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AroundTowne from './pages/Around Towne';
import ChildCare from './pages/Childcare';
import FacilityRentals from './pages/Facility Rentals';
import PageNotFound from './pages/PageNotFound';



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
 
