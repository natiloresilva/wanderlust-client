import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getSingleTrip();
  }
  getSingleTrip = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/travel/trips/${params.id}`, {
        withCredentials: true,
      })
      .then((responseFromApi) => {
        const theTrip = responseFromApi.data;
        this.setState(theTrip);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>{this.state.travelCity}</h1>
        <p>{this.state.startDate}</p>
        <p>{this.state.returnDate}</p>
        <div>{this.state.idActivities}</div>

        <Link to={{ pathname: `/trips/detail/edit/${this.state._id}` }}>
          <button type="button">Edit</button>
        </Link>

        <Link to="/home">
          <Button text="Back" />
        </Link>

        <NavBar />
      </div>
    );
  }
}

export default withAuth(TripDetail);
