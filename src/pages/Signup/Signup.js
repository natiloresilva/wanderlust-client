import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withAuth } from "../../lib/AuthProvider";
import "./signup.css";
import Button from "../../components/Button/Button";
import service from "../../lib/auth-service";

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
    const { username, password, email } = this.state;
    console.log(this.state);
    service.signup({ username, password, email });
    //this.props.signup({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //console.log(name, value);
    this.setState({ [name]: value });
    //console.log(this.state);
  };

  render() {
    const { username, password, email } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title-signup">Sign up!</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(event) => this.handleFormSubmit(event)}
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

          <div className="container-button">
            <Button handleClickButton={this.handleFormSubmit} text="Signup" />
          </div>
        </form>

        <div className="login-text">
          <span>Already have account? </span>

          <Link to={"/login"}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(withStyles(styles, { withTheme: true })(Signup));
