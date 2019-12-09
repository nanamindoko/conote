import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const myPageButton = (
        <Menu.Item
            name="mypage"
            active={activeItem === "mypage"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
        >
          My Page
        </Menu.Item>
    );

    const loginButton = (
          <Menu.Item
              name="login"
              as={Link}
              to="/login"
          >
            Sign In
          </Menu.Item>
    );

    const logoutButton = (
        <Menu.Item
            name="logout"
            onClick={this.props.onLogout}
            as={Link}
            to="/"
        >
            Logout
        </Menu.Item>
    );

    const registerButton = (
        <Menu.Item
            name="register"
            as={Link}
            to="/register"
        >
            Register
        </Menu.Item>
    )

      return (
          <Menu>
              {this.props.isLoggedIn ? myPageButton : undefined}
              <Menu.Menu position={"right"}>
                  {this.props.isLoggedIn ? logoutButton : loginButton}
                  {this.props.isLoggedIn ? undefined : registerButton}
              </Menu.Menu>
          </Menu>
  );
  }
}

Navbar.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Navbar.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("Logout function not defined"); }
};

export default Navbar;
