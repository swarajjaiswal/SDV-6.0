import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Previousevent from "./components/Previous Event/Previousevent";
import Sdvcomponent from "./components/Sdv Components/Sdvcomponent";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sdvcomponent" element={<Sdvcomponent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/previousevent" element={<Previousevent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
