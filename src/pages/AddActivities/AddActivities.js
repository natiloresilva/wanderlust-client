import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Typography } from "@material-ui/core";
import "./addActivities.css";
import { render } from "@testing-library/react";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

class AddActivities extends Component {
  constructor(props) {
    super(props);
    this.getPubs = this.getPubs.bind(this);
    this.getCulture = this.getCulture.bind(this);
    this.getKidFriendly = this.getCulture.bind(this);

    this.state = {
      travelCity: "",
      results: [],
    };
  }

  getCuisine = () => {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=cuisine&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((cuisineResponse) => {
        console.log('hola', cuisineResponse);
        this.setState({ results: cuisineResponse.data.results });
      });
  };

  getPubs() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=drinks&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((pubsResponse) => {
        console.log(pubsResponse);
        this.setState({ results: pubsResponse.data.results });
      });
  }

  getCulture() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=culture&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((cultureResponse) => {
        console.log(cultureResponse);
        this.setState({ results: cultureResponse.data.results });
      });
  }

  getKidFriendly() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=character-Kid_friendly&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((kidFriendlyResponse) => {
        console.log(kidFriendlyResponse);
        this.setState({ results: kidFriendlyResponse.data.results });
      });
  }

  goBack = () => {
    this.props.history.push("/home");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.travelCity}</h1>

        <Button
          type="button"
          text="Cuisine"
          handleClickButton={this.getCuisine}
        />

        <Button type="button" text="Pubs" handleClickButton={this.getPubs} />

        <Button
          type="button"
          text="Culture"
          handleClickButton={this.getCulture}
        />

        <Button
          type="button"
          text="Kid Friendly"
          handleClickButton={this.getKidFriendly}
        />

        <div className="container-createtrip-buttons">
          <Button type="button" text="Back" handleClickButton={this.goBack} />
        </div>

        <ActivityCard info={this.state.results} params={this.props.match.params.id} />

        <NavBar />
      </div>
    );
  }
}

export default withAuth(AddActivities);
