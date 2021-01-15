import React from "react";
import Card from "@material-ui/core/Card";
import useStyles from "../../style/CardStyle";
import ReactPlayer from "react-player";
import CollapseCard from "../CollapseCard/CollapseCard";
import CardContents from "../CardContent/CardContent";
import "./WrapperCard.css";
function WrapperCard({
  val,
  hideElement,
  handleExpandClick,
  handleHideExpandClick,
  history,
  expanded,
  checkIfTrue,
}) {
  const classes = useStyles();

  return (
    <Card
      onMouseOut={handleHideExpandClick}
      onMouseOver={handleExpandClick}
      className={classes.root}
    >
      {val.clip ? (
        <ReactPlayer
          width="300px"
          height="200px"
          url={val?.clip ? val?.clip?.clip : val.background_image}
          light={checkIfTrue ? null : val.background_image}
          playing={checkIfTrue}
          muted={true}
          loop={true}
        />
      ) : (
        <img alt="nada" className="img" src={val.background_image} />
      )}

      <CardContents history={history} expanded={expanded} val={val} />

      <CollapseCard
        hideElement={hideElement}
        history={history}
        expanded={expanded}
        val={val}
      />
    </Card>
  );
}

export default WrapperCard;
