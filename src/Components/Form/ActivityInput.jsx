import "./ActivityInput.scss";

import React from "react";

const ActivityInput = () => {
  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.weightType.value);
    console.log(event.target.reps.value);
    console.log(event.target.weight.value);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="weightType"></label>
        <select name="weightType" id="">
          <option value="">-Please select-</option>
          <option value="shoulderPress">Shoulder Press</option>
          <option value="benchPress">Bench Press</option>
          <option value="squat">Squat</option>
          <option value="deadlift">Deadlift</option>
          <option value="row">Row</option>
          <option value="splitsquat">Split squat</option>
          <option value="lat">Lat Pulldown</option>
          <option value="bicep">Bicep Curl</option>
        </select>
        <label htmlFor="reps">Reps</label>
        <input type="number" name="reps" />
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ActivityInput;
