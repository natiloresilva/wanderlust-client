import React, { Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";

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
class EditTrip extends Component {
  constructor(props) {
    console.log(props);

    super(props);
    this.state = {
      travelCity: this.props.match.params.travelCity,
      startDate: this.props.startDate,
      returnDate: this.props.returnDate,
    };
  }
  handleFormSubmit = (event) => {
    const travelCity = this.state.travelCity;
    const startDate = this.state.startDate;
    const returnDate = this.state.returnDate;
    event.preventDefault();
    axios
      .put(
        `http://localhost:4000/travel/trips/${this.props.match.params.id}`,
        {
          travelCity,
          startDate,
          returnDate,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };
  handleStartDateChange = (event) => {
    this.setState({
      startDate: event.target.value,
    });
  };
  handleReturnDateChange = (event) => {
    this.setState({
      returnDate: event.target.value,
    });
  };
  /* hadleDelete = (index) => {
      const tripCopy = [...this.state];
      tripCopy.splice(index, 1);
      this.setState({
        trip: tripCopy,
      });
    }; */

  render() {
    const { startDate, returnDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-newtrip">Edit the information of your trip</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2017-05-24"
            name="startDate"
            value={startDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => this.handleStartDateChange(e)}
          />
          <TextField
            id="date"
            label="Return Date"
            type="date"
            defaultValue="2017-05-24"
            name="returnDate"
            value={returnDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => this.handleReturnDateChange(e)}
          />
          <button type="submit">Save Changes</button>
        </form>
        <Link to="/home">
          <Button text="Back" />
        </Link>

        <NavBar />
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(EditTrip));
