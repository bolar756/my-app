import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar} from './components/navabar';
import {Footer} from './components/footer';


import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Portfolio from './pages/portfolio'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes >
      <Route exact path="/" element={<Home />} />
      < Route path="/contact" element={<Contact />} />
      < Route path="/portfolio" element={<Portfolio />} />
      < Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
