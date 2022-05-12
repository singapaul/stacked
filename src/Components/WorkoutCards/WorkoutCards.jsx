import "./WorkoutCards.scss";
import { Link } from "react-router-dom";

const WorkoutCards = ({ workout }) => {
  const obj = workout.lifts;
  let weight = 0;
  let reps = 0;
  for (const key in obj) {
    weight += obj[key].weight;
    reps += obj[key].reps;
  }

  const dateString = workout.dateCreated.slice(0, 10);
  return (
    <>
      <Link className="reactLink" to={`/workout/${workout.workoutId}`}>
        <div key={workout.id} className="lift-card">
          <div className="lift-card__headers">
            <h2 className="lift-card__title">{workout.workoutName}</h2>
            <h6 className="lift-card__date">🗓️ {dateString}</h6>
          </div>
          <div className="lift-card__subheaders">
            <div className="lift-card__reps">
              <p className="lift-card__icon">⚖️</p>
              <p className="lift-card__">{reps} reps</p>
            </div>
            <div className="lift-card__time">
              <p className="lift-card__icon">💪</p>
              <p className="lift-card__">TBC</p>
            </div>
            <div className="lift-card__weight">
              <p className="lift-card__icon">🔢</p>
              <p className="lift-card__">Total {weight} kg</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkoutCards;
