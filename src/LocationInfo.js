import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import allowLocation from './img/allowLocation.png';

class LocationInfo extends React.Component {    
  render(){
    return  <div>
              <div className="alert alert-info">
                <strong>This application uses geolocation.</strong> Please allow Air Traffic Test to access your location.
              </div>
              <img src={allowLocation} alt="allowLocation"></img>
            </div>
  }
}
export default LocationInfo;