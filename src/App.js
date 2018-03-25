import React, { Component } from 'react';
import airplaneIcon from './img/airplaneIcon.svg';
import './App.css';
import FlightsList from './FlightsList';
import FlightDetails from './FlightDetails';
import ErrorComponent from './ErrorComponent';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state={
      redirectToFlightList: false,
      redirectToErrorComponent: false
        };
  }

  componentDidMount(){
    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      localStorage.latitude = position.coords.latitude;
      localStorage.longitude = position.coords.longitude;
      self.setState({redirectToFlightList: true});
    }, function(){
      self.setState({redirectToErrorComponent: true});
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
        <Route path="/error" component={ErrorComponent}/>
        {
          this.state.redirectToFlightList ? (
            <Redirect to="/flights"/>
          ) : ( <div/> )
        }
        {
          this.state.redirectToErrorComponent ? (
            <Redirect to="/error"/>
          ) : ( <div/> )
        }
      </div>
      
      </Router>
    );
  }
}

export default App;
