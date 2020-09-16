import React from "react";
import Movie from "./routes/Movie.js";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Movie} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
