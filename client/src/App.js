import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
