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
        this._interval = setInterval(() => {
           this.getData();
        }, 60000);
        
        this.getData();
    }
    getData(){
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
                                <i className={ 'fa fa-plane plane-icon-' + (item.Brng < 180 ? 'east' : 'west')}></i>      
                                <div className="card-body">
                                    <h5 className="card-title">Flight Code Number <br/>
                                        <span className="flight-number">{item.Call || 'N/A'}</span>
                                    </h5>
                                    <p className="card-text">Altitude: {item.Alt}</p>
                                    <Link to={'/flights/'+ item.Id }><button className="btn btn-primary">Flight Details</button></Link>
                                </div>
                            </div>
                })
            } 
        </div>
    }
}
export default FlightsList;