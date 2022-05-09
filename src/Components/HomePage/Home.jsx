// Page structure:
// 1. Nav Bar + log new workout - Component
// Compare workouts/see stats - Component
// 2. Top stats (bodyweight, slacking excercise, biggest session)
// 3. Grid of previous sessiosn  - click througth onto a new page

import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Data from "../Data/Data";
import Detail from "../DetailPage/Detail";
import Greeting from "../Greeting/Greeting";
import Grid from "../Grid/Grid";

const Home = () => {
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
    <>
      <Greeting />
      <Data />
      <Grid workouts={workouts} />
    </>
  );
};

export default Home;
