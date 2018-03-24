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
    compare(a,b){
        if (a.Alt > b.Alt)
          return -1;
        if (a.Alt < b.Alt)
          return 1;
        return 0;
      }
    
    render(){
        return <div>            
            { 
                this.state.aircraftList.acList.sort(this.compare).map(function(item, index){
                    return <div className="card" key={index}>
                                <i className={'green fa fa-plane fa-3x plane-icon-' + (item.Brng < 180 ? 'east' : 'west')}></i>      
                                <div className="card-body">
                                    <h6>Flight Code Number </h6>
                                    <h5 className="green">{item.Call || 'N/A'}</h5>                                    
                                    <p className="card-text">Altitude: {item.Alt}</p>                            

                                    <Link to={'/flights/'+ item.Id }><button className="btn btn-info">Flight Details</button></Link>
                                </div>
                            </div>
                })
            } 
        </div>
    }
}
export default FlightsList;