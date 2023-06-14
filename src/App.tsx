import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ChildCare from "./pages/Childcare";
import Rentals from "./pages/Rentals";
import ResidentInfo from "./pages/ResidentInfo";
import PageNotFound from "./pages/PageNotFound";


// Around towne dropdown pages

import IceSurface from "./pages/Ice Surface";
import PondsPathways from "./pages/Ponds Pathways";
import Emergency from "./pages/Emergency";
import PoliticalContacts from "./pages/Political Contacts";
import CrimeStats from "./pages/Crime Stats";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Rentals" element={<Rentals />} />
        <Route path="Childcare" element={<ChildCare />} />

        <Route path="Ice Surface" element={<IceSurface />} />
        <Route path="Ponds Pathways" element={<PondsPathways />} />
        <Route path="Emergency" element={<Emergency />} />
        <Route path="Political Contacts" element={<PoliticalContacts />} />
        <Route path="Crime Stats" element={<CrimeStats />} />
        <Route path="ResidentInfo" element={<ResidentInfo />} />

        <Route path="About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
