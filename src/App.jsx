import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './components/Home.jsx';
import Books from './components/Books.jsx';
import Contact from './components/Contact.jsx';
import Search from './components/Search.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className='div-container d-flex'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
