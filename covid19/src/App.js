import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Chart/Chart'
import CovidTable from './Components/Table/Table'

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
