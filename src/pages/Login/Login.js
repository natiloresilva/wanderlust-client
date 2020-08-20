import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button/Button";
import "./login.css";

const styles = (theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "20px 10%",
    },
  },
});

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log("Login -> form submit", { username, password });

    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-login">Login</h1>
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
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
        </form>
        <div className="signup-text">
          <span>Don’t have an account? </span>
          <a>
            <Link to={"/signup"}>
              <span>Signup!</span>
            </Link>
          </a>
        </div>

        <div className="container-button">
          <Button type="submit" text="Login" />
        </div>
      </div>
    );
  }
}

export default withAuth(withStyles(styles, { withTheme: true })(Login));
