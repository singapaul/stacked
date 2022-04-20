import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../../localStorage.js";

const LocalStorageTest = () => {
  const [name, setName] = useState("");
  const mockData = [
    { name: "Paul", age: 1 },
    { name: "Dan", age: 11 },
    { name: "Steve", age: 111 },
  ];
  const [namez, setNamez] = useState(mockData);
  // Object state
  // We'll save whole object as JSON

  // 1. Stringify namez
  // 2. take new JSON value and set new local storage w/  new key
  useEffect(() => {
    setLocalStorage("Pauls", JSON.stringify(namez));
  }, [name]);

  const nameInput = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    setName(event.target.name.value);
    setLocalStorage("Paul", event.target.name.value);
  };

  const value1 = eval(getLocalStorage("Pauls"))[2].name;

  return (
    <div>
      <h1>hello</h1>

      <form onSubmit={nameInput}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{getLocalStorage("Paul")}</p>
      <p>{value1}</p>
    </div>
  );
};

export default LocalStorageTest;
