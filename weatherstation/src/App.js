import React from "react";
import './components/style/App.css';
import Header from './components/Header';
// import Home from './components/Home'
// import Forecast from './components/24forecast'
// import Forecast1 from './components/24forecast1';
// import Forecast2 from './components/24forecast2';
// import CovidChart from './components/Covidgraph';
import Covidhome from './components/CovidHome';



function App() {
  return (
    <div className = "app">
      <Header />
      <Covidhome />
    </div>
  );
}

export default App;
