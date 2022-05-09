import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomePage/Home";
import Detail from "./Components/DetailPage/Detail";
const baseURL = "/stacked";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const getWorkouts = async () => {
    let url = "http://localhost:8080/allWorkouts";
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
    <Router basename={baseURL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workout/:workoutId"
          element={<Detail workoutArray={workouts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
