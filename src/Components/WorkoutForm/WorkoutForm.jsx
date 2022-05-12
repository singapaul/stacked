import React, { useState } from "react";
import "./WorkoutForm.scss";

const WorkoutForm = ({ showDropdown }) => {
  const [formValues, setFormValues] = useState([
    { lift: "", weight: "", reps: "" },
  ]);

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
    let url = "http://localhost:8080/workout";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postRequest,
    });
    const data = await res.text(url);
    console.log(data);
  };

  const formStyle = showDropdown ? "active" : "";

  return (
    <form className={`dropdown ${formStyle}`} onSubmit={handleSubmit}>
      <input
        required
        aria-label="input"
        type="text"
        name="name"
        placeholder="Workout name"
      />
      <div className="input-div">
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <div className="form-inline-subdiv">
              <select
                onChange={(e) => handleChange(index, e)}
                value={element.name}
                className="form-inline-lift"
                name="lift"
                required
              >
                <option value="">Choose lift</option>
                <option value="shoulderPress">Shoulder Press</option>
                <option value="benchPress">Bench Press</option>
                <option value="squat">Squat</option>
                <option value="deadlift">Deadlift</option>
                <option value="row">Row</option>
                <option value="splitsquat">Split squat</option>
                <option value="lat">Lat Pulldown</option>
                <option value="bicep">Bicep Curl</option>
              </select>{" "}
              <input
                className="form-inline-reps"
                required
                type="number"
                placeholder="reps"
                name="reps"
                value={element.reps || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <input
                required
                placeholder="weight (kg)"
                className="form-inline-weight"
                type="number"
                name="weight"
                value={element.weight || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            {true ? (
              <button
                type="button"
                className="form-inline-remove"
                onClick={() => removeFormFields(index)}
              >
                ❌
              </button>
            ) : null}
          </div>
        ))}
      </div>

      <div className="button-section">
        <button
          className="button-section__add"
          type="button"
          onClick={() => addFormFields()}
        >
          add lift ➕
        </button>
        <button
          className="button-section__submit"
          type="submit"
          aria-label="submit"
        >
          submit ✅
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
