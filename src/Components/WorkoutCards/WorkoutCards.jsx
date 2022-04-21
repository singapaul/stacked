import { type } from "@testing-library/user-event/dist/type";
import "./WorkoutCards.scss";
const WorkoutCards = ({ data }) => {
  const displayToScreen = data.map((workout, index) => (
    <div key={index} className="stuf">
      <h2>{workout.name}</h2>
      <p>{workout.type[0]}</p>
      <p>{workout.reps}</p>
      <p>{workout.weight}</p>
    </div>
  ));

  return <div className="workoutCards">{displayToScreen}</div>;
};

export default WorkoutCards;
