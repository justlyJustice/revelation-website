// Package Imports
import { Route, Routes } from "react-router-dom";

// Component Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Radio from "./pages/Radio";
import Contact from "./pages/Contact";

// Css Imports
import "./styles/style.css";

function App() {
  return (
    <Routes>
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/radio" exact element={<Radio />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
