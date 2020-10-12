import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <Router> 
      <>
        <Route exact path="/" component={Home}/>
        <Switch>
        < Route path='/skill' component={Skill}/>
        < Route path='/education' component={Education} />
        < Route path='/experience' component={Experience} />
        < Route path='/portfolio' component={Portfolio} />

        </Switch>
      </>
    </Router>
  );
}

export default App;
