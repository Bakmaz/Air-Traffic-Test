import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import noImage from './img/noImage.png';
import 'animate.css/animate.min.css';

class FlightDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      flightDetails: {},
      logo:''
    };
  }
  componentDidMount(){
    let id = this.props.match.params.flightId;
    axios.get('http://localhost:3001/flights?lat=' + localStorage.latitude + '&lng=' + localStorage.longitude +'&id='+ id)
      .then(res => {            
        this.setState({flightDetails: res.data});
        let companyInfo = 'https://company.clearbit.com/v1/domains/find?name=' + res.data.Op;
        let config = {
          headers: {'Authorization': 'Bearer sk_039c688ca06388db38c783a42a0f4f4f'}
        };
        axios.get(companyInfo, config)                                             
          .then( res => {
            this.setState({logo: res.data.logo});                 
          });
      });
    }
  render(){              
    return  <div className="flight-details w-50">            
              <div className="card card-details animated fadeInLeft w-100">              
                <div className="card-header"><img src={this.state.logo || noImage}  alt="noImage"/></div>
                <div className="card-body">
                  <h6>From:</h6> 
                  <h5 className="green">{this.state.flightDetails.From || 'N/A'}</h5>
                  <h6>To:</h6> 
                  <h5 className="green">{this.state.flightDetails.To || 'N/A'}</h5>                       
                </div>  
                <div className="card-footer">
                  <span className="green">{this.state.flightDetails.Mdl || 'N/A'}</span>
                </div>      
              </div>
              <Link to={'/flights/'}><button className="btn btn-default"><i className="fa fa-chevron-left"></i> Back to aircraft list</button></Link>
            </div> 
  }
}
export default FlightDetails;