import React, {Component} from 'react';
import map from '../Maps/sl_road_map.pdf';

export default class insertnumber extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            enteredVehicleNumber : '',
        }

        this.onChange_enteredvalue = this.onChange_enteredvalue.bind(this);
    }
    
    onChange_enteredvalue(e)
    {
        this.setState({
            enteredVehicleNumber: e.target.value
        });
    }

    showInMapClicked = () => {
        window.open("http://maps.google.com?q= 7.8731,80.7718");
      };

      nextPath(path)
      {
        localStorage.setItem('entrval', JSON.stringify(this.state.enteredVehicleNumber));
        this.props.history.push(path);
        window.location.reload(false);
      }

      onSearch_click(e)
      {
          e.preventDefault();
        //   console.log(this.state.enteredVehicleNumber);
          this.nextPath('/numberinsert/');
      }
      
    render()
    {
        return(
            <div className = "container">
                <div className = "row" style = {{textAlign:"center"}}>
                    <div className = "col-md-12">
                        <br></br>
                        <h2 style={{textAlign:"center"}}>Ceylinco Insurance Co Limited</h2>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-md-3">
                        <input type = "submit" className = "btn btn-dark block" value = "Sri Lanka Map (Google Maps)" onClick={() => this.nextPath('/srilankamap') }></input><br></br>
                        <br></br><a href = {map} target = "_blank" rel="noopener noreferrer" className = "btn btn-warning block">Sri Lanka Road Map (Local)</a>
                    </div>

                    <div className = "col-md-6">
                        <input type = "text" value={this.state.enteredVehicleNumber} onChange={this.onChange_enteredvalue} className = "form-control"></input><br></br>
                        <input type = "submit" className = "btn btn-danger block" value = "Search Number" onClick={() => this.nextPath('/vehicleresult/') }></input>
                    </div>

                    <div className = "col-md-3">
                    <br></br><a href = "http://10.10.1.244/asp/VIPHOT/indexpol.asp" target = "_blank" rel="noopener noreferrer" className = "btn btn-dark block">Search by Policy</a>
                    <br></br><br></br><a href = "http://10.10.1.244/asp/VIPHOT/VISIT.htm" target = "_blank" rel="noopener noreferrer" className = "btn btn-warning block">Accident Visit</a><br></br><br></br>
                        <input type = "submit" className = "btn btn-dark block" value="Home"  onClick={() => this.nextPath('/numberinsert')}></input><br></br><br></br>
                        <a href = "http://10.10.1.118:8080/advancesearch/" target = "_blank" rel="noopener noreferrer" className = "btn btn-warning block">Advanced Inquiries</a><br></br><br></br>
                        <a href = "http://10.10.8.117/claim/nerve/car_to_cat_csd.php" target = "_blank" rel="noopener noreferrer" className = "btn btn-dark block">Car to Car</a><br></br>
                    </div>
                </div>
            </div>
        );
    }
}