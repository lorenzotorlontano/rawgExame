import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import useStyles from "../../style/CardStyle";
import Button from "../Button/Button";
import "./CardContent.css";
function CardContents({ history, expanded, val }) {
  const classes = useStyles();

  const handlePushHistory = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <>
      <CardContent>
        <Grid container>
          <Grid className="containerCardContent" item md={6}>
            platforms :
            {val.parent_platforms?.map((val, index) => {
              return (
                <div key={index} className="textCard">
                  {val.platform.slug + "-"}
                </div>
              );
            })}
            {val.clip ? (
              <div className="allertTextPositive">
                go over to see the video meight :)
              </div>
            ) : (
              <div className="allertTextNegative">
                no video provided for this game :(
              </div>
            )}
          </Grid>
          <Grid className="girdSix" item md={6}>
            <span
              className="spanText"
              style={{
                color: val.metacritic >= 85 ? "#6dc849" : "yellow",
              }}
            >
              {val.metacritic
                ? val?.metacritic >= 60 && val.metacritic
                : val.id}
            </span>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className="textContentCard">
        <Button
          color="white"
          variantColor="outlined"
          val={val.name}
          func={() => handlePushHistory(val.id)}
          className="spanNameOfCard"
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </>
  );
}

export default CardContents;
