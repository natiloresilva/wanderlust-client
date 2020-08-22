import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Typography } from "@material-ui/core";
import "./tripdetail.css";
import Map from "../../components/Map/Map";

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelCity: "",
      startDate: "",
      returnDate: "",
      lng: "",
      lat: "",
    };
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
        this.verifyCoords();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  verifyCoords() {
    switch (this.state.travelCity) {
      case "Roma":
        this.setState({
          lat: 41.907061,
          lng: 12.4665086,
        });
        break;
      case "Barcelona":
        this.setState({
          lat: 41.3930245,
          lng: 2.1573873,
        });
        break;
      case "Madrid":
        this.setState({
          lat: 40.4155443,
          lng: -3.6865519,
        });
        break;
      case "Paris":
        this.setState({
          lat: 48.8559709,
          lng: 2.3542182,
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="container-trip-detail">
        <Typography variant="h4">{this.state.travelCity}</Typography>
        <Typography variant="body1">
          <span>Start Date: </span>
          {this.state.startDate}
        </Typography>
        <Typography variant="body1">
          <span>Return Date: </span>
          {this.state.returnDate}
        </Typography>

        <div className="container-map">
          <Map lat={this.state.lat} lng={this.state.lng} />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default withAuth(TripDetail);
