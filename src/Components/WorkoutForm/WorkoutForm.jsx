import React, { useState } from "react";

const WorkoutForm = () => {
  const [formValues, setFormValues] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { lift: "", weight: "", reps: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    const lifts = JSON.stringify(formValues);
    console.log(event.target.name.value);
    console.log(lifts);
    const output = `{"workoutName":"${event.target.name.value}", "lifts": ${lifts} }`;
    console.log(output);
    postWorkout(output);
  };

  const postWorkout = async (postRequest) => {
    let url = "https://stackedv2.nw.r.appspot.com/workout";

    console.log(postRequest);
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: postRequest,
    // })
    //   .then((response) => response.json())
    //   .then((postRequest) => {
    //     console.log("Success: ", postRequest);
    //     console.log(postRequest);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    console.log("start");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postRequest,
    });
    console.log("midpoint");
    console.log(res);
    const data = await res.text(url);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Workout Name</label>
      <input aria-label="input" type="text" name="name" />
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <label htmlFor="lift">Lift</label>
          <select
            onChange={(e) => handleChange(index, e)}
            value={element.name}
            name="lift"
          >
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
          <label>{`Weight (KGs)`}</label>
          <input
            type="number"
            name="weight"
            value={element.weight || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <label>Total reps</label>
          <input
            type="number"
            name="reps"
            value={element.reps || ""}
            onChange={(e) => handleChange(index, e)}
          />
          {index ? (
            <button
              type="button"
              className="button remove"
              onClick={() => removeFormFields(index)}
            >
              Remove
            </button>
          ) : null}
        </div>
      ))}
      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
