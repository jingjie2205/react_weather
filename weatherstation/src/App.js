import React from "react";
import './components/style/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
// import Forecast from './components/24forecast'
// import Forecast1 from './components/24forecast1';
// import Forecast2 from './components/24forecast2';
// import CovidChart from './components/Covidgraph';
import Covidhome from './components/CovidHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className = "app">
        {/* <NavBar /> */}
        <Route path="/" exact component={Home} />
        <Route path="/covid" component={Covidhome}/>
      </div>
    </Router>  
  );
}

export default App;
