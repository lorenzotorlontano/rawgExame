import React from "react";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import "./WrapperCenterDetail.css";
function WrapperCenterDetail({ detailById }) {
  return (
    <Grid className="containerWrapperCenterDetail" item md={12}>
      {detailById?.clip?.clips?.full ? (
        <ReactPlayer
          width="400px"
          height="250px"
          url={detailById?.clip?.clips?.full}
          playing={true}
          muted={true}
          loop={true}
        />
      ) : (
        <img
          alt="nada"
          className="imgBackground"
          src={detailById?.background_image}
        />
      )}
    </Grid>
  );
}

export default WrapperCenterDetail;
