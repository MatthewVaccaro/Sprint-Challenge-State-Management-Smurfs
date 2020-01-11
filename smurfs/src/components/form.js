import React, { useContext } from "react";
import formContext from "../contexts/formContext";

const Form = () => {
  const { formValue, setFormValue, changeHandler, submitHandler } = useContext(
    formContext
  );

  console.log("form value", formValue);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formValue.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={formValue.age}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="heigh"
          name="height"
          value={formValue.height}
          onChange={changeHandler}
        />
        <button type="submit">Create Smurf!</button>
      </form>
    </div>
  );
};

export default Form;

{
  /* <label htmlFor="name">What is your name?</label>
          <input type="text" name="name" value={formValue.name} placeholder="Smurfy McSmurf-Face" onChange={handleChanges} /> */
}
