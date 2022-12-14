import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Icon } from "semantic-ui-react";
import "../styles/navbar.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   link: {
//     textDecoration: "none",
//     color: "blue",
//     fontSize: "20px",
//   },
//   icon: {
//     color: "white",
//   },
// }));
const StyledListItem = makeStyles({
  paper: {
    backgroundColor: "#151226",
  },
});
function DrawerComponent() {
  // const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = StyledListItem();
  return (
    <div>
      <div class="nav-title nav-container">
        <a href="/">Rahul Gupta</a>
      </div>
      <IconButton
        color="primary"
        style={{
          maxWidth: "30px",
          maxHeight: "80px",
          minWidth: "30px",
          minHeight: "60px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className="svg_icons" />

        <Drawer
          classes={{ paper: classes.paper }}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <div class="nav-title">
                <a href="/">Rahul Gupta</a>
              </div>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button
                as={Link}
                to="/home"
                color="purple"
                animated
                inverted
                right
              >
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                  <Icon name="home"></Icon>
                </Button.Content>
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button as={Link} to="/projects" color="purple" animated inverted>
                <Button.Content visible>Projects</Button.Content>
                <Button.Content hidden>
                  <Icon name="file"></Icon>
                </Button.Content>
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button as={Link} to="/contact" color="purple" animated inverted>
                <Button.Content visible>Contact</Button.Content>
                <Button.Content hidden>
                  <Icon name="phone"></Icon>
                </Button.Content>
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </IconButton>
    </div>
  );
}
export default DrawerComponent;
