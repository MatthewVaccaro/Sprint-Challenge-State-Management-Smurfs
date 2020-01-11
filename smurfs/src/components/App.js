import React, { useEffect, useState } from "react";
import smurfContext from "../contexts/smurfContext";
import formContext from "../contexts/formContext";
import village from "./village";
import axios from "axios";
import Form from "./form";

import "./App.css";
import Village from "./village";

const App = () => {
  const [personList, setPersonList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const changeHandler = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log("Sub is working");
    const idDate = Date.now();
    let newDude = { ...formValue, id: idDate };
    console.log("new dude", newDude);
    axios
      .post("http://localhost:3333/smurfs", newDude)
      .then(res => {
        setPersonList([...personList, res.data]);
        setFormValue({ name: "", age: "", height: "", id: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setPersonList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [personList]);

  return (
    <div>
      <button
        onClick={() => {
          console.log("personList", personList);
        }}
      >
        this.state.
      </button>
      <smurfContext.Provider value={{ personList }}>
        <formContext.Provider
          value={{ formValue, setFormValue, changeHandler, submitHandler }}
        >
          <Form />
          <Village />
        </formContext.Provider>
      </smurfContext.Provider>
    </div>
  );
};

export default App;
