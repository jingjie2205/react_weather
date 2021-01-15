import React from "react";
import './components/style/App.css';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <div className = "app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
