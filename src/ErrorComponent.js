import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Error extends React.Component {    
  render(){
    return  <div className="alert alert-danger">
              <strong>Geolocation permission denied!</strong> Please allow Air Traffic Test to access your location by following <a href="http://waziggle.com/BrowserAllow.aspx" className="alert-link"> this instructions.</a>
            </div>
  }
}
export default Error;