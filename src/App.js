import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import './App.css';
import { Route } from 'react-router-dom';

import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className = "container">
      <h2>Customer Service Desk</h2>

      <Route path = "/" exact  component = {Login}></Route>
      <Route path = "/home" exact  component = {Dashboard}></Route>
      <Route path = "/viponthespot" exact  component = {Login}></Route>
      
    </div>
  );
}

export default App;
