import React from "react";
import { useParams } from "react-router-dom";
import useGetScreenshoot from "../../hooks/useGetScreenshoot";
import "./screenshoot.css";
function Screenshoot() {
  let { id } = useParams();

  const { data: screenshoot } = useGetScreenshoot(id);

  return (
    <div className="screenshoot">
      {screenshoot?.results.map((val, index) => {
        return (
          <img
            key={index}
            alt="nada"
            className="imgScreenShoot"
            src={val.image}
          />
        );
      })}
    </div>
  );
}

export default Screenshoot;
