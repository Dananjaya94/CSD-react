import React, {Component} from 'react';
import $ from 'jquery';

var outcolls = [];
var outrowsss = [];

$(document).ready(function (){
    // alert(JSON.parse(localStorage.getItem('selectednumber')));
    // alert(JSON.parse(localStorage.getItem('selectedpolicynumber')));
    console.log(JSON.parse(localStorage.getItem('selectednumber')));
    console.log(JSON.parse(localStorage.getItem('selectedpolicynumber')));

    var vh_data = {};
    vh_data.str = JSON.parse(localStorage.getItem('entrval'));
    vh_data.usr = JSON.parse(localStorage.getItem('user'));
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
                
                // for (var o in value.metaData)
                // {
                //     outcolls.push(value.metaData[o]);
                // }
                // for (var i in value.rows)
                // {
                //     outrowsss.push(value.rows[i]);
                // }
                // console.log(outrowsss);
                
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
    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Claim Main</h2>
                     </div>
                 </div>
             </div>
        );
    }
}