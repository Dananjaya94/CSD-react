import React, {Component} from 'react';

export default class viponthespot extends Component
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
                        <h2>Vip on the Spot</h2>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/numberinsert') }>
                        <input type = "submit" className = "btn btn-primary" value="Vehicle Information"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Accident Visit"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Advanced Inquiries"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Police Report"></input>
                    </div>
                </div><br/>

                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Connect to Branches"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Cancel Daily Claims"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Duplicate Claim Entries"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Payment Analysis Report"></input>
                    </div>
                </div><br/>
                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Manual Claim Entries"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Assessor Creation"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Assessor Information Update"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Intimation Symmary"></input>
                    </div>
                </div><br/>
                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Visiting Information Report"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Accessor Movement Update"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="VIP Customers"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="CSD Exec Summary"></input>
                    </div>
                </div><br/>
                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="On the Spot Report"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Accident Analysis (Hourly)"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="User Maintanance"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="CSD Inspection Summary"></input>
                    </div>
                </div><br/>
                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Holiday Update"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Polinq"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Assessor Inspection Report"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Customer Care"></input>
                    </div>
                </div><br/>
                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Monitor Data Transfer"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Habitual Customers"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Suggestions"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Additional Information"></input>
                    </div>
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="DR Control"></input>
                    </div>
                </div><br/>
            </div>
        );
    }
}