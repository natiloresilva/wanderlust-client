import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Typography } from "@material-ui/core";
import "./tripdetail.css";
import Map from "../../components/Map/Map";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import PendingActivityCard from "../../components/PendingActivityCard/PendingActivityCard";

class TripDetail extends Component {
  constructor(props) {
    super(props);
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

            {/* 
        <div className="container-map">
          <Map lat={this.state.lat} lng={this.state.lng} />
        </div> 
        */}

            <div className="button-edit-trip">
              <Link
                to={`/trips/detail/edit/${this.state.travelCity}/${this.props.match.params.id}`}
              >
                Edit
              </Link>
            </div>

            {this.state.idActivities &&
              this.state.idActivities.map((activity) => (
                <PendingActivityCard info={activity} />
              ))}

            <br />
            <br />

            <Link
              to={{
                pathname: `/trips/detail/${this.state.travelCity}/${this.props.match.params.id}/addActivity`,
                state: { detail: this.props.match.params.id },
              }}
            >
              <Fab
                className="fab"
                size="small"
                color="secondary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Link>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default withAuth(TripDetail);
