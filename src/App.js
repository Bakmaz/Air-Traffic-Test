import React, { Component } from 'react';
import airplaneIcon from './img/airplaneIcon.svg';
import './App.css';
import FlightsList from './FlightsList';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={airplaneIcon} className="App-airplaneIcon" alt="airplaneIcon" />
          <h1 className="App-title">Air Traffic Test</h1>
        </header>                
      </div>
    );
  }
}

export default App;
