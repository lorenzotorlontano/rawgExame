import React from "react";
import "./WrapperLeftSideDetails.css";
function WrapperLeftSideDetails({ detailById }) {
  return (
    <>
      <div>
        {detailById?.metacritic_platforms.map((val, index) => {
          return <span key={index}>{val.platform.name}</span>;
        })}
      </div>
      <div className="containerSpan">
        <span>{detailById?.name}</span>
      </div>
    </>
  );
}

export default WrapperLeftSideDetails;
