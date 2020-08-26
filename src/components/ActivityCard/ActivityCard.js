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

function ActivityCard(props) {
  const addToTrip = (e, activity) => {
    console.log(activity)
    //console.log(activity, props, e);
    axios
      .put(
        `${process.env.REACT_APP_API_URI}/travel/trips/${props.params}/addThing/${activity.id}`, { activity }
      )
      .then((addedActivity) => console.log(addedActivity))
      .catch((err) => console.log(err));
  };

  const classes = useStyles();
  //const { name, snippet, images } = props.data.results;
  console.log(props);
  return (
    <>
      {props.info.map((activity) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={activity.images[0].source_url}
              title="Contemplative Reptie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {activity.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {activity.snippet}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={(e) => addToTrip(e, activity)}
            >
              Add Activity
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default ActivityCard;
