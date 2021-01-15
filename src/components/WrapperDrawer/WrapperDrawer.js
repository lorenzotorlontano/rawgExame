import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "../SideBar/SideBar";
import AutoComplete from "../AutoComplete/AutoComplete";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../../style/DrawerStyle";
import "./WrapperDrawer.css";
function WrapperDrawer({
  handleDrawerToggle,
  history,
  handleSearch,
  isSuccess,
  mobileOpen,
  dataFromSearch,
  setValueFromAutoComplete,
  props,
  valueFromAutoComplete,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className="toolBar">
          <Grid className="gridFiveContainer" item md={5}>
            <span onClick={() => history.push("/")}> RAWG </span>
          </Grid>
          <Grid className="gridSeveneFromFive" item md={7}>
            <AutoComplete
              dataFromSearch={isSuccess ? dataFromSearch : []}
              classes={classes}
              handleSearch={handleSearch}
              setValue={setValueFromAutoComplete}
              valueFromAutoComplete={valueFromAutoComplete}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <SideBar
        props={props}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        classes={classes}
      />
    </div>
  );
}

export default WrapperDrawer;
