import "./App.css";
import Graphs from "./Components/Graphs/Graphs";
import NavBar from "./Components/NavBar/NavBar";
import WorkoutForm from "./Components/WorkoutForm/WorkoutForm";
import { useState, useEffect } from "react";
import Grid from "./Components/Grid/Grid";

function App() {
  const [workouts, setWorkouts] = useState([
    {
      workoutId: 1,
      workoutName: "Bay",
      dateCreated: "2022-04-25T16:55:44.787+00:00",
      lifts: [
        { liftId: 1, reps: 2, weight: 4, lift: "bench" },
        { liftId: 1, reps: 2, weight: 4, lift: "bench" },
      ],
    },
  ]);

  const getWorkouts = async () => {
    let url = "https://stackedv2.nw.r.appspot.com/allWorkouts";
    try {
      const res = await fetch(url);
      const data = await res.json(url);
      setWorkouts(data);
      console.log("sucess");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <WorkoutForm />
      <Grid workouts={workouts} />
      <Graphs />
    </div>
  );
}

export default App;
