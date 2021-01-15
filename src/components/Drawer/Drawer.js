import React, { useState, useEffect } from "react";
import useGetDataFromSearch from "../../hooks/useGetDataFromSearch";
import { useHistory } from "react-router-dom";
import WrapperDrawer from "../WrapperDrawer/WrapperDrawer";
import _ from "lodash";

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [stringTypedToTheInput, setStringTypedToTheInput] = useState("");

  const [valueFromAutoComplete, setValueFromAutoComplete] = useState("");

  let history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e) => {
    const debouncedSave = _.debounce(
      () => setStringTypedToTheInput(e.target.value),
      1500
    );
    debouncedSave();

    if (e.code === "Enter") {
      history.push(
        stringTypedToTheInput ? `/search/${stringTypedToTheInput}` : "/"
      );
    }
  };

  useEffect(() => {}, [stringTypedToTheInput]);

  const { data: dataFromSearch, isSuccess } = useGetDataFromSearch(
    stringTypedToTheInput
  );

  return (
    <WrapperDrawer
      stringTypedToTheInput={stringTypedToTheInput}
      handleDrawerToggle={handleDrawerToggle}
      handleSearch={handleSearch}
      history={history}
      isSuccess={isSuccess}
      props={props}
      mobileOpen={mobileOpen}
      dataFromSearch={dataFromSearch}
      setValueFromAutoComplete={setValueFromAutoComplete}
      valueFromAutoComplete={valueFromAutoComplete}
    />
  );
}

export default ResponsiveDrawer;
