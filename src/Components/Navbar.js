import React from "react";
import { Menu, Button, Icon, Sticky } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const ignoreEndpoints = ["/"];

  if (ignoreEndpoints.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <Sticky>
        <Menu secondary pointing>
          <Menu.Item as={Link} to="/home">
            <div class="icontext">
              <a href="/home">Rahul Gupta</a>
            </div>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              as={Link}
              to="/home"
              color="purple"
              icon
              animated
              inverted
              right
            >
              <Button.Content visible>Home</Button.Content>
              <Button.Content hidden>
                <Icon name="home"></Icon>
              </Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              as={Link}
              to="/projects"
              color="purple"
              animated
              icon
              inverted
            >
              <Button.Content visible>Projects</Button.Content>
              <Button.Content hidden>
                <Icon name="file"></Icon>
              </Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              as={Link}
              to="/contact"
              color="purple"
              animated
              icon
              inverted
            >
              <Button.Content visible>Contact</Button.Content>
              <Button.Content hidden>
                <Icon name="phone"></Icon>
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>

        <hr></hr>
      </Sticky>
    </div>
  );
};

export default Navbar;
