import React from "react";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import "./CollapseCard.css";
import Button from "../Button/Button";
function CollapseCard({ expanded, val, hideElement, history }) {
  console.log(hideElement);

  const handlePushHistory = (id) => {
    history.push(`/details/${id}`);
  };
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Button
          color="white"
          variantColor="outlined"
          func={() => handlePushHistory(val.id)}
          history={history}
          val="see more details"
        />
      </CardContent>
      <CardContent>
        <Button
          color="white"
          variantColor="outlined"
          func={() => hideElement(val.id)}
          val="hide this element"
        />
      </CardContent>
    </Collapse>
  );
}

export default CollapseCard;
