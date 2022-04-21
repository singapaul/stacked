import "./App.css";
import Filter from "./Components/Filter/Filter";
import Graphs from "./Components/Graphs/Graphs";
import LocalStorageTest from "./Components/LocalStorage/LocalStorageTest";
import NavBar from "./Components/NavBar/NavBar";
import WorkoutCards from "./Components/WorkoutCards/WorkoutCards";
import workoutOuts from "./Assets/MockData.js";
import ActivityInput from "./Components/Form/ActivityInput";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ActivityInput />
      <WorkoutCards data={workoutOuts} />
      <Graphs />
      <LocalStorageTest />
    </div>
  );
}

export default App;
