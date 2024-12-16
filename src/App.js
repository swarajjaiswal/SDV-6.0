import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Sdvcomponent from "./components/Sdv Components/Sdvcomponent";
import Team from "./components/Team/Team";
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
// import Sparkles from "./components/Sparkle"; 

function App() {
  return (
    <div className="App">
      {/* <Sparkles /> Sparkle Effect */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sdvcomponent" element={<Sdvcomponent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
