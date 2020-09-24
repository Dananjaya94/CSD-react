import { extend } from 'jquery';
import React, {Component} from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';

var asCols = [];
var asRows = [];

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

$.ajax({
    type: "GET",

        url: "http://localhost:4000/zone/:id",
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    asRows = [];
                      asCols= [];

                      console.log(value);
                      for (var o in value.metaData) {
                        asCols.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          
                        asRows.push(value.rows[i][0]);
                      }
                      console.log(asRows);
                  })
      },

      error: function (jqXHR, exception) {

      }

});

// $.ajax({
//     type: "GET",
//     url: "http://localhost:4000/vehicleinformationsearch/:id",
//     data: {
//         str : vhnumber
//     } ,
//     contentType: "application/json",
//     beforeSend: function () {

//     },
//     success: function (data) {
//         $.each(data, function (index, value) {
//             outcolls = [];
//             outrowsss= [];
//             console.log(value);
            
//             for (var o in value.metaData)
//             {
//                 outcolls.push(value.metaData[o]);
//             }
//             for (var i in value.rows)
//             {
//                 outrowsss.push(value.rows[i]);
//             }
//             console.log(outrowsss);
            
//             $('#searchresulttable').DataTable({
//                 data: outrowsss,
//                 columns: 
//                 [
//                     { title: "Code" },
//                     { title: "Assessor Name" },
//                     { title: "Currently At"},
//                     { title: "Policy Number" },
//                     { title: "Name" },
//                     { title: "Branch"},
//                     { title: "POLICY START" },
//                     { title: "POLICY END" },
//                     { title: "SUM INSURED"}
//                 ]
//             });
//         })
//     },
//     error: function (jqXHR, exception) {

//     }

// });

export default class AssessorSelection extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            selectedZone : ''
        }
    }
    render() {
        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Assessor Selection Form</h2>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-2">Zone</div>
                     <div className = "col-md-2">
                     <Autocomplete
                                id = "combo-box-demo1"
                                options = {asRows}
                                style = {{ width: 190}}
                                onChange={(event, newInputValue) => {
                                    this.setState({
                                        asRows: newInputValue
                                    })
                                  }}
                                renderInput={(params1) => <TextField {...params1} label="Select Zone" variant="outlined"></TextField>}></Autocomplete>
                     </div>
                     <div className = "col-md-2">Code</div>
                     <div className = "col-md-2"><TextField label="Enter Code" variant="outlined"></TextField></div>
                     <div className = "col-md-2">Name</div>
                     <div className = "col-md-2"><TextField label="Enter Name" variant="outlined"></TextField></div>
                 </div>

                 <div className = "row">
                     <table className={classes.table} id = "assessortable"></table>
                 </div>
             </div>
        );
    }
}