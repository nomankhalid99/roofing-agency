// import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter,} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
