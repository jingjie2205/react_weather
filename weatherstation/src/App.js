import React from "react";
import './components/style/App.css';
import Home from './components/Home'
import Forecast from './components/24forecast'
import Map from './components/Map'
import Covidhome from './components/CovidHome';
// import Carpark from './components/Carpark';
import NewsHome from './components/NewsHome';
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className = "app">
        <Route path="/" exact component={Home} />
        <Route path="/covid" component={Covidhome}/>
        <Route path="/map" component={Map}/>
        <Route path="/24-hour" component={Forecast}/>
        <Route path="/news" component={NewsHome}/>
      </div>
    </Router>  
  );
}

export default App;
