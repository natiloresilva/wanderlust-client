import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getTrips();
  }
  getTrips = () => {
    axios
      .get(`http://localhost:4000/travel/trips`, {
        withCredentials: true,
      })
      .then((response) => {
        const trips = response.data;
        this.setState(trips);
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
