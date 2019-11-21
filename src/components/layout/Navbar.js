import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          My Page
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Courses
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="upcomingEvents"
            active={activeItem === "upcomingEvents"}
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