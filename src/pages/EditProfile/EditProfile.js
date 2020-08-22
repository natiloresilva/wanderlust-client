import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";

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
      .put(`http://localhost:4000/profile/editProfile/${this.props.user._id}`, {
        city,
        bio,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push({
          pathname: "/profile",
          state: { user: response.data.user },
        });
      })
      .catch((error) => console.log(error));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { city, bio } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-newtrip">Edit your profile</h1>
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

          <button type="submit">Save changes</button>
        </form>

        <Link to="/profile">
          <button type="button" href="/profile">
            Back
          </button>
        </Link>

        <NavBar />
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(EditProfile));
