import "./WorkoutCards.scss";

const WorkoutCards = ({ workout }) => {
  // State management

  return (
    <div key={workout.id} className="liftCard">
      <button>edit</button>
      <button>delete</button>
      <p>{workout.workoutName}</p>
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
