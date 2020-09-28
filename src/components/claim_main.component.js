import React, {Component} from 'react';
import $ from 'jquery';

var outcolls = [];
var outrowsss = [];

var periloutcolls = [];
var periloutrows = [];

var debcols = [];
var debrows = [];
var vhnumcol,polcol,refcol,sumcol,polperiofromcol,polperiodtocol,nameofinsuredcol,addressofinsuredcol,makecol,chassicol,covernotecol,checkretcol,enginenumcol,yearofmakecol,deboutstandingcol,policyremarkcol,totalrefundcol,policybranchcol,policymecol,vehicletypecol,fueltypecol;
var vh_data = {};
var vh_perildata = {};

$(document).ready(function (){
    // alert(JSON.parse(localStorage.getItem('selectednumber')));
    // alert(JSON.parse(localStorage.getItem('selectedpolicynumber')));
    // console.log(JSON.parse(localStorage.getItem('selectednumber')));
    // console.log(JSON.parse(localStorage.getItem('selectedpolicynumber')));
    

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

    $.ajax({
        type: "GET",
        url: "http://localhost:4000/perilinformation/:id",
        data: {
            str : vh_perildata
        } ,
        contentType: "application/json",
        beforeSend: function () {

        },
        success: function (data) {
            $.each(data, function (index, value) {
                periloutcolls = [];
                periloutrows = [];

                console.log(value);
                
                for (var o in value.metaData)
                {
                    periloutcolls.push(value.metaData[o]);
                }
                for (var i in value.rows)
                {
                    periloutrows.push(value.rows[i]);
                }
                console.log(periloutrows);
                
                $('#bp1').val(periloutrows[0][3]);
                $('#bp2').val(periloutrows[0][4]);
                $('#bp3').val(periloutrows[0][2]);
                $('#bp4').val(periloutrows[0][5]);

                
                $('#freehealth1').val(periloutrows[1][3]);
                $('#freehealth2').val(periloutrows[1][4]);
                $('#freehealth3').val(periloutrows[1][2]);
                $('#freehealth4').val(periloutrows[1][5]);

                $('#majorillness1').val(periloutrows[2][3]);
                $('#majorillness2').val(periloutrows[2][4]);
                $('#majorillness3').val(periloutrows[2][2]);
                $('#majorillness4').val(periloutrows[2][5]);

                $('#extendedmotor1').val(periloutrows[3][3]);
                $('#extendedmotor2').val(periloutrows[3][4]);
                $('#extendedmotor3').val(periloutrows[3][2]);
                $('#extendedmotor4').val(periloutrows[3][5]);

                $('#noclaim1').val(periloutrows[4][3]);
                $('#noclaim2').val(periloutrows[4][4]);
                $('#noclaim3').val(periloutrows[4][2]);
                $('#noclaim4').val(periloutrows[4][5]);

                $('#premiumld1').val(periloutrows[5][3]);
                $('#premiumld2').val(periloutrows[5][4]);
                $('#premiumld3').val(periloutrows[5][2]);
                $('#premiumld4').val(periloutrows[5][5]);

                $('#srcctovh1').val(periloutrows[6][3]);
                $('#srcctovh2').val(periloutrows[6][4]);
                $('#srcctovh3').val(periloutrows[6][2]);
                $('#srcctovh4').val(periloutrows[6][5]);

                $('#rdsfty1').val(periloutrows[7][3]);
                $('#rdsfty2').val(periloutrows[7][4]);
                $('#rdsfty3').val(periloutrows[7][2]);
                $('#rdsfty4').val(periloutrows[7][5]);

                $('#thrdpt1').val(periloutrows[8][3]);
                $('#thrdpt2').val(periloutrows[8][4]);
                $('#thrdpt3').val(periloutrows[8][2]);
                $('#thrdpt4').val(periloutrows[8][5]);
                
                
            })
        },
        error: function (jqXHR, exception) {

        }
    
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:4000/debitinformation/:id",
        data: {
            str : vh_perildata
        } ,
        contentType: "application/json",
        beforeSend: function () {

        },
        success: function (data) {
            $.each(data, function (index, value) {
                debcols = [];
                debrows= [];
                console.log(value);
                
                for (var o in value.metaData)
                {
                    debcols.push(value.metaData[o]);
                }
                for (var i in value.rows)
                {
                    debrows.push(value.rows[i]);
                }
                console.log(debrows);
                
                $('#debitinfotable').DataTable({
                    data: debrows,
                    columns: 
                    [
                        { title: "Date" },
                        { title: "Voucher Number" },
                        { title: "Type"},
                        { title: "Amount" },
                        { title: "Balance" }
                    ]
                });
            })
        },
        error: function (jqXHR, exception) {

        }
    
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:4000/claiminfo/:id",
        data: {
            str : vh_data
        } ,
        contentType: "application/json",
        beforeSend: function () {

        },
        success: function (data) {
            $.each(data, function (index, value) {
                debcols = [];
                debrows= [];
                console.log(value);
                
                for (var o in value.metaData)
                {
                    debcols.push(value.metaData[o]);
                }
                for (var i in value.rows)
                {
                    debrows.push(value.rows[i]);
                }
                console.log(debrows);
                
                $('#claiminfotable').DataTable({
                    data: debrows,
                    columns: 
                    [
                        { title: "CSD REFERENCE NO" },
                        { title: "CLAIM DATE" },
                        { title: "CLAIM TIME"},
                        { title: "CLAIM BRANCH" },
                        { title: "CLAIM AMOUNT" },
                        { title: " CLAIM REFERENCE " },
                        { title: "LOCATION" },
                        { title: "DAMAGE" },
                        { title: "ASSESSOR" },
                        { title: "ASSESSOR INFORM TIME" },
                        { title: "ASSESSOR REACH TIME" },
                        { title: "CUSTOMER COURTESY" },
                        { title: "HANDLED BY" },
                        { title: "DAMAGE GROUP" },
                        { title: "ABBREVIATION" },
                        { title: "DRIVER LICENCE NO" },
                        { title: "DRIVER NAME" },
                        { title: "3RD PARTY INFORMATION" },
                        { title: "CUSTOMER CONTACT ON" },
                        { title: "OTS PAID" },
                        { title: "EDITED COMMENTS" },
                        { title: "Green Copy No" },
                        { title: "Offer" },
                    ]
                });
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

    componentDidMount()
    {
        vh_data.vhid = JSON.parse(localStorage.getItem('selectednumber'));
        vh_data.polstr = JSON.parse(localStorage.getItem('selectedpolicynumber'));
        vh_data.us = JSON.parse(localStorage.getItem('user'));
        vh_data.pwd = JSON.parse(localStorage.getItem('pass'));

        vh_perildata.prssec = JSON.parse(localStorage.getItem('selected_prssec'));
        vh_perildata.polsec = JSON.parse(localStorage.getItem('selected_polsec'));
        vh_perildata.polstr = JSON.parse(localStorage.getItem('selectedpolicynumber'));
        // alert(JSON.parse(localStorage.getItem('selected_prssec')));
        // alert(JSON.parse(localStorage.getItem('selected_polsec')));
    }

    nextPath(path) {
        this.props.history.push(path);
        window.location.reload(false);
      }

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
                     <div className = "col-md-3">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Inform Complain" onClick={() => this.nextPath('/informclaim') }></input>
                     </div>
                     <div className = "col-md-3">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Generate Complain"></input>
                     </div>
                     <div className = "col-md-3">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Complain Manager"></input>
                     </div>
                     <div className = "col-md-3">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Edit Complain"></input>
                     </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-warning" value = "Search by Policy"></input>
                     </div>
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-warning" value = "Branch Claim Info"></input>
                     </div>
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-warning" value = "Assessor Info"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Accident Visit"></input>
                     </div>
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Home Page"></input>
                     </div>
                     <div className = "col-md-4">
                         <input type ="submit" style = {{width:"100%"}} className = "btn btn-dark" value = "Search by Vehicle"></input>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-12">
                         <input type = "submit" style = {{width:"100%"}} className = "btn btn-danger" value = "Generate New Claim" onClick={() => this.nextPath('/assessorselection/')}></input>
                     </div>
                 </div>

                 <br></br>
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
                 <hr className = "form-group"></hr>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>Peril Information</h3>
                         <table>
                             <thead>
                                 <tr>
                                     <th>Peril Name</th>
                                     <th>Peril Amount</th>
                                     <th>Peril Reminder</th>
                                     <th>Peril Limit</th>
                                     <th>Peril Percentage</th>
                                 </tr>
                             </thead>

                             <tbody>
                                 <tr>
                                     <td>BASIC PREMIUM</td>
                                     <td><input type = "text" id="bp1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="bp2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="bp3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="bp4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>FREE HEALTH COVER</td>
                                     <td><input type = "text" id="freehealth1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="freehealth2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="freehealth3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="freehealth4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>MAJOR ILLNESS INSURANCE COVER</td>
                                     <td><input type = "text" id="majorillness1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="majorillness2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="majorillness3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="majorillness4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>EXTEDED MOTOR WARRANTY (REFER TO THE ATTACHMENT)</td>
                                     <td><input type = "text" id="extendedmotor1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="extendedmotor2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="extendedmotor3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="extendedmotor4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>NO CLAIM BONUS</td>
                                     <td><input type = "text" id="noclaim1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="noclaim2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="noclaim3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="noclaim4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>PREMIUM LOADING</td>
                                     <td><input type = "text" id="premiumld1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="premiumld2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="premiumld3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="premiumld4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>SRCC TO VEHICLE</td>
                                     <td><input type = "text" id="srcctovh1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="srcctovh2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="srcctovh3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="srcctovh4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>ROAD SAFETY FUND</td>
                                     <td><input type = "text" id="rdsfty1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="rdsfty2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="rdsfty3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="rdsfty4" className = "form-control"  disabled></input></td>
                                 </tr>
                                 <tr>
                                     <td>3RD PARTY PROPERTY DAMAGE</td>
                                     <td><input type = "text" id="thrdpt1" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="thrdpt2" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="thrdpt3" className = "form-control"  disabled></input></td>
                                     <td><input type = "text" id="thrdpt4" className = "form-control"  disabled></input></td>
                                 </tr>

                             </tbody>
                         </table>
                     </div>
                 </div>

                 <hr></hr>
                 <div className = "row">
                     <div className = "col-md-12">
                             <h3>Debit Information</h3>
                             <br></br>
                             <table id = "debitinfotable"></table>
                         </div>
                 </div>

                 <hr></hr>
                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>Claim Information</h3>
                         <br></br>
                         <table id = "claiminfotable"></table>
                     </div>
                 </div>
             </div>
        );
    }
}