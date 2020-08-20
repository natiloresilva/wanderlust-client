import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class TripDetails extends Component {
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
      .get(`http://localhost:4000/travel/trip/${params.id}`)
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
        <Link to={"/private"}>Back to homepage</Link>
      </div>
    );
  }
}
export default TripDetails;
