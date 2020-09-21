import React, {Component} from 'react';
import $ from 'jquery';

var outcolls = [];
var outrowsss = [];
var vhnumcol,polcol,refcol,sumcol,polperiofromcol,polperiodtocol,nameofinsuredcol,addressofinsuredcol,makecol,chassicol,covernotecol,checkretcol,enginenumcol,yearofmakecol,deboutstandingcol,policyremarkcol,totalrefundcol,policybranchcol,policymecol,vehicletypecol,fueltypecol;

$(document).ready(function (){
    // alert(JSON.parse(localStorage.getItem('selectednumber')));
    // alert(JSON.parse(localStorage.getItem('selectedpolicynumber')));
    console.log(JSON.parse(localStorage.getItem('selectednumber')));
    console.log(JSON.parse(localStorage.getItem('selectedpolicynumber')));

    var vh_data = {};
    vh_data.str = JSON.parse(localStorage.getItem('entrval'));
    vh_data.us = JSON.parse(localStorage.getItem('user'));
    vh_data.pwd = JSON.parse(localStorage.getItem('pass'));

    $.ajax({
        type: "GET",
        url: "http://localhost:4000/GetAsset/:id",
        data: {
            str : vh_data
        } ,
        contentType: "application/json",
        beforeSend: function () {

        },
        success: function (data) {
            $.each(data, function (index, value) {
                outcolls = [];
                outrowsss= [];

                console.log(value);
                
                for (var o in value.metaData)
                {
                    outcolls.push(value.metaData[o]);
                }
                for (var i in value.rows)
                {
                    outrowsss.push(value.rows[i]);
                }
                console.log(outrowsss);
                console.log(outrowsss[0][3]);

                vhnumcol = outrowsss[0][3];
                polcol = outrowsss[0][6];
                refcol = outrowsss[0][10];
                sumcol  = outrowsss[0][9];
                polperiofromcol  = outrowsss[0][7];
                polperiodtocol = outrowsss[0][8];
                nameofinsuredcol = outrowsss[0][11];
                addressofinsuredcol = outrowsss[0][12];
                makecol = outrowsss[0][15];
                chassicol = outrowsss[0][16];
                covernotecol = outrowsss[0][17];
                checkretcol = outrowsss[0][18];
                enginenumcol = outrowsss[0][19];
                yearofmakecol = outrowsss[0][20];
                deboutstandingcol = outrowsss[0][23];
                policyremarkcol = outrowsss[0][22];
                // totalrefundcol = outrowsss[0][3];
                // policybranchcol = outrowsss[0][3];
                policymecol = outrowsss[0][28]+"/"+outrowsss[0][25];
                vehicletypecol = outrowsss[0][27];
                fueltypecol = outrowsss[0][26];

                $('#vehnumber').val(vhnumcol);
                $('#policynum').val(polcol);
                $('#refnumber').val(refcol);
                $('#suminsurd').val(sumcol);
                $('#polperiodfrom').val(polperiofromcol);
                $('#polperiodto').val(polperiodtocol);
                $('#nameofinsured').val(nameofinsuredcol);
                $('#addessofinsured').val(addressofinsuredcol);
                $('#makeandmodel').val(makecol);
                $('#chassinum').val(chassicol);
                $('#covernt').val(covernotecol);
                $('#chequeretns').val(checkretcol);
                $('#enginenum').val(enginenumcol);
                $('#yearofmake').val(yearofmakecol);
                $('#debitoutstanding').val(deboutstandingcol);
                $('#policyremarks').val(policyremarkcol);
                $('#totalrefunds').val(vhnumcol);
                $('#policybranch').val(vhnumcol);
                $('#policyme').val(policymecol);
                $('#vehtype').val(vehicletypecol);
                $('#fueltype').val(fueltypecol);

                // $('#searchresulttable').DataTable({
                //     data: outrowsss,
                //     columns: 
                //     [
                //         { title: "VEHICLE NUMBER" },
                //         { title: "POLICY NUMBER" },
                //         { title: "NAME OF THE INSURED" },
                //         { title: "BRANCH" },
                //         { title: "POLICY START" },
                //         { title: "POLICY END" },
                //         { title: "SUM INSURED"},
                //     ]
                // });
            })
        },
        error: function (jqXHR, exception) {

        }
    
    });
});

export default class ClaimMain extends Component
{
    // renderInboundData(inboundDT){
    //     let i = 0;
    //         let tableContent = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
    //             inboundDT.data.map((item) => {
    //                 return (
    //                     <tr key = {item[i]}>
    //                         <td>{item[i]}</td>
    //                         <td>{item[i+1]}</td>
    //                     </tr>
    //                 );
    //             })
    //         );
    
    //         return (
                
    //                 <table id="inboundMyTable" className="tableFixHead" style={{overflowX:"auto"}} cellPadding="6">
    //                     <thead>
    //                         <tr>
    //                             <th>VEHICLE NUMBER</th>
    //                             <th>POLICY NUMBER</th>
    //                         </tr>
    //                         <tr>
    //                             <th>REFERENCE NUMBER</th>
    //                             <th>SUM INSURED</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {tableContent}
    //                     </tbody>
    //                 </table>
               
    //         );
    //     }

    render() {
        // let content = this.renderInboundData(outrowsss);
        return (
             <div className = "container" style = {{textAlign:"left"}}>
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2 style = {{textAlign:"center"}}>Claim Main</h2>
                     </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-3">VEHICLE NUMBER</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control" disabled id="vehnumber"></input>
                     </div>
                     <div className = "col-md-3">POLICY NUMBER</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "policynum"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">REFERENCE NUMBER</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control" disabled id = "refnumber"></input>
                     </div>
                     <div className = "col-md-3">SUM INSURED</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "suminsurd"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">POLICY PERIOD FROM</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control" disabled id = "polperiodfrom"></input>
                     </div>
                     <div className = "col-md-3">TO</div>
                     <div className = "col-md-3">
                         <input type = "text" className = "form-control" disabled id = "polperiodto"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">NAME OF INSURED</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "nameofinsured"></input>
                     </div>
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3"></div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">ADDRESS</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "addessofinsured"></input>
                     </div>
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3"></div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">MAKE AND MODEL</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "makeandmodel"></input>
                     </div>
                     <div className = "col-md-3">CHASIS NO</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "chassinum"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">COVER NOTE</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "covernt"></input>
                     </div>
                     <div className = "col-md-3">CHEQUE RETURNS</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "chequeretns"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">ENGINE NUMBER</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "enginenum"></input>
                     </div>
                     <div className = "col-md-3">YEAR OF MAKE</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "yearofmake"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">DEBIT OUTSTANDING AMOUNT</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id = "debitoutstanding"></input>
                     </div>
                     <div className = "col-md-3">POLICY REMARKS</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id ="policyremarks"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">TOTAL REFUND</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id="totalrefunds"></input>
                     </div>
                     <div className = "col-md-3">POLICY BRANCH</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id="policybranch"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">POLICY ME</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id="policyme"></input>
                     </div>
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3"></div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">VEHICLE TYPE</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id="vehtype"></input>
                     </div>
                     <div className = "col-md-3">FUEL TYPE</div>
                     <div className = "col-md-3">
                        <input type = "text" className = "form-control" disabled id="fueltype"></input>
                     </div>
                 </div>
             </div>
        );
    }
}