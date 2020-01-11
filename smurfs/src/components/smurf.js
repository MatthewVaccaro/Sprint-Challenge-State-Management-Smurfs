import React from "react";

const Smurf = props => {
  console.log("props name", props);
  return (
    <div className="contianer">
      <h1>{props.data.name}</h1>
      <h2>
        {props.data.age} | {props.data.height}{" "}
      </h2>
    </div>
  );
};

export default Smurf;
