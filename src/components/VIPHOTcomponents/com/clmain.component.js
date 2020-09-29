import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

var f;

export default class Clmain extends Component
{
    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Claim Information</h2>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Availiable Claim Number</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim Number" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Vehicle Number</div>
                     <div className = "col-md-3"><TextField className = "block" label="Vehicle Number" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Policy Number</div>
                     <div className = "col-md-3"><TextField className = "block" label="Policy Number" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Date</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim Date" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Name of Insured</div>
                     <div className = "col-md-3"><TextField className = "block" label="Name of Insured" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Marketing Executive</div>
                     <div className = "col-md-3"><TextField className = "block" label="Marketing Executive" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Period From / Period To</div>
                     <div className = "col-md-3"><TextField className = "block" label="Period From / Period To" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Marketing Executive Contact Number</div>
                     <div className = "col-md-3"><TextField className = "block" label="M E Contact Number" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Sum Of Insured</div>
                     <div className = "col-md-3"><TextField className = "block" label="Sum Of Insured" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Amount</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim Amount" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Time</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim Time" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Hospital Name   </div>
                     <div className = "col-md-3"><TextField className = "block" label="Hospital Name" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Branch</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim Branch" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3">Claim User</div>
                     <div className = "col-md-3"><TextField className = "block" label="Claim User" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Language</div>
                     <div className = "col-md-3"><TextField className = "block" label="Language" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Accident Zone</div>
                     <div className = "col-md-3"><TextField className = "block" label="Accident Zone" variant="outlined"></TextField></div>
                 </div>
                 
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">SMS Notification Send Number</div>
                     <div className = "col-md-9"><TextField className = "block"  label="SMS Number" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Location</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Claim Location" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Nearest Town</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Nearest Town" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Branch Code</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Assessor Branch Code" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <h3 style = {{textAlign:"left"}}>Suggections : </h3>
                 <div className = "row">
                     <div className = "col-md-3">Way</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Way" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Event</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Event" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Status Reason</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Claim Status Reason" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Abbreviation</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Abbreviation" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Offered Status</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Offered Status" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Vehicle Type</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Vehicle Type" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Damage</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Claim Damage" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Damage Grouping Category</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Damage Grouping Category" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Customer SMS Send</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Customer SMS Send" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">SMS Document Number</div>
                     <div className = "col-md-9"><TextField className = "block"  label="SMS Document Number" variant="outlined"></TextField></div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>Other Information</h3>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driving License Number</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Driving License Number" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driver Name</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Driver Name" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driver Address</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Driver Address" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Owner Contact</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Owner Contact" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Owner Relationship</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Owner Relationship" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>3rd Party Information</h3>
                     </div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3"></div>
                     <div className = "col-md-9"></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Name</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Name" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Address</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Address" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Contact Number</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Contact Number" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Vehicle Number</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Vehicle Number" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party  Insurer</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Insurer" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Vehicle Type</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Vehicle Type" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Voucher No</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Voucher No" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Voucher Value</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Voucher Value" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Renewal Date</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Other Party Renewal Date" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Policy Station</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Policy Station" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Assessor" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Reach Date</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Assessor Reach Date" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Reach Time</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Assessor Reach Time" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Delay Reason</div>
                     <div className = "col-md-9"><TextField className = "block"  label="Assessor Delay Reason" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-6">
                     <Button
                        //  onClick = {handleSubmit}
                         type="button"
                         fullWidth
                         variant="contained"
                         color="primary">Submit</Button>
                     </div>
                     <div className = "col-md-6">
                     <Button
                        //  onClick = {handleSubmit}
                         type="button"
                         fullWidth
                         variant="contained"
                         color="secondary"
                         className = "btn-danger">Cancel</Button>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <hr></hr>
                 </div>

                 <br></br>
             </div>
        );
    }
}