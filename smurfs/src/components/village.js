import React, { useContext } from "react";
import smurfContext from "../contexts/smurfContext";
import Smurf from "./smurf";

const Village = () => {
  const { personList } = useContext(smurfContext);

  return (
    <div>
      {personList
        ? personList.map(cv => {
            return <Smurf data={cv} key={cv.id} />;
          })
        : "No Smurfs Here"}

      <button
        onClick={() => {
          console.log("personList", personList);
        }}
      >
        this.state.
      </button>
    </div>
  );
};

export default Village;
