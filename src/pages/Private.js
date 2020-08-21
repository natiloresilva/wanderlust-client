import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.user.username}</h1>

        <NavBar />
      </div>
    );
  }
}

export default withAuth(Private);
