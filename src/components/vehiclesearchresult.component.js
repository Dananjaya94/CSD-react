import React, {Component} from 'react';
import map from '../Maps/sl_road_map.pdf';
import $ from 'jquery';
import DataTable from 'datatables.net';

var outcolls = [];
var outrowsss = [];

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function (){
    var queryStringValue = getUrlVars()["id"];
    $.ajax({
        type: "GET",
        url: "http://localhost:4000/vehicleinformationsearch/:id",
        data: { id: queryStringValue },
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
                
                $('#searchresulttable').DataTable({
                    data: outrowsss,
                    columns: 
                    [
                        { title: "VEHICLE NUMBER" },
                        { title: "POLICY NUMBER" },
                        { title: "NAME OF THE INSURED" },
                        { title: "BRANCH" },
                        { title: "POLICY START" },
                        { title: "POLICY END" },
                        { title: "SUM INSURED"},
                    ]
                });
            })
        },
        error: function (jqXHR, exception) {

        }
    
    });
});

export default class vehiclesearchresult extends Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Search Result</h2>
                         <table id = "searchresulttable"></table>
                     </div>
                 </div>
             </div>
        );
    }
}