import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";

function App() {
  return (
    <>
      <header>header</header>
      <Link to="/search?q=Jutta">Search for Jutta</Link>
      <Link to="/about">About </Link>
      <Link to="/about/jutta">Jutta </Link>
      <Link to="/about/frank">Frank </Link>
      <Link to="/about/kai">Kai</Link>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
