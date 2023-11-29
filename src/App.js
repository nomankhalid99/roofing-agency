import './App.css';
import Home  from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
      {/* <Home/> */}
    </>
  );
}

export default App;
