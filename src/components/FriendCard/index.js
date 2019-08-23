import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.clicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span className="remove" onClick={() => props.deleteFriend(props.id)}>𝘅</span> */}
    </div>
  );
}

export default FriendCard;
