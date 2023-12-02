import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Container from 'react-bootstrap/Container';

import './App.css';
import IsbnCategory from './components/IsbnCategory.jsx';

function App() {
  return (
    <Router>
      <Container fluid>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/isbncategory' element={<IsbnCategory />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
