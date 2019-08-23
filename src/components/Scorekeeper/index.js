import React from "react";
import "./style.css";

function Scorekeeper(props) {
  return (
<div>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Score: {props.score} | Top Score: {props.topscore} </span>
</nav>
</div>
  );
}

export default Scorekeeper;