export const validateInput = (weight, rep) => {
  if (weight === "" || rep === "") {
    alert("Please enter all fields");
    console.log("false");
    return false;
  }
  // other validations
  return true;
};


export const addLift = async (postRequest, id) => {
  let url = `http://localhost:8080/lift/${id}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postRequest,
  });
  const data = await res.text(url);
  console.log(data);
};

export const putLift = async (putRequest, idLift) => {
  let url = `http://localhost:8080/lift/${idLift}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: putRequest,
  });
  const data = await res.text(url);
  console.log(data);
};

export const editWorkoutName = async (workoutID, workoutName) => {
  let url = `http://localhost:8080/workout/${workoutID}`;
  console.log(url);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: workoutName,
  });
  const data = await res.text(url);
  console.log(data);
};

export const deleteLiftFetch = async (id) => {
  let url = `http://localhost:8080/lift/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  const data = await res.text(url);
  console.log(data);
};

export const deleteFetch = async (id) => {
  let url = `http://localhost:8080/workout/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  const data = await res.text(url);
  console.log(data);
};