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
    renderInboundData(inboundDT){
        let i = 0;
            let tableContent = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
                inboundDT.data.map((item) => {
                    return (
                        <tr key = {item[i]}>
                            <td>{item[i]}</td>
                            <td>{item[i+1]}</td>
                        </tr>
                    );
                })
            );
    
            return (
                
                    <table id="inboundMyTable" className="tableFixHead" style={{overflowX:"auto"}} cellPadding="6">
                        <thead>
                            <tr>
                                <th>VEHICLE NUMBER</th>
                                <th>POLICY NUMBER</th>
                            </tr>
                            <tr>
                                <th>REFERENCE NUMBER</th>
                                <th>SUM INSURED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
               
            );
        }

    render() {
        let content = this.renderInboundData(outrowsss);
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Claim Main</h2>
                         {content}
                     </div>
                 </div>
             </div>
        );
    }
}