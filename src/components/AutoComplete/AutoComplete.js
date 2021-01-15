import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

export default function CustomInputAutocomplete({
  classes,
  handleSearch,
  dataFromSearch,
}) {
  let history = useHistory();

  const handleChange = (event, newValue) => {
    history.push(newValue ? `/details/${newValue?.id}` : "/");
  };

  return (
    <Autocomplete
      id="custom-input-demo"
      options={dataFromSearch?.results ?? []}
      getOptionLabel={(option) => option?.slug ?? ""}
      onChange={(event, newValue) => handleChange(event, newValue)}
      renderInput={(params) => (
        <div className={classes.search} ref={params.InputProps.ref}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            {...params.inputProps}
            onKeyUp={(e) => handleSearch(e)}
            type="text"
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      )}
    />
  );
}
