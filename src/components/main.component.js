import React, {Component} from 'react';

export default class main extends Component
{
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

                <div className = "row">
                    <div className = "col-md-12" style = {{alignContent:"center"}}>
                        <table>
                            <thead>
                                <th></th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type = "submit" className = "btn btn-primary" value="Vip On the Spot"></input></td>
                                    <td><input type = "submit" className = "btn btn-primary" value="Suwasamppatha On the Spot"></input></td>
                                    <td><input type = "submit" className = "btn btn-primary" value="Marine On the Spot"></input></td>
                                </tr>
                                <tr>
                                    <td><input type = "submit" className = "btn btn-primary" value="Knowledge Net"></input></td>
                                    <td><input type = "submit" className = "btn btn-primary" value="Log Out"></input></td>
                                    <td><input type = "submit" className = "btn btn-primary" value="Complain Manager"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}