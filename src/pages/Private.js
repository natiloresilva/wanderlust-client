import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import axios from "axios";
import { Typography } from "@material-ui/core";
import "../App.css";
import SearchBar from "../components/SearchBar/SearchBar";

class Private extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCallbackAction = this.handleCallbackAction.bind(this);
    this.state = {
      trips: [],
      textSearch: "",
      filterTrips: [],
    };
  }
  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/travel/trips`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          trips: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCallbackAction() {
    console.log("handleCallbackAction");

    this.getTrips();
  }

  notTripsVerify() {
    return (
      <div className="container-nottrips">
        <Typography variant="body2" color="textSecondary" component="p">
          ¡Todavía no tienes viajes, crea uno y que comience la aventura!
        </Typography>
      </div>
    );
  }

  showAllTrips() {
    if (this.state.trips.length === 0) {
      return this.notTripsVerify();
    }

    const trips = [...this.state.trips];
    const listAllTravels = trips.map((trip) => (
      // Correcto! La key debería ser especificada dentro del array.
      <Card
        key={trip._id}
        travel={{ trip }}
        callbackAction={this.handleCallbackAction}
      />
    ));

    // this.state.trips es un array de objetos!!!
    // console.log(this.state.trips);

    // tlistAllTravels es un array de componentes Card!!!
    // console.log(listAllTravels);

    return <div>{listAllTravels}</div>;
  }

  showFilterTrips() {
    if (this.state.trips.length === 0) {
      return this.notTripsVerify();
    }

    const tripsToFilter = [...this.state.trips];

    // Primero filtramos segun el valor del textSearch (operador filter) y luego mapeamos para transformarlos en un array de componentes Card (operador map)
    const listFilterTravels = tripsToFilter
      .filter((trip) => {
        if (
          trip.travelCity
            .toLowerCase()
            .includes(this.state.textSearch.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map((trip) => <Card key={trip._id} travel={{ trip }} />);

    return <div>{listFilterTravels}</div>;
  }

  handleSearch(search) {
    this.setState({ textSearch: search });
  }

  render() {
    return (
      <div>
        <div className="container-home">
          <div className="title-home">
            <Typography gutterBottom variant="h3" component="h3">
              Hello, {this.props.user.username} !
            </Typography>
          </div>
          <SearchBar handleSearch={this.handleSearch} />
          {/* Si hay una búsqueda me muestra showFilterTrips sino showAllTrips */}
          {this.state.textSearch.length > 0
            ? this.showFilterTrips()
            : this.showAllTrips()}
        </div>
        <NavBar />
      </div>
    );
  }
}

export default withAuth(Private);
