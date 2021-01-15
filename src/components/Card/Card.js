import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import WrapperCard from "../WrapperCard/WrapperCard";

export default function RecipeReviewCard({ val, hideElement }) {
  const [expanded, setExpanded] = React.useState(false);

  const [checkIfTrue, setCheckIfTrue] = useState(false);

  const handleExpandClick = () => {
    setExpanded(true);
    setCheckIfTrue(true);
  };

  const handleHideExpandClick = () => {
    setExpanded(false);
    setCheckIfTrue(false);
  };

  let history = useHistory();

  return (
    <WrapperCard
      val={val}
      hideElement={hideElement}
      handleExpandClick={handleExpandClick}
      handleHideExpandClick={handleHideExpandClick}
      history={history}
      expanded={expanded}
      checkIfTrue={checkIfTrue}
    />
  );
}
