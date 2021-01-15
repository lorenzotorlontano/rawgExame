import React from "react";
import Grid from "@material-ui/core/Grid";
import useGetTrailersById from "../../hooks/useGetMovies";
import { useHistory } from "react-router-dom";
import useGetScreenshoot from "../../hooks/useGetScreenshoot";
import WrapperLeftSideDetails from "../WrapperLeftSideDetails/WrapperLeftSideDetails";
import WrapperScreenMoviesDetailBottom from "../WrapperScreenMoviesDetailBottom/WrapperScreenMoviesDetailBottom";
import WrapperCenterDetail from "../WrapperCenterDetail/WrapperCenterDetail";
import "./WrapperDetail.css";
function WrapperDetail({ detailById, id }) {
  const { data: screenshoot } = useGetScreenshoot(id);

  const { data: trailers } = useGetTrailersById(id);

  let history = useHistory();

  const handleShowAll = () => {
    history.push(`/screenshoot/${id}`);
  };

  return (
    <Grid className="container" container>
      <Grid item md={12}>
        <Grid container>
          <Grid item md={6}>
            <WrapperLeftSideDetails detailById={detailById} />
          </Grid>
          <Grid className="gridSixColumn" item md={6}>
            <WrapperCenterDetail detailById={detailById} />
            <WrapperScreenMoviesDetailBottom
              handleShowAll={handleShowAll}
              screenshoot={screenshoot}
              trailers={trailers}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WrapperDetail;
