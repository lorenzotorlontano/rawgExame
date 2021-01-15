import React from "react";
import { useParams } from "react-router-dom";
import WrapperDetail from "../../components/WrapperDetails/WrapperDetail";
import useGetDetailsOfGameById from "../../hooks/useGetDetailsOfGameById";
import "./details.css";
function Details() {
  const { id } = useParams();

  const { data: detailById } = useGetDetailsOfGameById(id);

  return (
    <>
      <div className="wrapperDetail">
        <WrapperDetail id={id} detailById={detailById} />
      </div>
    </>
  );
}

export default Details;
