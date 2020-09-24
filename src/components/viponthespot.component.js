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
                <br></br>

                <div className = "row">
                    <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/numberinsert') }>
                        <input type = "submit" className = "btn btn-warning block" value="Vehicle Information"></input>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Accident Visit"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VISIT.htm" className = "btn btn-dark block">Accident Visit</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Advanced Inquiries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/advancesearch/" className = "btn btn-warning block">Advanced Inquiries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Police Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPolicePara.asp" className = "btn btn-dark block">Police Report</a>
                    </div>
                </div><br/>

                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Connect to Branches"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/br_main.asp" className = "btn btn-dark block">Connect to Branches</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Cancel Daily Claims"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/CANMAIN.ASP" className = "btn btn-warning block">Cancel Daily Claims</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Duplicate Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/MULRISK.asp" className = "btn btn-dark block">Duplicate Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Payment Analysis Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sms/RepsmsPara.asp" className = "btn btn-warning block">Payment Analysis Report</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Manual Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/manVIEWASS.asp" className = "btn btn-warning block">Manual Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Assessor Creation"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/csdass/" className = "btn btn-dark block">Assessor Creation</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Assessor Information Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/asshot/ASSmain.asp" className = "btn btn-warning block">Assessor Information Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Intimation Symmary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepdaysumPara.asp" className = "btn btn-dark block">Intimation Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Visiting Information Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/REPVISIT_1.ASP" className = "btn btn-dark block">Visiting Information Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Accessor Movement Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASS_MOVE.asp" className = "btn btn-warning block">Assessor Movement Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="VIP Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VIPCUS.ASP" className = "btn btn-dark block">VIP Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="CSD Exec Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUPara.asp" className = "btn btn-warning block">CSD Exec Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="On the Spot Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPara.asp" className = "btn btn-warning block">On the Spot Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Accident Analysis (Hourly)"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepParaACC.asp" className = "btn btn-dark block">Accident Analysis (Hourly)</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="User Maintanance"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/user.asp" className = "btn btn-warning block">User Maintanance</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="CSD Inspection Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUAPara.asp" className = "btn btn-dark block">CSD Inspection Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Holiday Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/hol.asp" className = "btn btn-dark block">Holiday Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Polinq"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/polinq/" className = "btn btn-warning block">Polinq</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Assessor Inspection Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASSOT.htm" className = "btn btn-dark block">Assessor Inspection Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Customer Care"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/CSD_CUSTOMER/New_Customer_Care.php?csd_user=RAMSFORD" className = "btn btn-warning block">Customer Care</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Monitor Data Transfer"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/DTREP.asp" className = "btn btn-warning block">Monitor Data Transfer</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Habitual Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/BLACK.ASP" className = "btn btn-dark block">Habitual Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="Suggestions"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sug.asp" className = "btn btn-warning block">Suggestions</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-warning block" value="Additional Information"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://192.168.2.225:8080/IIS_244/jsp/" className = "btn btn-dark block">Additional Information</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-dark block" value="DR Control"></input>
                    </div> */}
                </div>
                <div className = "row">
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.120/" className = "btn btn-warning block">DR Control</a>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}