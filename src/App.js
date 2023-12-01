// import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter,} from "react-router-dom";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
