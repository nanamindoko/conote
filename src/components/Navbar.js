import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


export class Navbar extends Component {
  state = {};

  render() {
    const { activeItem } = this.state;

    const myPageButton = (
        <li className="nav-item">
            <Link className="nav-link" to="/mypage">My Page</Link>
        </li>
    );

    const loginButton = (
        <li className="nav-item">
            <div className="btn-group" role="group" aria-label="login">
                <Link className="nav-link" to="/login">
                    <button type="button" className="btn btn-primary">Sign In</button>
                </Link>
                <Link className="nav-link" to="/register">
                    <button type="button" className="btn btn-success">Register</button>
                </Link>
            </div>
        </li>
    );

    const logoutButton = (
        <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.props.onLogout}>
                <button type="button" className="btn btn-danger">Logout</button>
            </Link>
        </li>
    );

      return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
              <div className="container">
                  <Link className="navbar-brand" to="/">CoNote</Link>
                  <ul className="navbar-nav mr-auto">
                      {this.props.isLoggedIn ? myPageButton : undefined}
                  </ul>
                  <ul className="navbar-nav ml-auto">
                      {this.props.isLoggedIn ? logoutButton : loginButton}
                  </ul>
              </div>
          </nav>
      );
  }
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Navbar.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("Logout function not defined"); }
};

export default Navbar;
