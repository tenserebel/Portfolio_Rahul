import React, { useState } from "react";
import { Menu, Button, Icon, Sticky } from "semantic-ui-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "../styles/navbar.css";
import DrawerComponent from "./Drawer";
import { useMediaQuery, useTheme } from "@material-ui/core";

const Navbar = () => {
  const [selectedBtn, setSelectedBtn] = useState(-1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const ignoreEndpoints = ["/"];

  if (ignoreEndpoints.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <Sticky>
          <div>
            <Menu primary color="black" pointing>
              <Menu.Item as={Link} to="/home">
                <div class="nav-title">
                  <a href="/home">Rahul Gupta</a>
                </div>
              </Menu.Item>
              <Menu.Item position="right">
                <Button
                  as={NavLink}
                  to="/home"
                  color="purple"
                  variant={selectedBtn === 1 ? "contained" : "outlined"}
                  onClick={() => setSelectedBtn(1)}
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
                  as={NavLink}
                  to="/projects"
                  color="purple"
                  variant={selectedBtn === 2 ? "contained" : "outlined"}
                  onClick={() => setSelectedBtn(2)}
                  animated
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
                  as={NavLink}
                  to="/contact"
                  color="purple"
                  variant={selectedBtn === 3 ? "contained" : "outlined"}
                  onClick={() => setSelectedBtn(3)}
                  animated
                  inverted
                >
                  <Button.Content visible>Contact</Button.Content>
                  <Button.Content hidden>
                    <Icon name="phone"></Icon>
                  </Button.Content>
                </Button>
              </Menu.Item>
            </Menu>

            {/* <hr style={{ color: "white" }}></hr> */}
          </div>
        </Sticky>
      )}
    </div>
  );
};

export default Navbar;
