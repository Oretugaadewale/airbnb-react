import React from "react";

function joke(props) {
  console.log(props.comment);
  return (
    <div>
      {props.setup && <h3>setup: {props.setup}</h3>}
      <p>punchline: {props.punchline}</p>
    </div>
  );
}

export default joke;
