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

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { returnDate, startDate, travelCity, _id } = props.travel.trip;

  let history = useHistory();
  const viewDetail = () => {
    history.push(`/trips/detail/${_id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://u3ajavea.com/info/wp-content/uploads/2019/02/Travel.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {travelCity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Start Date: {startDate}
            <br></br>
            Return Date: {returnDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={viewDetail}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
