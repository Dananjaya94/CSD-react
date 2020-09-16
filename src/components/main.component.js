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
                    <div className = "col-md-4" style = {{alignContent:"center"}}>
                        <input type = "submit" className = "btn btn-primary block" value="Vip On the Spot" onClick={() => this.nextPath('/viponthespot') }></input>
                    </div>
                    {/* <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/suwasampathaonthespot') }>
                        <br></br><input type = "submit" className = "btn btn-info" value="Suwasamppatha On the Spot"></input>
                    </div> */}
                    <div className = "col-md-4" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/SSIMG/SSHOME.asp" className = "btn btn-info block">Suwasampatha</a>
                    </div>
                    {/* <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <br></br><input type = "submit" className = "btn btn-primary block" value="Marine On the Spot"></input>
                    </div> */}
                    <div className = "col-md-4" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/MArine/mrHOME.asp" className = "btn btn-primary block">Marine On the Spot</a>
                    </div>
                </div>

                <div className = "row" style={{alignContent:"center"}}>
                    <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/knowledgenet') }>
                        <br></br><input type = "submit" className = "btn btn-info block" value="Knowledge Net"></input>
                    </div>
                    <div className = "col-md-4" style = {{alignItems:"center"}}>
                        <br></br><input type = "submit" className = "btn btn-primary block" value="Log Out"></input>
                    </div>
                    {/* <div className = "col-md-4" style = {{alignContent:"center"}} onClick={() => this.nextPath('/complainmanager') }>
                        <br></br><input type = "submit" className = "btn btn-info" value="Complain Manager"></input>
                    </div> */}
                    <div className = "col-md-4" style = {{alignContent:"center"}}>
                        <br></br><a href = "http://10.10.1.244/asp/VIPHOT/com/menu.asp" className = "btn btn-info block">Complain Manager</a>
                    </div>
                </div>
            </div>
        );
    }
}