import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import airplaneIcon from './img/airplaneIcon.svg';

class FlightDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            flightDetails: {}
        };
    }
    componentDidMount(){
        let id = this.props.match.params.flightId;
        axios.get('http://localhost:3001/flights?lat=' + localStorage.latitude + '&lng=' + localStorage.longitude +'&id='+ id)
            .then(res => {            
                this.setState({flightDetails: res.data});
            });
    }
    render(){
        
        return <div className="flight-details w-50">            
                    <div className="card card-details w-100">
                        <div className="card-header"><img src={airplaneIcon}  alt="airplaneIcon"/></div>
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