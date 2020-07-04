import React from 'react';
import logo from './logo.svg';
import './App.css';
import CovidTable from './Components/Table'
import Chart from './Components/Chart/Chart'

function App() {
  return (
    <div className="App">
      <h1>Covid19 Data</h1>
      <CovidTable/>
      <Chart country="spain"/>
    </div>
  );
}

export default App;
