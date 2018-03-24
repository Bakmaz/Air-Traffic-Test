import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class FlightsList extends React.Component {
    constructor(){
        super();
        this.state = {
            aircraftList: {
                acList: []
            },
        };
    }
    componentDidMount(){
        axios.get('http://localhost:3001/flights?lat=33.433638&lng=-112.008113')
            .then(res => {            
                this.setState({aircraftList: res.data});
            });
    }
    render(){
        return <div>
            { 
                this.state.aircraftList.acList.map(function(item, index){
                    return <div className="card" key={index}>
                                <i class="fa fa-plane plane-icon-west"></i>      
                                <div className="card-body">
                                    <h5 className="card-title">Flight Code Number <br/>
                                        <span className="flight-number">{item.Call || 'N/A'}</span>
                                    </h5>
                                    <p className="card-text">Altitude: {item.Alt}</p>
                                    <a href="#" className="btn btn-primary">Flight Details</a>
                                </div>
                            </div>
                })
            } 
        </div>
    }
}
export default FlightsList;