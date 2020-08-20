import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";

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
    super(props);
    this.state = {
      travelCity: this.props.travelCity,
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
      .put(`http://localhost:4000/travel/trips/${this.props._id}`, {
        travelCity,
        startDate,
        returnDate,
      })
      .then(() => {
        this.props.getTheTrip();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/travels");
      })
      .catch((error) => console.log(error));
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    const { travelCity, startDate, returnDate } = this.state;
    const classes = useStyles();
    return (
      <div>
        <h1 className="title-newtrip">Create a new trip</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="travelCity"
            value={travelCity}
            onChange={(e) => this.handleChange(e)}
          />
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
          />
        </form>
      </div>
    );
  }
}

export default withAuth(withStyles(styles, { withTheme: true })(EditTrip));
