import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";
import ItemDetails from "./ItemDetails";
import Weapons from "./Weapons";
import UserStats from "./UserStats";
import Home from "./Home";
import Nav from "./Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/items" exact component={Items} />

          <Route path="/weapons" exact component={Weapons} />

          <Route path="/userstats" exact component={UserStats} />

          <Route path="/items/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
