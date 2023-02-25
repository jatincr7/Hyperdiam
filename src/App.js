import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import DiamondList from "./components/DiamondList";
import LandingPage from "./components/LandingPage";
import AddDiamonds from "./components/AddDiamonds";
import Miner from "./components/Miner";
import Manufacturer from "./components/Manufacturer";
import Retailer from "./components/Retailer";
import Customer from "./components/Customer";
import DiamondDetailsPage from "./components/DiamondDetailsPage";

function App() {
  return (
    <Router>
      <div>
      <HomePage />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/diamond-list" element={<DiamondList/>} />
        <Route path="/add-diamonds" element={<AddDiamonds/>} />
        <Route path="/miner" element={<Miner/>} />
        <Route path="/manufacturer" element={<Manufacturer/>} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/diamond/:diamondId" element={<DiamondDetailsPage/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;