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
    this.getShopping = this.getShopping.bind(this);
    this.getSports = this.getSports.bind(this);
    this.getNature = this.getNature.bind(this);
    this.getWellness = this.getWellness.bind(this);
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
        console.log("hola", cuisineResponse);
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

  getShopping() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=shopping|poitype-Shopping_centre|poitype-Shopping_district|poitype-Convenience_store|poitype-Department_store|poitype-Liquor_store|poitype-Variety_store&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((shoppingResponse) => {
        console.log(shoppingResponse);
        this.setState({ results: shoppingResponse.data.results });
      });
  }

  getSports() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=subtype-Football_stadiums|subtype-Multi-purpose_stadiums|sports|surfing|poitype-Swimming_pool|swimming|watersports|wintersport&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((sportsResponse) => {
        console.log(sportsResponse);
        this.setState({ results: sportsResponse.data.results });
      });
  }

  getNature() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=exploringnature|poitype-Natural_feature|wildlife|national_park|poitype-Natural_wonder|character-Rocky_beach|character-Sandy_beach|poitype-Forest|poitype-Mountain|poitype-Hiking_trail|hiking|poitype-Hill&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((natureResponse) => {
        console.log(natureResponse);
        this.setState({ results: natureResponse.data.results });
      });
  }

  getWellness() {
    this.setState({ results: [] });
    axios
      .get(
        `https://www.triposo.com/api/20200803/location.json?part_of=${this.props.match.params.travelCity}&child_tag_labels=relaxinapark|wellness|poitype-Spa&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro`
      )
      .then((wellnessResponse) => {
        console.log(wellnessResponse);
        this.setState({ results: wellnessResponse.data.results });
      });
  }

  goBack = () => {
    this.props.history.push("/home");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container-home">
          <div className="title-home">
            <Typography gutterBottom variant="h4" component="h4">
              Discover new activities in the city!
            </Typography>
          </div>

          <div className="container-buttons">
            <Button
              type="button"
              text="Cuisine"
              handleClickButton={this.getCuisine}
            />

            <Button
              type="button"
              text="Nature"
              handleClickButton={this.getNature}
            />

            <Button
              type="button"
              text="Culture"
              handleClickButton={this.getCulture}
            />
          </div>

          <div className="container-buttons">
            <Button
              type="button"
              text="health"
              handleClickButton={this.getWellness}
            />

            <Button
              type="button"
              text=" Shopping "
              handleClickButton={this.getShopping}
            />

            <Button
              type="button"
              text="Sports"
              handleClickButton={this.getSports}
            />
          </div>

          <div className="container-buttons">
            <Button
              type="button"
              text="Pubs"
              handleClickButton={this.getPubs}
            />

            <Button
              type="button"
              text=" Kids "
              handleClickButton={this.getKidFriendly}
            />

            <Button type="button" text="Back" handleClickButton={this.goBack} />
          </div>
          <ActivityCard
            info={this.state.results}
            params={this.props.match.params.id}
          />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default withAuth(AddActivities);
