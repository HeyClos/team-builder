import React from 'react';
import './App.css';
import React, { useState } from "react";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [teamInfo, setTeamInfo] = useState({
    username: "",
    password: ""
  });

  const submitHandler = event => {
    event.preventDefault();
    // console.log(username)
    // console.log(password)
    // Send data to server
    // Change data
    // Go to a new page
  };

  const changeHandler = event => {
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value + "i"
    });
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={changeHandler}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            // type="password"
            placeholder="Enter your password"
            value={formState.password}
            onChange={changeHandler}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
