import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/course/:id">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
