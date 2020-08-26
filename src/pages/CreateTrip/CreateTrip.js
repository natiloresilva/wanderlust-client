import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import "./createtrip.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "20px 10%",
    },
  },
});

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
        `${process.env.REACT_APP_API_URI}/travel/trips`,
        { travelCity, startDate, returnDate },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data, "TRAVEL");
        this.props.history.push(`/home`);
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

  goBack = () => {
    this.props.history.push("/home");
  };

  handleChangeSelect = (event) => {
    this.setState({ travelCity: event.target.value });
  };

  render() {
    const { travelCity, startDate, returnDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-newtrip">Create a new trip</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              City
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={travelCity}
              onChange={this.handleChangeSelect}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="Barcelona">Barcelona</MenuItem>
              <MenuItem value={"Amsterdam"}>Amsterdam</MenuItem>
              <MenuItem value={"Berlin"}>Berlin</MenuItem>
              <MenuItem value={"Krakow"}>Krakow</MenuItem>
              <MenuItem value={"London"}>London</MenuItem>
              <MenuItem value={"Madrid"}>Madrid</MenuItem>
              <MenuItem value={"Milan"}>Milan</MenuItem>
              <MenuItem value={"Moscow"}>Moscow</MenuItem>
              <MenuItem value={"Munich"}>Munich</MenuItem>
              <MenuItem value={"Oslo"}>Oslo</MenuItem>
              <MenuItem value={"Palermo"}>Palermo</MenuItem>
              <MenuItem value={"Paris"}>Paris</MenuItem>
              <MenuItem value={"Rome"}>Rome</MenuItem>
              <MenuItem value={"Sydney"}>Sydney</MenuItem>
              <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
              <MenuItem value={"Valencia"}>Valencia</MenuItem>
              <MenuItem value={"Zurich"}>Zurich</MenuItem>
            </Select>
            <FormHelperText>Pick a city!</FormHelperText>
          </FormControl>
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
        </form>

        <div className="container-createtrip-buttons">
          <Button type="button" text="Back" handleClickButton={this.goBack} />
          <Button
            handleClickButton={this.handleFormSubmit}
            text="Create trip"
          />
        </div>

        <NavBar />
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(CreateATrip));
