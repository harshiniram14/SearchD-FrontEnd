// import React, {useState} from "react";
import React from 'react'
import './App.css';
import  Page1  from "./Page1";
import Get from "./Get";
import Form from "./Form";
import Delete from "./Delete";
import Put from "./Put";
import First from "./First";

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={First}></Route>
        <Route exact path="/Page" component={Page1}></Route>
        <Route exact path="/Page2" component={Form}></Route>
        <Route exact path="/Page3" component={Put}></Route>
        <Route exact path="/Page4" component={Delete}></Route>
        <Route exact path="/Page5" component={Get}></Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
