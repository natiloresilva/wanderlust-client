import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Typography, Fab } from "@material-ui/core";
import "./tripdetail.css";
import Map from "../../components/Map/Map";
import PendingActivityCard from "../../components/PendingActivityCard/PendingActivityCard";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.editTrip = this.editTrip.bind(this);
    this.addActivity = this.addActivity.bind(this);

    this.state = {
      travelCity: "",
      startDate: "",
      returnDate: "",
      lng: "",
      lat: "",
      idActivities: [],
    };
  }
  componentDidMount() {
    this.getSingleTrip();
  }

  getSingleTrip = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_API_URI}/travel/trips/${params.id}`, {
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

  editTrip() {
    this.props.history.push(
      `/trips/detail/edit/${this.state.travelCity}/${this.props.match.params.id}`
    );
  }

  addActivity() {
    this.props.history.push({
      pathname: `/trips/detail/${this.state.travelCity}/${this.props.match.params.id}/addActivity`,
      state: { detail: this.props.match.params.id },
    });
  }

  verifyCoords() {
    switch (this.state.travelCity) {
      case "Barcelona":
        this.setState({
          lat: 41.3930245,
          lng: 2.1573873,
        });
        break;
      case "Amsterdam":
        this.setState({
          lat: 52.373825,
          lng: 4.8589047,
        });
        break;
      case "Berlin":
        this.setState({
          lat: 52.5244631,
          lng: 13.3865368,
        });
        break;
      case "Krakow":
        this.setState({
          lat: 50.0578748,
          lng: 19.8877378,
        });
        break;
      case "London":
        this.setState({
          lat: 51.5262928,
          lng: -0.1992605,
        });
        break;
      case "Madrid":
        this.setState({
          lat: 40.4155443,
          lng: -3.6865519,
        });
        break;
      case "Milan":
        this.setState({
          lat: 45.4741566,
          lng: 1420553,
        });
        break;
      case "Moscow":
        this.setState({
          lat: 55.7718597,
          lng: 37.4984548,
        });
        break;
      case "Munich":
        this.setState({
          lat: 48.1562184,
          lng: 11.5161934,
        });
        break;
      case "Oslo":
        this.setState({
          lat: 59.9136957,
          lng: 10.7345315,
        });
        break;
      case "Palermo":
        this.setState({
          lat: 38.1146911,
          lng: 13.3379048,
        });
        break;
      case "Paris":
        this.setState({
          lat: 48.8559709,
          lng: 2.3542182,
        });
        break;
      case "Roma":
        this.setState({
          lat: 41.907061,
          lng: 12.4665086,
        });
        break;
      case "Sydney":
        this.setState({
          lat: -33.8537157,
          lng: 151.0637258,
        });
        break;
      case "Tokyo":
        this.setState({
          lat: 35.6878077,
          lng: 139.6915164,
        });
        break;
      case "Valencia":
        this.setState({
          lat: 39.4780511,
          lng: -0.4280252,
        });
        break;
      case "Zurich":
        this.setState({
          lat: 47.3798431,
          lng: 8.5162227,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="container-home">
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
              {this.state.lat && this.state.lng ? (
                <Map lat={this.state.lat} lng={this.state.lng} />
              ) : null}
            </div>
            <Typography className="title-activities" variant="h4">
              Activities
            </Typography>
            {this.state.idActivities.length > 0 ? (
              this.state.idActivities.map((activity) => (
                <div className="container-activities">
                  <PendingActivityCard key={activity.id} info={activity} />
                </div>
              ))
            ) : (
              <Typography variant="body1">
                <span>You don´t have activities. Add a new one!</span>
              </Typography>
            )}

            <div className="button-edit-trip">
              <Button text="Edit" handleClickButton={this.editTrip} />
              <Button
                text="Add Activity"
                handleClickButton={this.addActivity}
              />
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default withAuth(TripDetail);
