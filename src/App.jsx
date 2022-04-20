import "./App.css";
import Filter from "./Components/Filter/Filter";
import Graphs from "./Components/Graphs/Graphs";
import LocalStorageTest from "./Components/LocalStorage/LocalStorageTest";
import NavBar from "./Components/NavBar/NavBar";
import WorkoutCards from "./Components/WorkoutCards/WorkoutCards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filter />
      <WorkoutCards />
      <Graphs />
      <LocalStorageTest />
    </div>
  );
}

export default App;
