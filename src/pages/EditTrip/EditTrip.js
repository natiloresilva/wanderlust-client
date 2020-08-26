import React, { Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Edittrip from "./Edittrip.css";

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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      travelCity: this.props.match.params.travelCity,
      startDate: this.props.startDate,
      returnDate: this.props.returnDate,
    };
  }
  handleFormSubmit = () => {
    const travelCity = this.state.travelCity;
    const startDate = this.state.startDate;
    const returnDate = this.state.returnDate;
    axios
      .put(
        `${process.env.REACT_APP_API_URI}/travel/trips/${this.props.match.params.id}`,
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

  goBack = () => {
    this.props.history.push("/home");
  };
  render() {
    const { startDate, returnDate } = this.state;
    const { classes } = this.props;
    return (
      <div className="container-edit-trip">
        <h1 className="title-newtrip">Edit the information of your trip</h1>
        <form className={classes.root} noValidate autoComplete="off">
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
        </form>

        <div className="container-buttons">
          <Button text="Back" handleClickButton={this.goBack} />

          <Button
            text="Save Changes"
            handleClickButton={this.handleFormSubmit}
          />
        </div>
        <NavBar />
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(EditTrip));
