import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Component from "./components/Sdv Components/Sdvcomponent";
import Team from "./components/Team/Team";
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Sparkles from "./components/Sparkles/Sparkles";
import ScrollToTop from "./components/ScrollPage/ScrollToTop";
import Dnd from './components/Dnd/Dnd';
import Whysdv from './components/Whysdv/Whysdv';
import Sponsors from "./components/Sponsors/Sponsors";


function App() {
  return (
    <div className="App"   style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%,rgb(124, 53, 53) 100%)",
    }}>
      <Sparkles />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/components" element={<Component />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/whysdv" element={<Whysdv />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/dnd" element={<Dnd />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
