import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.user.username}</h1>

        <Link to={"/travel/trips"}> Create</Link>
      </div>
    );
  }
}

export default withAuth(Private);
