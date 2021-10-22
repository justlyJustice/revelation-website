// Package Imports
import { Route, Switch } from "react-router-dom";

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
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/radio" component={Radio} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
