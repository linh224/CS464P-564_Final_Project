import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Books from "./components/Books.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="div-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/about" element={<About />} />

          <Route path="/books" element={<Books />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
