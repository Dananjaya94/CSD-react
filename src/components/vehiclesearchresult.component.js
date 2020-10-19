import React, {Component} from 'react';
// import map from '../Maps/sl_road_map.pdf';
import $ from 'jquery';
import DataTable from 'datatables.net';

var outcolls = [];
var outrowsss = [];

var col1;
var col2;
var col3;
var col4;

// function getUrlVars() {
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for (var i = 0; i < hashes.length; i++) {
//         hash = hashes[i].split('=');
//         vars.push(hash[0]);
//         vars[hash[0]] = hash[1];
//     }
//     return vars;
// }

$(document).ready(function (){
    // var queryStringValue = getUrlVars()["id"];
    var vhnumber = {};
    vhnumber.str = JSON.parse(localStorage.getItem('entrval'));

    var v2 = JSON.stringify(vhnumber.str);

    $.ajax({
        type: "GET",
        url: "http://localhost:4000/vehicleinformationsearch/:id",
        data: {
            str : vhnumber
        } ,
        contentType: "application/json",
        beforeSend: function () {

        },
        success: function (data) {
            $.each(data, function (index, value) {
                outcolls = [];
                outrowsss= [];
                
                for (var o in value.metaData)
                {
                    outcolls.push(value.metaData[o]);
                }
                for (var i in value.rows)
                {
                    outrowsss.push(value.rows[i]);
                }
                
                $('#searchresulttable').DataTable({
                    data: outrowsss,
                    columns: 
                    [
                        { title: "VEHICLE NUMBER" },
                        { title: "PRS Sequence" },
                        { title: "Policy Sequence"},
                        { title: "Policy Number" },
                        { title: "Name" },
                        { title: "Branch"},
                        { title: "POLICY START" },
                        { title: "POLICY END" },
                        { title: "SUM INSURED"}
                    ]
                });
            })
        },
        error: function (jqXHR, exception) {

        }
    
    });

    $("#searchresulttable").on('click','tr',function(){
    

        var currentRow=$(this).closest("tr"); 
         
         col1=currentRow.find("td:eq(0)").html(); // get current row 1st TD value
         col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         col4=currentRow.find("td:eq(3)").text(); // get current row 3rd TD
        //  col5=currentRow.find("td:eq(4)").text(); // get current row 3rd TD
        //  col6=currentRow.find("td:eq(5)").text(); // get current row 3rd TD
        //  col7=currentRow.find("td:eq(6)").text(); // get current row 3rd TD
         

         $('#vh_id').val(col1);
         $('#vh_pol_id').val(col3);
         

    });
});

export default class vehiclesearchresult extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            vh_num: '',
            vh_pol_id:''
        }

        this.onSubmit_click = this.onSubmit_click.bind(this);
        this.onchagne_vhnum = this.onchagne_vhnum.bind(this);
        this.onchagne__vh_pol_num = this.onchagne__vh_pol_num.bind(this);
    }

    onchagne_vhnum(e)
    {
        this.setState({
            vh_num: e.target.value
        });
    }

    onchagne__vh_pol_num(e)
    {
        this.setState({
            vh_pol_id: e.target.value
        });
    }

    nextPath(path) 
    {
        // alert(col1);
        // alert(col2);
        localStorage.setItem('selectednumber', JSON.stringify(col1));
        // var splitval = col2.replace(col1+"=","");
        // alert(col3);
        localStorage.setItem('selected_prssec', JSON.stringify(col2));
        localStorage.setItem('selected_polsec', JSON.stringify(col3));
        localStorage.setItem('selectedpolicynumber', JSON.stringify(col4));

        this.props.history.push(path);
        window.location.reload(false);
    }
    
    onSubmit_click(e)
    {
        e.preventDefault();
        //   console.log(this.state.enteredVehicleNumber);
        this.nextPath('/claimmain/');
    }

    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Search Result</h2>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-1"></div>
                     <div className = "col-md-5">
                         Selected Vehicle Number : <input type = "text" id = "vh_id" style = {{textAlign:"center"}} value = {this.state.vh_num} onChange = {this.onchagne_vhnum}></input>
                         
                     </div>

                     <div className = "col-md-5">
                     Selected Policy Number : <input type = "text" id = "vh_pol_id" style = {{textAlign:"center"}} value = {this.state.vh_pol_num} onChange = {this.onchagne__vh_pol_num}></input>
                     </div>
                     <div className = "col-md-1"></div>
                 </div>
                 <br></br>

                 <div className = "row">
                     <div className = "col-md-3"></div>
                     <div className = "col-md-6">
                        <input type = "submit" onClick = {this.onSubmit_click} style = {{width:"100%"}} className = "btn btn-primary" value = "Submit"></input>
                     </div>
                     <div className = "col-md-3"></div>
                 </div>
                 <br></br>

                 <div className = "row">
                     <table id = "searchresulttable"></table>
                 </div>
             </div>
        );
    }
}