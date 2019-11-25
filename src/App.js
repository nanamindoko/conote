import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import { Note } from "./components/Note";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WriteNote } from "./components/WriteNote";
import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      notes: []
    };
  }
  componentDidMount() {
    const courses = [];
    const notes = [];
    const db = firebase.firestore();
    db.collection("courses")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          courses.push(doc.data());
        });
        this.setState({ courses: courses });
      });
    db.collection("notes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          notes.push(doc.data());
        });
        this.setState({ notes: notes });
      });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar {...this.props} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} {...this.state} />}
          />
          <Route path="/course/:id">
            <Course {...this.state} />
          </Route>
          <Route path="/note/:id">
            <Note />
          </Route>
          <Route path="/write/:id" component={WriteNote} />
        </Switch>
      </Router>
    );
  }
}

export default App;
