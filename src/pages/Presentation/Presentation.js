import React from "react";
import World from "../../components/World";
import "./presentation.css";

function Presentation(props) {
  return (
    <div onClick={props.handleClickPresentation}>
      <World />
      <h1 className="title-presentation">Wanderlust</h1>
    </div>
  );
}
export default Presentation;
