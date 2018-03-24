import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FlightDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            flightDetails: {}
        };
    }
    componentDidMount(){
        let id = this.props.match.params.flightId;
        axios.get('http://localhost:3001/flights?lat=33.433638&lng=-112.008113&id=' + id)
            .then(res => {            
                this.setState({flightDetails: res.data});
            });
    }
    render(){
        return  <div className="card">
            <Link to={'/flights/'}><button className="btn btn-primary">Back</button></Link>
                                <i></i>      
                                <div className="card-body">
                                    <h5 className="card-title">Airplane Manufacturer<br/>
                                        <span className="flight-number">{this.state.flightDetails.Mdl || 'N/A'}</span>
                                    </h5>
                                    <p className="card-text">Destination and Flight Origin Airport</p>                                    
                                </div>
                            </div>   
    }
}
export default FlightDetails;