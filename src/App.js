import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route } from "react-router-dom";
import './App.css';

import Login from "./components/login.component";
import VipOntheSpot from "./components/viponthespot.component";
import SuwasampathaOntheSpot from "./components/suwasampatha.component";
import MarineOntheSpot from "./components/marineonthespot.component";
import KnowledgeNet from "./components/Knowledgenet.component";
import ComplainManager from "./components/complainmanager.component";
import Home from "./components/main.component";
import NumberInsert from "./components/insertnumber.component";
import SLMap from "./components/srilankamap.component";
import VehicleResults from "./components/vehiclesearchresult.component";

function App() {
  return (
    <Router>
      <div className = "App">

      <Route path = "/" exact  component = {Login}></Route>
      <Route path = "/home" component = {Home}></Route>
      <Route path = "/viponthespot" component = {VipOntheSpot}></Route>
      <Route path = "/suwasampathaonthespot" component = {SuwasampathaOntheSpot}></Route>
      <Route path = "/marineonthespot" component = {MarineOntheSpot}></Route>
      <Route path = "/knowledgenet" component = {KnowledgeNet}></Route>
      <Route path = "/complainmanager" component = {ComplainManager}></Route>
      <Route path = "/numberinsert" component = {NumberInsert}></Route>
      <Route path = "/srilankamap" component = {SLMap}></Route>
      <Route path = "/vehicleresult/" component = {VehicleResults}></Route>

    </div>
    </Router>
  );
}

export default App;
