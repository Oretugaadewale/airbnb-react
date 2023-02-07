import React from "react";

function Shopping(props) {
  //conditional rendering
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="swimming" className="card--image" />
      <div className="card--stats">
        <span className="des">{props.description}</span>
        <span>{props.rating}</span>
        <span className="stats--color">
          ({props.item.stats.reviewCount}) .{" "}
        </span>
        <span className="stats--location">({props.item.location}) . </span>
        <span className="stats--color">{props.item.country}</span>
        <p className="card--title">{props.item.title}</p>
        <p>
          <span className="card--price">${props.item.price}</span> / Person
        </p>
      </div>
    </div>
  );
}

export default Shopping;
