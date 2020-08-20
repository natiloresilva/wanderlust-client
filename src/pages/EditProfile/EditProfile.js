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
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      bio: this.props.bio,
    };
  }
  handleFormSubmit = (event) => {
    const city = this.state.city;
    const bio = this.state.bio;
    event.preventDefault();
    axios
      .put(`http://localhost:4000/profile/editProfile/${this.props._id}`, {
        city,
        bio,
      })
      .then(() => {
        this.props.getTheTrip();
        this.props.history.push("/profile");
      })
      .catch((error) => console.log(error));
  };
  handleChange = (event) => {
    this.setState({
      city: event.target.value,
      bio: event.target.value,
    });
  };
  render() {
    const { city, bio } = this.state;
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
            name="city"
            value={city}
            onChange={(e) => this.handleChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Bio"
            variant="outlined"
            name="bio"
            value={bio}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(EditProfile));
