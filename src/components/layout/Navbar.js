import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <Menu>
        <Menu.Item
          name="mypage"
          active={activeItem === "mypage"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          My Page
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="mypage"
            active={activeItem === "mypage"}
            onClick={this.handleItemClick}
          >
            Sign In
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
