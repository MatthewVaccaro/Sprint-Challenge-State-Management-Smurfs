import React from "react";

const Smurf = props => {
  console.log("props name", props);
  return (
    <div className="contianer">
      <h1>{props.data.name}</h1>
      <h2>{props.data.age}</h2>
      <h3>{props.data.height}</h3>
    </div>
  );
};

export default Smurf;
