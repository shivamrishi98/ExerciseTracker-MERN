import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./Components/navbar.component"
import ExerciseList from "./Components/exercises-list.component"
import EditExercise from "./Components/edit-exercise.component"
import CreateExercise from "./Components/create-exercise.component"
import CreateUser from "./Components/create-user.component"

function App() {
  return (
    <Router>
      
    <div className="container">
    <Navbar />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
