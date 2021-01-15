import React from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import "./WrapperScreenMoviesDetail.css";
import Button from "../Button/Button";
function WrapperScreenMoviesDetailBottom({
  screenshoot,
  handleShowAll,
  trailers,
}) {
  return (
    <Grid className="gridContainer" container>
      {trailers?.results[0]?.data?.max
        ? trailers?.results.map((val, index) => {
            if (index < 4) {
              return (
                <Grid
                  key={index}
                  className="gridSixMoviesDetailsTrailers"
                  item
                  md={6}
                >
                  <ReactPlayer
                    width="200px"
                    height="150px"
                    url={val.data.max}
                    playing={true}
                    muted={true}
                    loop={true}
                  />
                </Grid>
              );
            } else {
              return null;
            }
          })
        : screenshoot?.results.map((val, index) => {
            if (index < 4) {
              return (
                <img
                  alt="nada"
                  key={index}
                  className="imgScreenShoot"
                  src={val.image}
                />
              );
            } else {
              return null;
            }
          })}
      <Button
        color="black"
        variantColor="contained"
        val="view all"
        func={handleShowAll}
      />
    </Grid>
  );
}

export default WrapperScreenMoviesDetailBottom;
