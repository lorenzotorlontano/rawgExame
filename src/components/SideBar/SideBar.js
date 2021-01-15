import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import DrawerIn from "../../utils/responsiveDrawer";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
function SideBar({ mobileOpen, handleDrawerToggle, props, classes }) {
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerIn classes={classes} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerIn classes={classes} />
        </Drawer>
      </Hidden>
    </nav>
  );
}
SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
