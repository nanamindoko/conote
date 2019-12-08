import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Home, Login, Register} from './containers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import history from './history';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {Course, Note} from "./components";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>

                <Route path="/course/:id">
                    <Course />
                </Route>

                <Route path="/note/:id">
                    <Note />
                </Route>
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
