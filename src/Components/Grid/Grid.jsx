import WorkoutCards from "../WorkoutCards/WorkoutCards";
import "./Grid.scss";

const Grid = ({ workouts }) => {
  return (
    <div className="Grid">
      {workouts.map((workout, index) => {
        return <WorkoutCards workout={workout} key={index} />;
      })}
    </div>
  );
};

export default Grid;
