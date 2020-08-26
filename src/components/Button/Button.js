import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class componentName extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={this.props.handleClickButton}
      >
        {this.props.text}
      </Button>
    );
  }
}
