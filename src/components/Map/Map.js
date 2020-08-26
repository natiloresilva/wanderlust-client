import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCK_tzHpBSY3rrUNdsC8RTLimE8kw8VYjI",
})(MapContainer);
