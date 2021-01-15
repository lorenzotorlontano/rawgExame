import List from "@material-ui/core/List";

import "./responsiveDrawer";
export const Drawer = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar} />
      <List></List>
      <List></List>
    </div>
  );
};
export default Drawer;
