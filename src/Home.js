import React from "react";
import Movie from "./routes/Movie.js";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/about">About</Link>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Movie} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
