import React, {Component} from 'react';
import $ from 'jquery';


export default class InformComplain extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            
            clmain_refcol:'',
            clmain_addressofinsuredcol:'',
            clmain_makecol:'',
            clmain_chassicol:'',
            clmain_covernotecol:'',
            clmain_checkretcol:'',
            clmain_enginenumcol:'',
            clmain_yearofmakecol:'',
            clmain_deboutstandingcol:'',
            clmain_policyremarkcol:'',
            clmain_totalrefundcol:'',
            clmain_policybranchcol:'',
            clmain_vehicletypecol:'',
            clmain_fueltypecol:''
        }
    }

    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2 style = {{textAlign:"center"}}>Complain Information Form</h2>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Complain Date</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control"></input>
                     </div>
                     <div className = "col-md-3">Complain Handle By</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Complain Time</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control"></input>
                     </div>
                     <div className = "col-md-3">Reference Number</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Vehicle Number</div>
                     <div className = "col-md-9">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">CSD User</div>
                     <div className = "col-md-9">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Contact Number</div>
                     <div className = "col-md-9">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Complain</div>
                     <div className = "col-md-9">
                         <input type = "text" className = "form-control"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-6">
                         <input type = "submit" value = "Submit" className = "btn btn-dark block"></input>
                     </div>
                     <div className = "col-md-6">
                         <input type = "submit" value = "Reset" className = "btn btn-warning block"></input>
                     </div>
                 </div>
             </div>
        );
    }
}