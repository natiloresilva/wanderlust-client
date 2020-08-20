import React, { Component } from "react";
import FlightIcon from "@material-ui/icons/Flight";
import "./world.css";

export default class World extends Component {
  render() {
    return (
      <div className="container">
        <div className="planet"></div>
        <div className="positioning-container">
          <div className="spinning-container">
            <div className="airplane-container">
              <FlightIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
