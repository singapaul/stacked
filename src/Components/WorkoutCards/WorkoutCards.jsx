import "./WorkoutCards.scss";
import { useState } from "react";

const WorkoutCards = ({ workout }) => {
  // State management
  const [editMode, setEditMode] = useState(false);

  // code for editing the form
  const [formValues, setFormValues] = useState(workout.lifts);
  const [wName, setWName] = useState(workout.workoutName);

  const handleName = (e) => {
    setWName(e.target.value);
  };

  const handleClick = (i, e) => {
    // will write the fetch in here
    console.log(wName);
    console.log(JSON.stringify(wName));
    const inlet = `{"workoutName": "${wName}", "lifts" : []}`;
    console.group(inlet);
    putName(27, JSON.stringify(inlet));
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    console.log(e);
    console.log(i);
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { lift: "", weight: "", reps: "" }]);
  };

  let removeFormFields = (i, j) => {
    // Write the delete fetch here
    console.log(i);
    console.log(formValues[i]);
    console.log(formValues[i].liftId);
    deleteLiftFetch(formValues[i].liftId);
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const validateInput = (weight, rep) => {
    if (weight === "" || rep === "") {
      alert("Please enter all fields");
      console.log("false");
      return false;
    }

    // other validations

    return true;
  };
  // When you press save
  let handleSubmit = (event, index) => {
    // event.preventDefault();
    console.log(formValues[event].weight);
    if (!validateInput(formValues[event].weight, formValues[event].reps)) {
      return;
    }
    const newLift = formValues[event];
    const idLift = formValues[event].liftId;
    const idWorkout = workout.workoutId;
    const JSONLift = JSON.stringify(newLift);
    if (workout.lifts.length - (event + 1) < 0) {
      addLift(JSONLift, idWorkout);
    } else {
      putLift(JSONLift, idLift);
    }
  };

  const addLift = async (postRequest, id) => {
    let url = `http://localhost:8080/lift/${id}`;
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

  const putLift = async (putRequest, idLift) => {
    let url = `http://localhost:8080/lift/${idLift}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: putRequest,
    });
    const data = await res.text(url);
    console.log(data);
  };

  const editForm = () => {
    setEditMode(!editMode);
    console.log(editMode);
  };

  const putName = async (workoutID, workoutName) => {
    let url = `http://localhost:8080/workout/${workoutID}`;
    console.log(url);
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: workoutName,
    });
    const data = await res.JSON(url);
    console.log(data);
  };

  const deleteRequest = (event) => {
    alert("You're about to permanently delete these gains");
    deleteFetch(event.target.value);
  };

  const deleteLiftFetch = async (id) => {
    let url = `http://localhost:8080/lift/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
    const data = await res.text(url);
  };

  const deleteFetch = async (id) => {
    let url = `http://localhost:8080/workout/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
    const data = await res.text(url);
    console.log(data);
  };

  const adjustWorkoutVTwo = (
    <>
      <button
        onClick={() => {
          console.log(formValues);
        }}
      >
        log form values
      </button>

      <input
        required
        type="text"
        defaultValue={workout.workoutName}
        onChange={(e) => handleName(e)}
      />
      <button onClick={(e) => handleClick(e)}>save workout changes</button>
      <table>
        <tbody>
          {" "}
          <tr>
            <th>Lift Id</th>
            <th>Lift</th>
            <th>Weight(KGs)</th>
            <th>Reps</th>
            <th>Buttons</th>
          </tr>
          {formValues.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.liftId}</td>
                <td name="name">
                  <select
                    required
                    onChange={(e) => handleChange(index, e)}
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
                </td>
                <td>
                  <input
                    onChange={(e) => handleChange(index, e)}
                    defaultValue={e.weight}
                    type="number"
                    name="weight"
                    required
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => handleChange(index, e)}
                    defaultValue={e.reps}
                    type="number"
                    name="reps"
                    required
                  />
                </td>

                <td>
                  <button onClick={(e) => removeFormFields(index, e)}>
                    remove
                  </button>
                  <button onClick={(e) => handleSubmit(index, e)}>save</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={addFormFields}>ADD Lift</button>
      <p>Workout ID: {workout.workoutId}</p>
      <p>{workout.dateCreated}</p>
    </>
  );

  const displayWorkout = (
    <>
      <p>{workout.workoutName}</p>
      <div className="liftCard__lifts">
        {
          <table>
            <tbody>
              <tr>
                <th>lift id</th>
                <th>Lift</th>
                <th>Weight(KGs)</th>
                <th>Reps</th>
              </tr>
              {workout.lifts.map((e, l) => {
                return (
                  <tr key={l}>
                    <td>{e.liftId}</td>
                    <td>{e.lift}</td>
                    <td>{e.weight}</td>
                    <td>{e.reps}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
      <p>Workout ID: {workout.workoutId}</p>
      <p>{workout.dateCreated}</p>
    </>
  );

  return (
    <div key={workout.id} className="liftCard">
      <button onClick={editForm}>edit</button>
      <button value={workout.workoutId} onClick={deleteRequest}>
        delete workout
      </button>
      {editMode ? adjustWorkoutVTwo : displayWorkout}
    </div>
  );
};

export default WorkoutCards;
