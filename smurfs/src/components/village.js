import React, { useContext } from "react";
import smurfContext from "../contexts/smurfContext";
import Smurf from "./smurf";

const Village = () => {
  const { personList } = useContext(smurfContext);

  return (
    <div className="village">
      {personList
        ? personList.map(cv => {
            return <Smurf data={cv} key={cv.id} />;
          })
        : "No Smurfs Here"}
    </div>
  );
};

export default Village;
