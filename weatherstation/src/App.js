import React from "react";
import './components/style/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Forecast from './components/24forecast'
import Map from './components/Map'
import Covidhome from './components/CovidHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className = "app">
        <Route path="/" exact component={Home} />
        <Route path="/covid" component={Covidhome}/>
        <Route path="/map" component={Map}/>
        <Route path="/24-hour" component={Forecast}/>
      </div>
    </Router>  
  );
}

export default App;
