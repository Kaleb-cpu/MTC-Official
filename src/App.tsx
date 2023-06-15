import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
  // state variable that represents the selected variable
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");

  const [ageLists, setageLists] = useState([
    {
      id: 1,
      ageGroup: "19 months - 2.4 years",
      Fresident: "$1125",
      P2resident: "$450",
      P3resident: "$675",
      FnonResident: "$1175",
      P2nonResident: "$470",
      P3nonResident: "$705",
    },
    {
      id: 2,
      ageGroup: "2.5 years - 5 years",
      Fresident: "$925",
      P2resident: "$370",
      P3resident: "$555",
      FnonResident: "$975",
      P2nonResident: "$390",
      P3nonResident: "$585",
    },
  ]);

  const [defaultState, setdefaultState] = useState([
    { id: 1, ageGroup: "", Fresident: "", FnonResident: "" },
  ]);

  const visibleExpenses = selectedAgeGroup
    ? ageLists.filter((e) => e.ageGroup === selectedAgeGroup)
    : defaultState;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Rentals" element={<Rentals />} />
        <Route
          path="Childcare"
          element={
            <ChildCare
              ageLists={visibleExpenses}
              onSelectageGroup={(ageGroup) => setSelectedAgeGroup(ageGroup)}
            />
          }
        />

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
