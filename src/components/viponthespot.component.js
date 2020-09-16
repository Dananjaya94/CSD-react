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
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Accident Visit"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VISIT.htm" className = "btn btn-info">Accident Visit</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Advanced Inquiries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/advancesearch/" className = "btn btn-primary">Advanced Inquiries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Police Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPolicePara.asp" className = "btn btn-info">Police Report</a>
                    </div>
                </div><br/>

                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Connect to Branches"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/br_main.asp" className = "btn btn-info">Connect to Branches</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Cancel Daily Claims"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/CANMAIN.ASP" className = "btn btn-primary">Cancel Daily Claims</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Duplicate Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/MULRISK.asp" className = "btn btn-info">Duplicate Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Payment Analysis Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sms/RepsmsPara.asp" className = "btn btn-primary">Payment Analysis Report</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Manual Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/manVIEWASS.asp" className = "btn btn-primary">Manual Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Assessor Creation"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/csdass/" className = "btn btn-info">Assessor Creation</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Assessor Information Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/asshot/ASSmain.asp" className = "btn btn-primary">Assessor Information Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Intimation Symmary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepdaysumPara.asp" className = "btn btn-info">Intimation Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Visiting Information Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/REPVISIT_1.ASP" className = "btn btn-info">Visiting Information Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Accessor Movement Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASS_MOVE.asp" className = "btn btn-primary">Assessor Movement Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="VIP Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VIPCUS.ASP" className = "btn btn-info">VIP Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="CSD Exec Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUPara.asp" className = "btn btn-primary">CSD Exec Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="On the Spot Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPara.asp" className = "btn btn-primary">On the Spot Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Accident Analysis (Hourly)"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepParaACC.asp" className = "btn btn-info">Accident Analysis (Hourly)</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="User Maintanance"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/user.asp" className = "btn btn-primary">User Maintanance</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="CSD Inspection Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUAPara.asp" className = "btn btn-info">CSD Inspection Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Holiday Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/hol.asp" className = "btn btn-info">Holiday Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Polinq"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/polinq/" className = "btn btn-primary">Polinq</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Assessor Inspection Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASSOT.htm" className = "btn btn-info">Assessor Inspection Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Customer Care"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/CSD_CUSTOMER/New_Customer_Care.php?csd_user=RAMSFORD" className = "btn btn-primary">Customer Care</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Monitor Data Transfer"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/DTREP.asp" className = "btn btn-primary">Monitor Data Transfer</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Habitual Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/BLACK.ASP" className = "btn btn-info">Habitual Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="Suggestions"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sug.asp" className = "btn btn-primary">Suggestions</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary" value="Additional Information"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://192.168.2.225:8080/IIS_244/jsp/" className = "btn btn-info">Additional Information</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info" value="DR Control"></input>
                    </div> */}
                </div>
                <div className = "row">
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.120/" className = "btn btn-primary">DR Control</a>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}