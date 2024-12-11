
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Homepage from './components/Homepage/Homepage';
import PrevEvent from './components/Previous Event/PrevEvent';
import Team from './components/Team/Team';
import SdvComponents from './components/Sdv Components/SdvComponents';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-12 w-full">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/events" element={<PrevEvent />} />
            <Route path="/team" element={<Team />} />
            <Route path='/components' element={<SdvComponents />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;