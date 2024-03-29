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
import Server from "../src/server"
import Business from "./pages/Business"
import Success from "./pages/Success"


// Around towne dropdown pages

import Explore from "./pages/Explore";
import Emergency from "./pages/Emergency";



export default function App() {
  // state variable that represents the selected variable
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");

  const [ageLists] = useState([
    {
      id: 1,
      ageGroup: "19 months - 2.4 years",
      Fresident: "$1125",
      P2resident: "$450",
      P3resident: "$675",
    },
    {
      id: 2,
      ageGroup: "2.5 years - 5 years",
      Fresident: "$925",
      P2resident: "$370",
      P3resident: "$555",
    },
  ]);

  const visibleExpenses = selectedAgeGroup
    ? ageLists.filter((e) => e.ageGroup === selectedAgeGroup)
    : // @ts-nocheck
      ageLists;

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

        <Route path="Explore" element={<Explore />} />
        <Route path="Emergency" element={<Emergency />} />
        <Route path="ResidentInfo" element={<ResidentInfo />} />
        <Route path="Server" element={<Server />} />

        <Route path="About" element={<About />} />
        <Route path="Business" element={<Business />} />
        
        <Route path="Success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
