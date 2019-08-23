import React from "react";
import "./style.css";

function TitleCard(props) {
  return (

<div className="jumbotron">
  <h1 className="display-4">{props.title}</h1>
  <h2>{props.inst}</h2>
</div>
  );
}

export default TitleCard;