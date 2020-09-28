import React, {Component} from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

var asCols = [];
var asRows = [];

var outcolls = [];
var outrowsss = [];

var col1,col2;


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

$.ajax({
    type: "GET",
    url: "http://localhost:4000/getAssessors/:id",
    data: {} ,
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
            
            $('#assessorselectiontable').DataTable({
                data: outrowsss,
                columns: 
                [
                    { title: "Code" },
                    { title: "Assessor Name" },
                    { title: "Currently At"},
                    { title: "Time" },
                    { title: "Visits For the Day" },
                    { title: "Contact"},
                ]
            });
        })
    },
    error: function (jqXHR, exception) {

    }

});

$(document).ready(function (){
    $("#assessorselectiontable").on('click','tr',function(){
    

        var currentRow=$(this).closest("tr"); 
         
         col1=currentRow.find("td:eq(0)").html(); // get current row 1st TD value
         col2=currentRow.find("td:eq(1)").text();
    
         $('#selectedassessor').val(col1);
         $('#selectedassessorname').val(col2);

         localStorage.setItem('assessorcode',JSON.stringify(col1));
         localStorage.setItem('assessorname',JSON.stringify(col2));
         
    
    });
});

export default class AssessorSelection extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            selectedZone : ''
        }

        this.nextPath = this.nextPath.bind(this);
        this.onSubmit_click = this.onSubmit_click.bind(this);
    }

    nextPath(path) {
        this.props.history.push(path);
        window.location.reload(false);
      }

      onSubmit_click(e)
    {
        e.preventDefault();
        //   console.log(this.state.enteredVehicleNumber);
        this.nextPath('/clmain/');
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
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Selected Assessor : </div>
                     <div className = "col-md-3"><TextField disabled variant="outlined" id = "selectedassessor" style = {{width:"100%"}}></TextField></div>
                     <div className = "col-md-3"><TextField disabled variant="outlined" id = "selectedassessorname" style = {{width:"100%"}}></TextField></div>
                     <div className = "col-md-3">
                         <Button
                        //  onClick = {handleSubmit}
                         type="button"
                         fullWidth
                         variant="contained"
                         color="primary"
                         onClick = {this.onSubmit_click}>Select Assessor</Button>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-12">
                         <table id = "assessorselectiontable"></table>
                     </div>
                 </div>
             </div>
        );
    }
}