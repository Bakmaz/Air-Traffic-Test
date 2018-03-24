import React, { Component } from 'react';
import airplaneIcon from './img/airplaneIcon.svg';
import './App.css';
import FlightsList from './FlightsList';
import FlightDetails from './FlightDetails';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state={
      redirectToFlightList: false,
      redirectToError: false
        };
  }

  componentDidMount(){
    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      self.setState({redirectToFlightList: true});
    }, function(){
      self.setState({redirectToError: true});
    });
  }
  
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
        {
          this.state.redirectToFlightList ? (
            <Redirect to="/flights"/>
          ) : ( <div/> )
        }
        {
          this.state.redirectToError ? (
            <Redirect to="/error"/>
          ) : ( <div/> )
        }
      </div>
      
      </Router>
    );
  }
}

export default App;
