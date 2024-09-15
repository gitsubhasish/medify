import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalCenters from "./Pages/MedicalCenters";
import MyBookings from "./Pages/MyBookings";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#E8F1FF78" }}>
      <Router>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/medical-centers" element={<MedicalCenters />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
