import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import { useEffect, useState } from "react";
import {
  addLift,
  putLift,
  editWorkoutName,
  deleteLiftFetch,
  deleteFetch,
  validateInput,
} from "../../funcs/functions.js";

const Detail = () => {
  const [workout, setWorkout] = useState({
    workoutId: 1,
    workoutName: "na",
    dateCreated: "2022-05-06T14:58:36.271+00:00",
    lifts: [
      { liftId: 1, reps: 1, weight: 1, lift: "deadlift" },
      { liftId: 1, reps: 1, weight: 1, lift: "squat" },
      { liftId: 1, reps: 1, weight: 1, lift: "deadlift" },
    ],
  });
  const [editMode, setEditMode] = useState(true);
  const [formValues, setFormValues] = useState(workout.lifts);

  // fetch request to get the workout
  const { workoutId } = useParams();
  const getWorkout = async () => {
    let url = `http://localhost:8080/workout/${workoutId}`;
    try {
      const res = await fetch(url);
      const data = await res.json(url);
      setWorkout(data);
      setFormValues(data.lifts);
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.stringify(workout));
  };

  const handleClick = (i, e) => {
    // will write the fetch in here
    const inlet = `{"workoutName" : "${workout.workoutName}"}`;
    editWorkoutName(workout.workoutId, inlet);
  };

  const editForm = () => {
    setEditMode(!editMode);
  };

  const deleteRequest = (event) => {
    deleteFetch(event.target.value);
    console.log(event.target.value);
  };

  let handleSubmit = (event, index) => {
    // event.preventDefault();
    // console.log(workout.lifts[event.target.value].weight);
    console.log(event);
    console.log(workout.lifts[event]);

    if (
      !validateInput(workout.lifts[event].weight, workout.lifts[event].reps)
    ) {
      return;
    }
    const newLift = workout.lifts[event];
    const idLift = workout.lifts[event].liftId;
    const idWorkout = workout.workoutId;
    const JSONLift = JSON.stringify(newLift);
    if (workout.lifts.length - (event + 1) < 0) {
      addLift(JSONLift, idWorkout);
    } else {
      putLift(JSONLift, idLift);
    }
  };

  useEffect(() => {
    getWorkout();
  }, []);

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    console.log(newFormValues);
  };

  const addFormFields = () => {
    setWorkout([, { lift: "", weight: "", reps: "" }]);
    console.log("pressed");
    console.log(formValues);
    console.log(workout);
  };

  const removeFormFields = (i, j) => {
    // Write the delete fetch here
    console.log(i);
    console.log(formValues[i]);
    console.log(formValues[i].liftId);
    deleteLiftFetch(formValues[i].liftId);
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const displayWorkout = (
    <>
      <p>{workout.workoutName}</p>
      <div className="liftCard__lifts">
        {workout.lifts.map((e, l) => {
          return (
            <div key={l}>
              <p>lift id: {e.liftId}</p>
              <p>Weight: {e.lift}</p>
              <p>KGs: {e.weight}</p>
              <p>Reps: {e.reps}</p>
            </div>
          );
        })}
      </div>
      <div>+ lift</div>
      <p>Workout ID: {workout.workoutId}</p>
      <p>{workout.dateCreated}</p>
    </>
  );

  const adjustWorkout = (
    <>
      <input
        required
        type="text"
        defaultValue={workout.workoutName}
        // onChange={(e) => handleName(e)}
      />{" "}
      <button onClick={(e) => handleClick(e)}>save workout changes</button>
      <div className="liftCard__lifts">
        {workout.lifts.map((e, l) => {
          return (
            <div className="liftCard__lifts-card" key={l}>
              <select
                required
                onChange={(e) => handleChange(l, e)}
                name="lift"
                defaultValue={e.lift}
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
              <p>
                KGs:{" "}
                <input
                  onChange={(e) => handleChange(l, e)}
                  defaultValue={e.weight}
                  type="number"
                  name="weight"
                  required
                />
              </p>
              <p>
                Reps:{" "}
                <input
                  onChange={(e) => handleChange(l, e)}
                  defaultValue={e.reps}
                  type="number"
                  name="reps"
                  required
                />
              </p>

              <button onClick={(e) => removeFormFields(l, e)}>remove</button>
              <button onClick={(e) => handleSubmit(l, e)}>save</button>
            </div>
          );
        })}
        <div className="liftCard__lifts-card">
          <button onClick={addFormFields}>ADD Lift</button>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <p>hello</p>
      {editMode ? displayWorkout : adjustWorkout}
      <button onClick={editForm}>edit</button>
      <button value={workout.workoutId} onClick={deleteRequest}>
        delete workout
      </button>
    </div>
  );
};

export default Detail;
