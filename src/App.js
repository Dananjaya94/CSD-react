import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route } from "react-router-dom";
import './App.css';

import Login from "./components/login.component";
import Dashboard from "./components/dashboard/Dashboard";
import VipOntheSpot from "./components/viponthespot.component";
import SuwasampathaOntheSpot from "./components/suwasampatha.component";
import MarineOntheSpot from "./components/marineonthespot.component";
import KnowledgeNet from "./components/Knowledgenet.component";
import ComplainManager from "./components/complainmanager.component";

function App() {
  return (
    <Router>
      <div className = "container">

      <Route path = "/" exact  component = {Login}></Route>
      <Route path = "/home" exact  component = {Dashboard}></Route>
      <Route path = "/viponthespot" exact  component = {VipOntheSpot}></Route>
      <Route path = "/suwasampathaonthespot" exact  component = {SuwasampathaOntheSpot}></Route>
      <Route path = "/marineonthespot" exact  component = {MarineOntheSpot}></Route>
      <Route path = "/knowledgenet" exact  component = {KnowledgeNet}></Route>
      <Route path = "/complainmanager" exact  component = {ComplainManager}></Route>
            
    </div>
    </Router>
  );
}

export default App;
