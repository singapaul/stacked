import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.scss";
import { useEffect, useState } from "react";
import {
  addLift,
  putLift,
  deleteLiftFetch,
  deleteFetch,
} from "../../funcs/functions.js";

const Detail2 = () => {
  const [workout, setWorkout] = useState({
    workoutId: 1,
    workoutName: "na",
    dateCreated: "2022-05-06T14:58:36.271+00:00",
    lifts: [],
  });

  // fetch request to get the workout
  const { workoutId } = useParams();
  let navigate = useNavigate();

  const getWorkout = async () => {
    let url = `http://localhost:8080/workout/${workoutId}`;
    try {
      const res = await fetch(url);
      const data = await res.json(url);
      setWorkout(data);
      setInputList(data.lifts);
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.stringify(workout));
  };

  const [editMode, setEditMode] = useState(false);
  const [inputList, setInputList] = useState(workout.lifts);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    console.log(index);
    const list = [...inputList];
    console.log(list[index].liftId);
    deleteLiftFetch(list[index].liftId);
    list.splice(index, 1);
    setInputList(list);
  };

  const deleteWorkout = (event) => {
    console.log(event.target.value);
    deleteFetch(event.target.value);
    console.log("deleted");
    let path = "/";
    navigate(path);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { liftId: "null", lift: "", weight: "", reps: "" },
    ]);
  };

  const editForm = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    getWorkout();
  }, []);

  // When you press save
  let handleSubmit = (event, index) => {
    event.preventDefault();
    const newLift = inputList[index];
    const JSONLift = JSON.stringify(newLift);
    const liftIdVal = newLift.liftId;

    if (liftIdVal == null) {
      addLift(JSONLift, workout.workoutId);
    } else {
      putLift(JSONLift, newLift.liftId);
    }
  };

  const dateString = workout.dateCreated.slice(0, 10);

  const displayWorkout = (
    <>
      <div className="metaData">
        <h1 className="workoutTitle">{workout.workoutName}</h1>
        <h3 className="workoutDate">{dateString}</h3>
      </div>

      <div className="liftGrid">
        {inputList.map((x, i) => {
          return (
            <div key={i} className="liftCard__lifts">
              <span>lift</span>
              <input
                disabled
                name="lift"
                placeholder="Select lift"
                value={x.lift}
                className="liftCard__lifts-lift"
                onChange={(e) => handleInputChange(e, i)}
              />
              <span>weight (kg)</span>
              <input
                disabled
                name="weight"
                className="liftCard__lifts-weight"
                placeholder="Enter weight"
                value={x.weight}
                onChange={(e) => handleInputChange(e, i)}
              />
              <span>reps</span>
              <input
                disabled
                name="reps"
                className="liftCard__lifts-reps"
                placeholder="Enter reps"
                value={x.reps}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
          );
        })}
      </div>
      <div className="extra-button-select">
        {" "}
        <button className="extra-button-select__edit" onClick={editForm}>
          edit
        </button>
        <button
          className="extra-button-select__del"
          value={workout.workoutId}
          onClick={deleteWorkout}
        >
          delete workout
        </button>
      </div>
    </>
  );

  const adjustWorkoutVTwo = (
    <>
      <div className="metaData">
        {" "}
        <h1 className="workoutTitle">{workout.workoutName}</h1>
        <h3 className="workoutDate">{dateString}</h3>
      </div>

      <div className="liftGrid">
        {inputList.map((x, i) => {
          return (
            <div key={i} className="liftCard__lifts">
              <span>lift</span>
              <input
                required
                name="lift"
                placeholder="Select lift"
                value={x.lift}
                className="liftCard__lifts-lift"
                onChange={(e) => handleInputChange(e, i)}
              />
              <span>weight (kg)</span>
              <input
                required
                name="weight"
                className="liftCard__lifts-weight"
                placeholder="Enter weight"
                value={x.weight}
                onChange={(e) => handleInputChange(e, i)}
              />
              <span>reps</span>
              <input
                required
                className="ml10"
                name="reps"
                className="liftCard__lifts-reps"
                placeholder="Enter reps"
                value={x.reps}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="button-selection">
                {inputList.length !== 1 && (
                  <button
                    className="button-selection__save"
                    onClick={(e) => handleSubmit(e, i)}
                  >
                    Save
                  </button>
                )}
                {inputList.length !== 1 && (
                  <button
                    className="button-selection__remove"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    className="button-selection__add"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="extra-button-select">
        {" "}
        <button className="extra-button-select__edit" onClick={editForm}>
          edit
        </button>
        <button
          className="extra-button-select__del"
          value={workout.workoutId}
          onClick={deleteWorkout}
        >
          delete workout
        </button>
      </div>
    </>
  );

  return (
    <div key={workout.id} className="liftCard">
      {editMode ? adjustWorkoutVTwo : displayWorkout}
    </div>
  );
};

export default Detail2;
