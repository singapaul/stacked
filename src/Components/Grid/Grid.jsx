import WorkoutCards from "../WorkoutCards/WorkoutCards";
import "./Grid.scss";

const Grid = ({ workouts }) => {
  console.log(workouts, [...workouts].reverse());

  const reversedArray = [...workouts].reverse();

  return (
    <div className="Grid">
      {reversedArray.map((workout, index) => {
        return <WorkoutCards workout={workout} key={index} />;
      })}
    </div>
  );
};

export default Grid;
