import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
//import "./createtrip.css";
import Button from "../../components/Button/Button";
import axios from "axios";

const styles = (theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "20px 10%",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
class CreateATrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelCity: "",
      startDate: "",
      returnDate: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { travelCity, startDate, returnDate } = this.state;
    axios
      .post(
        "http://localhost:4000/travel/trips",
        { travelCity, startDate, returnDate },
        { withCredentials: true }
      )
      .then((travel) => {
        console.log(travel);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      travelCity: "",
      startDate: "",
      returnDate: "",
    });
  };
  /* handleClick = () => {
    let path = `/travel/trip/${this.props._id}`;
    this.props.history.push(path);
  };
 */
  render() {
    const { travelCity, startDate, returnDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-newtrip">Create a new trip</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="travelCity"
            value={travelCity}
            onChange={this.handleChange}
          />
          <TextField
            id="date"
            label="Start Date"
            type="date"
            name="startDate"
            value={startDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
          />
          <TextField
            id="date"
            label="Return Date"
            type="date"
            name="returnDate"
            value={returnDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
          />
          <button type="submit">
            {/* onClick={this.handleClick} */}
            Create
          </button>
        </form>
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(CreateATrip));
