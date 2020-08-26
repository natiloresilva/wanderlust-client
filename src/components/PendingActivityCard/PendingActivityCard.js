import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
});

function PendingActivityCard(props) {
  const removeFromTrip = (e, activity) => {
    console.log(activity, props, e);
    axios
      .put(
        `${process.env.REACT_APP_API_URI}/travel/trips/${props.params}/removeThing/${activity.id}`
      )
      .then((removedActivity) => console.log(removedActivity))
      .catch((err) => console.log(err));
  };

  const classes = useStyles();
  //const { name, snippet, images } = props.data.results;
  console.log(props, "FSLDJFLKSDLFSDLK");
  return (
    <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.info.images[0].source_url}
              title="Contemplative Reptie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.info.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.info.snippet}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
    </>
  );
}

export default PendingActivityCard;
