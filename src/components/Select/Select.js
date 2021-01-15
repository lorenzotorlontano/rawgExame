import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "../../style/SelectStyle";

export default function SimpleSelect({ setValue, value }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={"name"}>Relevance</MenuItem>
          <MenuItem value={"released"}>released</MenuItem>
          <MenuItem value={"metacritic"}>metacritic</MenuItem>
          <MenuItem value={"added"}>added</MenuItem>
          <MenuItem value={"created"}>created</MenuItem>
          <MenuItem value={"updated"}>updated</MenuItem>
          <MenuItem value={"rating"}>rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
