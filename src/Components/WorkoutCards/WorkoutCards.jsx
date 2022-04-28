import "./WorkoutCards.scss";

const WorkoutCards = ({ workout }) => {
  // State management
  const deleteRequest = (event) => {
    console.log(`Delete the entry with the id ${event.target.value}`);
    deleteFetch(event.target.value);
  };

  const deleteFetch = () => {
    console.log("balls");
  };

  return (
    <div key={workout.id} className="liftCard">
      <button>edit</button>
      <button value={workout.workoutId} onClick={deleteRequest}>
        delete
      </button>
      <p>{workout.workoutName}</p>
      <p>Workout ID: {workout.workoutId}</p>
      <p>{workout.dateCreated}</p>
      <div className="liftCard__lifts">
        {workout.lifts.map((e, l) => {
          return (
            <div key={l} className="liftCard__lifts__lift">
              <p>{e.lift}</p>
              <p>reps: {e.reps}</p>
              <p>weight (KGs): {e.weight}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutCards;
