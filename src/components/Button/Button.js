import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ val, func, variantColor, color }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={func} style={{ color: color }} variant={variantColor}>
        {val}
      </Button>
    </div>
  );
}
