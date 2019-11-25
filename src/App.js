import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import { Note } from "./components/Note";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WriteNote } from "./components/WriteNote";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar {...this.props} />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/course/:id">
            <Course />
          </Route>
          <Route path="/note/:id">
            <Note />
          </Route>
          <Route path="/write/:id">
            <WriteNote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
