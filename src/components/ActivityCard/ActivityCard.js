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

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
});

const addToTrip = () => {
  console.log("hola");
};

export default function ActivityCard(props) {
  console.log(props);
  const classes = useStyles();
  //const { name, snippet, images } = props.data.results;

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
            <Button size="small" color="primary" onClick={addToTrip}>
              Add Activity
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
