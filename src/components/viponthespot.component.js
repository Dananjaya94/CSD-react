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
                        <input type = "submit" className = "btn btn-primary block" value="Vehicle Information"></input>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Accident Visit"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VISIT.htm" className = "btn btn-info block">Accident Visit</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Advanced Inquiries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/advancesearch/" className = "btn btn-primary block">Advanced Inquiries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Police Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPolicePara.asp" className = "btn btn-info block">Police Report</a>
                    </div>
                </div><br/>

                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Connect to Branches"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/br_main.asp" className = "btn btn-info block">Connect to Branches</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Cancel Daily Claims"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/CANMAIN.ASP" className = "btn btn-primary block">Cancel Daily Claims</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Duplicate Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/MULRISK.asp" className = "btn btn-info block">Duplicate Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Payment Analysis Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sms/RepsmsPara.asp" className = "btn btn-primary block">Payment Analysis Report</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Manual Claim Entries"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/manVIEWASS.asp" className = "btn btn-primary block">Manual Claim Entries</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Assessor Creation"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.118:8080/csdass/" className = "btn btn-info block">Assessor Creation</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Assessor Information Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/asshot/ASSmain.asp" className = "btn btn-primary block">Assessor Information Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Intimation Symmary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepdaysumPara.asp" className = "btn btn-info block">Intimation Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Visiting Information Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/REPVISIT_1.ASP" className = "btn btn-info block">Visiting Information Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Accessor Movement Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASS_MOVE.asp" className = "btn btn-primary block">Assessor Movement Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="VIP Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/VIPCUS.ASP" className = "btn btn-info block">VIP Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="CSD Exec Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUPara.asp" className = "btn btn-primary block">CSD Exec Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="On the Spot Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepPara.asp" className = "btn btn-primary block">On the Spot Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Accident Analysis (Hourly)"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepParaACC.asp" className = "btn btn-info block">Accident Analysis (Hourly)</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="User Maintanance"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/user.asp" className = "btn btn-primary block">User Maintanance</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="CSD Inspection Summary"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/RepUAPara.asp" className = "btn btn-info block">CSD Inspection Summary</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Holiday Update"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/hol.asp" className = "btn btn-info block">Holiday Update</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Polinq"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/polinq/" className = "btn btn-primary block">Polinq</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Assessor Inspection Report"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/ASSOT.htm" className = "btn btn-info block">Assessor Inspection Report</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Customer Care"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.119/CSD_CUSTOMER/New_Customer_Care.php?csd_user=RAMSFORD" className = "btn btn-primary block">Customer Care</a>
                    </div>
                </div><br/>
                <div className = "row">
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Monitor Data Transfer"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/DTREP.asp" className = "btn btn-primary block">Monitor Data Transfer</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Habitual Customers"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/BLACK.ASP" className = "btn btn-info block">Habitual Customers</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="Suggestions"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.244/asp/VIPHOT/sug.asp" className = "btn btn-primary block">Suggestions</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-primary block" value="Additional Information"></input>
                    </div> */}
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://192.168.2.225:8080/IIS_244/jsp/" className = "btn btn-info block">Additional Information</a>
                    </div>
                    {/* <div className = "col-md-3 text-center" style = {{alignContent:"center"}} onClick={() => this.nextPath('/marineonthespot') }>
                        <input type = "submit" className = "btn btn-info block" value="DR Control"></input>
                    </div> */}
                </div>
                <div className = "row">
                    <div className = "col-md-3" style = {{alignContent:"center"}}>
                        <a href = "http://10.10.1.120/" className = "btn btn-primary block">DR Control</a>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}