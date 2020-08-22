import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
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
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      bio: "",
    };
  }

  componentDidMount() {
    this.setState({
      city: this.props.user.city,
      bio: this.props.user.bio,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const city = this.state.city;
    const bio = this.state.bio;
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
  goBack = () => {
    this.props.history.push("/profile");
  };
  render() {
    const { city, bio } = this.state;
    const { classes } = this.props;
    return (
      <div className="container-profile">
        <Typography variant="h4">Edit your profile</Typography>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            value={city}
            onChange={(e) => this.handleChange(e)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={8}
            name="bio"
            value={bio}
            variant="outlined"
            onChange={(e) => this.handleChange(e)}
          />
        </form>

        <div className="container-createtrip-buttons">
          <Button type="button" text="Back" handleClickButton={this.goBack} />
          <Button handleClickButton={this.handleFormSubmit} text="Save" />
        </div>

        <NavBar />
      </div>
    );
  }
}
export default withAuth(withStyles(styles, { withTheme: true })(EditProfile));
