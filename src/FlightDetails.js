import React from 'react';
import axios from 'axios';

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
        return  <div>             
                    <h1>Aircraft Model</h1> 
                    
                    <div>{this.state.flightDetails.Mdl}</div>                  
                </div>
    }
}
export default FlightDetails;