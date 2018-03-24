import React, { Component } from 'react';
import airplaneIcon from './img/airplaneIcon.svg';
import './App.css';
import FlightsList from './FlightsList';
import FlightDetails from './FlightDetails';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <Router>
      <div className="App">
        <header className="App-header">
          <img src={airplaneIcon} className="App-airplaneIcon" alt="airplaneIcon" />
          <h1 className="App-title">Air Traffic Test</h1>
        </header>         
        <Route exact path="/flights" component={FlightsList}/>   
        <Route path="/flights/:flightId" component={FlightDetails}/>              
      </div>
      </Router>
    );
  }
}

export default App;
