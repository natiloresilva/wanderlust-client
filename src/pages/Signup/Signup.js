import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import "./signup.css";
import Button from "../../components/Button/Button";

const styles = (theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "20px 10%",
    },
  },
});

class Signup extends Component {
  state = { username: "", password: "", email: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-signup">Sign Up</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
        </form>
        <div className="login-text">
          <span>Already have account?</span>
          <a>
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </a>
        </div>
        <div className="container-button">
          <Button type="submit" text="Signup" />
        </div>
      </div>
    );
  }
}

export default withAuth(withStyles(styles, { withTheme: true })(Signup));
