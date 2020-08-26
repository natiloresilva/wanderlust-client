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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { returnDate, startDate, travelCity, _id } = props.travel.trip;

  let history = useHistory();
  const viewDetail = () => {
    history.push(`/trips/detail/${_id}`);
  };
  const handleDelete = (index) => {
    axios
      .delete(`${process.env.REACT_APP_API_URI}/travel/trips/${_id}`)
      .then(() => {
        props.callbackAction();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.expreso.info/files/2020-04/Felices_Vacaciones.jpg"
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
      <CardActions className={classes.cards}>
        <Button size="small" color="primary" onClick={viewDetail}>
          View Details
        </Button>
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={handleDelete}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
