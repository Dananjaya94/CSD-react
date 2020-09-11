import React, {Component} from 'react';
import $ from 'jquery';

$(document).ready(function (){
    console.log(JSON.parse(localStorage.getItem('selectednumber')));
    console.log(JSON.parse(localStorage.getItem('selectedpolicynumber')));
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