import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import Select from "../Select/Select";
import "./WrapperDashboard.css";
function WrapperDashboard({ data, isSuccess, value, setValue }) {
  const [hidden, setHidden] = useState();

  useEffect(() => {
    setHidden(data);
  }, [isSuccess, data]);

  const hideElement = (id) => {
    setHidden({
      ...hidden,
      results: hidden?.results.filter((e) => e.id !== id),
    });
  };

  return (
    <>
      <Select value={value} setValue={setValue} />
      <Grid container>
        {hidden?.results?.map((val, index) => {
          return (
            <Grid key={index} className="gridWrapperOfCard" item md={3}>
              <Card hideElement={hideElement} val={val} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default WrapperDashboard;
