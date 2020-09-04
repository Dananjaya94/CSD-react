import React, {Component} from 'react';

export default class main extends Component
{
    nextPath(path) {
        this.props.history.push(path);
      }
    render()
    {
        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h2 style={{textAlign:"center"}}>
                            Customer Service Desk
                        </h2>
                        <br></br>
                    </div>
                </div>

                <div className = "row" style = {{alignContent:"center"}}>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/viponthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Vip On the Spot"></input>
                    </div>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/suwasampathaonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Suwasamppatha On the Spot"></input>
                    </div>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Marine On the Spot"></input>
                    </div>
                </div>

                <div className = "row" style={{alignContent:"center"}}>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/knowledgenet') }>
                        <input type = "submit" className = "btn btn-info" value="Knowledge Net"></input>
                    </div>
                    <div className = "col-md-4" style = {{alignItems:"center"}}>
                        <input type = "submit" className = "btn btn-primary" value="Log Out"></input>
                    </div>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/complainmanager') }>
                        <input type = "submit" className = "btn btn-info" value="Complain Manager"></input>
                    </div>
                </div>
            </div>
        );
    }
}