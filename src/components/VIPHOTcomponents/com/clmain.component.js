import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Label from '@material-ui/core/FormLabel';


import $ from 'jquery';
import axios from 'axios';

var clmain_vhnumcol,clmain_polcol,clmain_nameofinsuredcol,clmain_policymecol,clmain_polperiofromcol,clmain_polperiodtocol,clmain_policymecontactcol,clmain_sumcol,clmain_time,clmain_branch,clmain_user;
var f,t;
var thours , tminutes , tseconds;
var SelectedLanguage,selectedaccidentzone;
var selectedassessorcode , selectedassessorname;

var waymeta = [];
var wayrows = [];

var statreasondata = []

$(document).ready(function (){
    clmain_vhnumcol = JSON.parse(localStorage.getItem('entrval'));
    clmain_polcol = JSON.parse(localStorage.getItem('selectedpolicynumber'));
    f = new Date();
    f = f.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    clmain_nameofinsuredcol = JSON.parse(localStorage.getItem('nameinsured'));
    clmain_policymecol = JSON.parse(localStorage.getItem('marketingexec'));
    clmain_polperiofromcol = JSON.parse(localStorage.getItem('policyfrom'));
    clmain_polperiodtocol = JSON.parse(localStorage.getItem('policyto'));
    clmain_policymecontactcol = JSON.parse(localStorage.getItem('assessorcontact'));
    clmain_sumcol = JSON.parse(localStorage.getItem('suminsurd'));
    clmain_branch = JSON.parse(localStorage.getItem('branch'));
    clmain_user = JSON.parse(localStorage.getItem('user'));
    t = new Date();
    tminutes = t.getMinutes();
    thours = t.getHours();
    tseconds = t.getSeconds();

    clmain_time = thours+":"+tminutes+":"+tseconds;
    selectedassessorcode = JSON.parse(localStorage.getItem('assessorcode'));
    selectedassessorname = JSON.parse(localStorage.getItem('assessorname'));

    $('#sltdassessor').val(selectedassessorcode);
    $('#sltdassessorname').val(selectedassessorname);

    $('#clmn_vehinum').val(clmain_vhnumcol);
    $('#clmn_polnum').val(clmain_polcol);
    $('#clmn_cldate').val(f);
    $('#clmn_nminsured').val(clmain_nameofinsuredcol);
    $('#clmn_mrkexec').val(clmain_policymecol);
    $('#clmn_datefromto').val(clmain_polperiofromcol + "/" + clmain_polperiodtocol);
    $('#clmn_execontactnum').val(clmain_policymecontactcol);
    $('#clmn_suminsurd').val(clmain_sumcol);
    $('#clmn_time').val(clmain_time);
    $('#clmn_branch').val(clmain_branch);
    $('#clmn_user').val(clmain_user);

    $.ajax({
        type: "GET",
    
            url: "http://localhost:4000/getway/:id",
            contentType: "application/json",
            dataType: "json",
            beforeSend: function () {
            },
    
            success: function (data) {
    
    
    
                //console.log(data);
    
                      $.each(data, function (index, value) {
    
                        wayrows = [];
                        waymeta= [];
    
                          console.log(value);
                          for (var o in value.metaData) {
                            waymeta.push(value.metaData[o]);
                          }
    
                          for (var i in value.rows) {
                              
                            wayrows.push(value.rows[i][0]);
                          }
                          console.log(wayrows);
                      })
          },
    
          error: function (jqXHR, exception) {
    
          }
    
    });

    // $.ajax({
    //     type: "GET",
    
    //         url: "http://localhost:4000/claimstatusreason/:id",
    //         contentType: "application/json",
    //         dataType: "json",
    //         beforeSend: function () {
    //         },
    
    //         success: function (data) {
    
    
    
    //             //console.log(data);
    
    //                   $.each(data, function (index, value) {
    
    //                     statreasondata = [];
    //                     stsreasonmeta= [];
    
    //                       console.log(value);
    //                       for (var o in value.metaData) {
    //                         stsreasonmeta.push(value.metaData[o]);
    //                       }
    
    //                       for (var i in value.rows) {
                              
    //                         statreasondata.push(value.rows[i][0]);
    //                       }
    //                       console.log(statreasondata);
    //                   })
    //       },
    
    //       error: function (jqXHR, exception) {
    
    //       }
    
    // });
});


export default class Clmain extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            claimstatreasondata : [],
            abbreviationdata : [],
            abbreviationdt : [],
            OutBoundDT : [],
            ContactNumber : '',
            offeredstatdata : [],
            offeredstatdt : [],
            vehicledata : [],
            vehicledt : [],
            damagecatdata : [],
            damagecatdt : [],
            policystationdata : [],
            policystationdt : [],

            claimnumber : '',
            vehiclenumber : '',
            policynumber : '',
            claimdate : '',
            nameofinsured : '',
            marketingexecutive : '',
            paeriodfromto : '',
            marketingexecutivecontact : '',
            suminsured : '',
            claimamount : '',
            claimtime : '',
            hospitalname : '',
            claimbranch : '',
            claimuser : '',
            language : '',
            accidentzone : '',
            contactnumb : '',
            contactnumbconfirmation : '',
            claimlocation : '',
            nearesttown : '',
            assessorbranchcode : '',
            way : '',
            event : '',
            claimstatus : '',
            abbreviation : '',
            offeredstatus : '',
            vehicletype : '',
            claimdamage : '',
            damagecategory : '',
            customerssmssend : '',
            smsdocumentnumber : '',
            drivinglicensenumber : '',
            drivername : '',
            driveraddress : '',
            drivercontact : '',
            ownerrelationship : '',
            thrdpartyname : '',
            thrdpartyaddress : '',
            thrdpartycontactnumber : '',
            thrdpartyvehiclenumber : '',
            thrdpartyinsurer : '',
            thrdpartyvehicletype : '',
            thrdpartyvouchernumber : '',
            thrdpartyvouchervalue : '',
            thrdpartyrenevaldate : '',
            thrdpartypolicystation : '',
            assessorcode : '',
            assessorname : '',
            assessorreachdate : '',
            assessorreachtime : '',
            assessordelayreason : '',
        }

        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.OnContcatNumberChange = this.OnContcatNumberChange.bind(this);
        this.AbbreviationData = this.AbbreviationData.bind(this);

        this.onchangeassessorcode=this.onchangeassessorcode.bind(this);
        this.onchangeassessorname=this.onchangeassessorname.bind(this);
        this.onchangeclaimnumber=this.onchangeclaimnumber.bind(this);
        this.onchangevehiclenumber=this.onchangevehiclenumber.bind(this);
        this.onchangepolicynumber=this.onchangepolicynumber.bind(this);
        this.onchangeclaimdate=this.onchangeclaimdate.bind(this);
        this.onchangenameofinsured=this.onchangenameofinsured.bind(this);
        this.onchangemarketingexecutive=this.onchangemarketingexecutive.bind(this);
        this.onchangepaeriodfromto=this.onchangepaeriodfromto.bind(this);
        this.onchangemarketingexecutivecontact=this.onchangemarketingexecutivecontact.bind(this);
        this.onchangesuminsured=this.onchangesuminsured.bind(this);
        this.onchangeclaimamount=this.onchangeclaimamount.bind(this);
        this.onchangeclaimtime=this.onchangeclaimtime.bind(this);
        this.onchangehospitalname=this.onchangehospitalname.bind(this);
        this.onchangeclaimbranch=this.onchangeclaimbranch.bind(this);
        this.onchangeclaimuser=this.onchangeclaimuser.bind(this);
        this.onchangelanguage=this.onchangelanguage.bind(this);
        this.onchangeaccidentzone=this.onchangeaccidentzone.bind(this);
        this.onchangecontactnumb=this.onchangecontactnumb.bind(this);
        this.onchangecontactnumbconfirmation=this.onchangecontactnumbconfirmation.bind(this);
        this.onchangeclaimlocation=this.onchangeclaimlocation.bind(this);
        this.onchangenearesttown=this.onchangenearesttown.bind(this);
        this.onchangeassessorbranchcode=this.onchangeassessorbranchcode.bind(this);
        this.onchangeway=this.onchangeway.bind(this);
        this.onchangeevent=this.onchangeevent.bind(this);
        this.onchangeclaimstatus=this.onchangeclaimstatus.bind(this);
        this.onchangeabbreviation=this.onchangeabbreviation.bind(this);
        this.onchangeofferedstatus=this.onchangeofferedstatus.bind(this);
        this.onchangevehicletype=this.onchangevehicletype.bind(this);
        this.onchangeclaimdamage=this.onchangeclaimdamage.bind(this);
        this.onchangedamagecategory=this.onchangedamagecategory.bind(this);
        this.onchangecustomerssmssend=this.onchangecustomerssmssend.bind(this);
        this.onchangesmsdocumentnumber=this.onchangesmsdocumentnumber.bind(this);
        this.onchangedrivinglicensenumber=this.onchangedrivinglicensenumber.bind(this);
        this.onchangedrivername=this.onchangedrivername.bind(this);
        this.onchangedriveraddress=this.onchangedriveraddress.bind(this);
        this.onchangedrivercontact=this.onchangedrivercontact.bind(this);
        this.onchangeownerrelationship=this.ownerrelationship.bind(this);
        this.onchangethrdpartyname=this.onchangethrdpartyname.bind(this);
        this.onchangethrdpartyaddress=this.onchangethrdpartyname.bind(this);
        this.onchangethrdpartycontactnumber=this.onchangethrdpartycontactnumber.bind(this);
        this.onchangethrdpartyvehiclenumber=this.onchangethrdpartyvehiclenumber.bind(this);
        this.onchangethrdpartyinsurer=this.onchangethrdpartyinsurer.bind(this);
        this.onchangethrdpartyvehicletype=this.onchangethrdpartyvehicletype.bind(this);
        this.onchangethrdpartyvouchernumber=this.onchangethrdpartyvouchernumber.bind(this);
        this.onchangethrdpartyvouchervalue=this.onchangethrdpartyvouchervalue.bind(this);
        this.onchangethrdpartyrenevaldate=this.onchangethrdpartyrenevaldate.bind(this);
        this.onchangethrdpartypolicystation=this.onchangethrdpartypolicystation.bind(this);
        this.onchangeassessorreachdate=this.onchangeassessorreachdate.bind(this);
        this.onchangeassessorreachtime=this.onchangeassessorreachtime.bind(this);
        this.onchangeassessordelayreason=this.onchangeassessordelayreason.bind(this);

    }

    onchangeassessorcode(e)
    {
        this.setState({
            assessorcode:e.target.value
        });
    }

    onchangeassessorname(e)
    {
        this.setState({
            assessorname:e.target.value
        });
    }

    onchangeclaimnumber(e)
    {
        this.setState({
            claimnumber: e.target.value
        });
    }
    onchangevehiclenumber(e)
    {
        this.setState({
            vehiclenumber:e.target.value
        });
    }
    onchangepolicynumber(e)
    {
        this.setState({
            policynumber:e.target.value
        });
    }
    onchangeclaimdate(e)
    {
        this.setState({
            claimdate:e.target.value
        });
    }
    onchangenameofinsured(e)
    {
        this.setState({
            nameofinsured:e.target.value
        });
    }
    onchangemarketingexecutive(e)
    {
        this.setState({
            marketingexecutive:e.target.value
        });
    }
    onchangepaeriodfromto(e)
    {
        this.setState({
            paeriodfromto:e.target.value
        });
    }
    onchangemarketingexecutivecontact(e)
    {
        this.setState({
            marketingexecutivecontact:e.target.value
        });
    }
    onchangesuminsured(e)
    {
        this.setState({
            suminsured:e.target.value
        });
    }
    onchangeclaimamount(e)
    {
        this.setState({
            claimamount:e.target.value
        });
    }
    onchangeclaimtime(e)
    {
        this.setState({
            claimtime:e.target.value
        });
    }
    onchangehospitalname(e)
    {
        this.setState({
            hospitalname:e.target.value
        });
    }
    onchangeclaimbranch(e)
    {
        this.setState({
            claimbranch:e.target.value
        });
    }
    onchangeclaimuser(e)
    {
        this.setState({
            claimuser:e.target.value
        });
    }
    onchangelanguage(e)
    {
        this.setState({
            language:e.target.value
        });
    }
    onchangeaccidentzone(e)
    {
        this.setState({
            accidentzone:e.target.value
        });
    }
    onchangecontactnumb(e)
    {
        this.setState({
            contactnumb:e.target.value
        });
    }
    onchangecontactnumbconfirmation(e)
    {
        this.setState({
            contactnumbconfirmation:e.target.value
        });
    }
    onchangeclaimlocation(e)
    {
        this.setState({
            claimlocation:e.target.value
        });
    }
    onchangenearesttown(e)
    {
        this.setState({
            nearesttown:e.target.value
        });
    }
    onchangeassessorbranchcode(e)
    {
        this.setState({
            assessorbranchcode:e.target.value
        });
    }
    onchangeway(e)
    {
        this.setState({
            way:e.target.value
        });
    }
    onchangeevent(e)
    {
        this.setState({
            event:e.target.value
        });
    }
    onchangeclaimstatus(e)
    {
        this.setState({
            claimstatus:e.target.value
        });
    }
    onchangeabbreviation(e)
    {
        this.setState({
            abbreviation:e.target.value
        });
    }
    onchangeofferedstatus(e)
    {
        this.setState({
            offeredstatus:e.target.value
        });
    }
    onchangevehicletype(e)
    {
        this.setState({
            vehicletype:e.target.value
        });
    }
    onchangeclaimdamage(e)
    {
        this.setState({
            claimdamage:e.target.value
        });
    }
    onchangedamagecategory(e)
    {
        this.setState({
            damagecategory:e.target.value
        });
    }
    onchangecustomerssmssend(e)
    {
        this.setState({
            customerssmssend:e.target.value
        });
    }

    onchangesmsdocumentnumber(e)
    {
        this.setState({
            smsdocumentnumber:e.target.value
        });
    }

    onchangedrivinglicensenumber(e)
    {
        this.setState({
            drivinglicensenumber:e.target.value
        });
    }

    onchangedrivername(e)
    {
        this.setState({
            drivername:e.target.value
        });
    }

    onchangedriveraddress(e)
    {
        this.setState({
            driveraddress:e.target.value
        });
    }

    onchangedrivercontact(e)
    {
        this.setState({
            drivercontact:e.target.value
        });
    }

    onchangeownerrelationship(e)
    {
        this.setState({
            ownerrelationship:e.target.value
        });
    }

    onchangethrdpartyname(e)
    {
        this.setState({
            thrdpartyname:e.target.value
        });
    }

    onchangethrdpartyaddress(e)
    {
        this.setState({
            thrdpartyaddress:e.target.value
        });
    }

    onchangethrdpartycontactnumber(e)
    {
        this.setState({
            thrdpartycontactnumber:e.target.value
        });
    }

    onchangethrdpartyvehiclenumber(e)
    {
        this.setState({
            thrdpartyvehiclenumber:e.target.value
        });
    }

    onchangethrdpartyinsurer(e)
    {
        this.setState({
            thrdpartyinsurer:e.target.value
        });
    }

    onchangethrdpartyvehicletype(e)
    {
        this.setState({
            thrdpartyvehicletype:e.target.value
        });
    }

    onchangethrdpartyvouchernumber(e)
    {
        this.setState({
            thrdpartyvouchernumber:e.target.value
        });
    }

    onchangethrdpartyvouchervalue(e)
    {
        this.setState({
            thrdpartyvouchervalue:e.target.value
        });
    }

    onchangethrdpartyrenevaldate(e)
    {
        this.setState({
            thrdpartyrenevaldate:e.target.value
        });
    }

    onchangethrdpartypolicystation(e)
    {
        this.setState({
            thrdpartypolicystation:e.target.value
        });
    }

    onchangeassessorreachdate(e)
    {
        this.setState({
            assessorreachdate:e.target.value
        });
    }

    onchangeassessorreachtime(e)
    {
        this.setState({
            assessorreachtime:e.target.value
        });
    }

    onchangeassessordelayreason(e)
    {
        this.setState({
            assessordelayreason:e.target.value
        });
    }


    componentWillMount()
    {
        axios.get('http://localhost:4000/claimstatusreason/:id')
        .then(data=> {
            this.setState({claimstatreasondata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:4000/abbreviation/:id')
        .then(data=> {
            this.setState({abbreviationdata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:4000/offeredstatus/:id')
        .then(data=> {
            this.setState({offeredstatdata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
        
        axios.get('http://localhost:4000/vehicletype/:id')
        .then(data=> {
            this.setState({vehicledata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:4000/damagegroupcat/:id')
        .then(data=> {
            this.setState({damagecatdata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:4000/policystation/:id')
        .then(data=> {
            this.setState({policystationdata : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    OnContcatNumberChange(e)
    {

        this.setState({
            ContactNumber: e.target.value
        });
    }

    activateConfirmTextBox()
    {
        if(this.state.ContactNumber.length === 10)
        {
            return(
                <TextField value = {this.state.contactnumbconfirmation} onChange = {this.onchangecontactnumbconfirmation} id = "confirmationfield" className = "block"  label="SMS Number" variant="outlined"></TextField>
            );     
        }
    }

    renderData(OutBoundDT){
        // console.log(OutBoundDT);
        let tableContent = (OutBoundDT === undefined || OutBoundDT === null || OutBoundDT.length === 0) ? null : (
            OutBoundDT.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.claimstatus} onChange = {this.onchangeclaimstatus} label = "Accident Zone" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    AbbreviationData(abbreviationdt){
        // console.log(abbreviationdt);
        let tableContent = (abbreviationdt === undefined || abbreviationdt === null || abbreviationdt.length === 0) ? null : (
            abbreviationdt.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.abbreviation} onChange = {this.onchangeabbreviation} label = "Abbreviation" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    rendorOfferedStatData(offeredstatdt){
        console.log(offeredstatdt);
        let tableContent = (offeredstatdt === undefined || offeredstatdt === null || offeredstatdt.length === 0) ? null : (
            offeredstatdt.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.offeredstatus} onChange = {this.onchangeofferedstatus} label = "Offered Status" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    renderVehicleTypeData(vehicledt)
    {
        let tableContent = (vehicledt === undefined || vehicledt === null || vehicledt.length === 0) ? null : (
            vehicledt.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.vehicletype} onChange = {this.onchangevehicletype} label = "Vehicle Type" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    renderDamageCat(damagecatdt)
    {
        let tableContent = (damagecatdt === undefined || damagecatdt === null || damagecatdt.length === 0) ? null : (
            damagecatdt.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.damagecategory} onChange = {this.onchangedamagecategory} label = "Damage Category" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    renderPolicyStation(policystationdt)
    {
        let tableContent = (policystationdt === undefined || policystationdt === null || policystationdt.length === 0) ? null : (
            policystationdt.result.rows.map((item) => {
                return (
                    <MenuItem key = {item} value = {item}>{item}</MenuItem>
                );
            })
        );
    
        return (
            <Select value = {this.state.thrdpartypolicystation} onChange = {this.onchangethrdpartypolicystation} label = "Policy Station" className = "block">
                {tableContent}
            </Select>
           
        );
    }

    render() {
        let content = this.renderData(this.state.claimstatreasondata);
        let txtInit = this.activateConfirmTextBox();
        let abbdata = this.AbbreviationData(this.state.abbreviationdata);
        let offdata = this.rendorOfferedStatData(this.state.offeredstatdata);
        let vhldata = this.renderVehicleTypeData(this.state.vehicledata);
        let damdata = this.renderDamageCat(this.state.damagecatdata);
        let poldata = this.renderPolicyStation(this.state.policystationdata);

        return (
             <div className = "container">
                 <div className = "row">
                     <div className = "col-md-12">
                         <h2>Claim Information</h2>
                     </div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-3">Availiable Claim Number</div>
                     <div className = "col-md-3"><TextField className = "block" value = {this.state.claimnumber} onChange = {this.onchangeclaimnumber} label="Claim Number" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Vehicle Number</div>
                     <div className = "col-md-3"><TextField disabled id = "clmn_vehinum" className = "block" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Policy Number</div>
                     <div className = "col-md-3"><TextField value = {this.state.policynumber} onChange = {this.onchangepolicynumber} disabled id = "clmn_polnum" className = "block" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Date</div>
                     <div className = "col-md-3"><TextField value = {this.state.claimdate} onChange = {this.onchangeclaimdate} disabled id = "clmn_cldate" className = "block" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Name of Insured</div>
                     <div className = "col-md-3"><TextField value = {this.state.nameofinsured} onChange = {this.onchangenameofinsured} disabled id = "clmn_nminsured" className = "block" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Marketing Executive</div>
                     <div className = "col-md-3"><TextField value = {this.state.marketingexecutive} onChange = {this.onchangemarketingexecutive} disabled id = "clmn_mrkexec" className = "block" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Period From / Period To</div>
                     <div className = "col-md-3"><TextField value = {this.state.paeriodfromto} onChange = {this.onchangepaeriodfromto} disabled id = "clmn_datefromto" className = "block" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Marketing Executive Contact Number</div>
                     <div className = "col-md-3"><TextField value = {this.state.marketingexecutivecontact} onChange = {this.onchangemarketingexecutivecontact} disabled id = "clmn_execontactnum" className = "block" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Sum Of Insured</div>
                     <div className = "col-md-3"><TextField value = {this.state.suminsured} onChange = {this.onchangesuminsured} disabled id = "clmn_suminsurd" className = "block" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Amount</div>
                     <div className = "col-md-3"><TextField value = {this.state.claimamount} onChange = {this.onchangeclaimamount} className = "block" label="Claim Amount" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Time</div>
                     <div className = "col-md-3"><TextField value = {this.state.claimtime} onChange = {this.onchangeclaimtime} disabled id = "clmn_time" className = "block" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Hospital Name   </div>
                     <div className = "col-md-3"><TextField value = {this.state.hospitalname} onChange = {this.onchangehospitalname} className = "block" label="Hospital Name" variant="outlined"></TextField></div>
                     <div className = "col-md-3">Claim Branch</div>
                     <div className = "col-md-3"><TextField value = {this.state.claimbranch} onChange = {this.onchangeclaimbranch} disabled id = "clmn_branch" className = "block" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3"></div>
                     <div className = "col-md-3">Claim User</div>
                     <div className = "col-md-3"><TextField value = {this.state.claimuser} onChange = {this.onchangeclaimuser} disabled id = "clmn_user" className = "block" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Language</div>
                     <div className = "col-md-3">
                         {/* <TextField className = "block" label="Language" variant="outlined"></TextField> */}
                         <Select value = {this.state.language} onChange = {this.onchangelanguage} label = "Language" className = "block">
                             <MenuItem value={"Sinhala"}>Sinhala</MenuItem>
                             <MenuItem value={"English"}>English</MenuItem>
                             <MenuItem value={"Tamil"}>Tamil</MenuItem>
                         </Select>
                     </div>
                     <div className = "col-md-3">Accident Zone</div>
                     <div className = "col-md-3">
                         {/* <TextField className = "block" label="Accident Zone" variant="outlined"></TextField> */}
                         <Select value = {this.state.accidentzone} onChange = {this.onchangeaccidentzone} label = "Accident Zone" className = "block">
                             <MenuItem value={"CITY"}>CITY</MenuItem>
                             <MenuItem value={"OTHER"}>OTHER</MenuItem>
                             <MenuItem value={"OUTSTATION"}>OUTSTATION</MenuItem>
                             <MenuItem value={"SUBURB"}>SUBURB</MenuItem>
                         </Select>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Contact Number</div>
                     <div className = "col-md-6"><TextField value = {this.state.contactnumb} onChange = {this.onchangecontactnumb} className = "block"  label="Contact Number " variant="outlined"></TextField></div>
                     <div className = "col-md-3"><Label style = {{color:"red"}}>Need 10 Characters (*)</Label></div>
                 </div>
                 
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">SMS Notification Send Number</div>
        <div className = "col-md-9">{txtInit}</div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Location</div>
                     <div className = "col-md-9"><TextField value = {this.state.claimlocation} onChange = {this.onchangeclaimlocation} className = "block"  label="Claim Location" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Nearest Town</div>
                     <div className = "col-md-9"><TextField value = {this.state.nearesttown} onChange = {this.onchangenearesttown} className = "block"  label="Nearest Town" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Branch Code</div>
                     <div className = "col-md-9"><TextField value = {this.state.assessorbranchcode} onChange = {this.onchangeassessorbranchcode} className = "block"  label="Assessor Branch Code" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <h3 style = {{textAlign:"left"}}>Suggestions : </h3>
                 <div className = "row">
                     <div className = "col-md-3">Way</div>
                     <div className = "col-md-9">
                         {/* <TextField className = "block"  label="Way" variant="outlined"></TextField> */}
                         <Autocomplete
                                id = "combo-box-demo2"
                                options = {["Normal Way","High Way"]}
                                style = {{ width: 190}}
                                onChange={(event, newInputValue) => {
                                    this.setState({
                                         way : newInputValue
                                    })
                                  }}
                                renderInput={(params1) => <TextField {...params1} value = {this.state.way} onChange = {this.onchangeway} label="Way" variant="outlined"></TextField>}></Autocomplete>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Event</div>
                     <div className = "col-md-9">
                         {/* <TextField className = "block"  label="Event" variant="outlined"></TextField> */}
                         <Autocomplete
                                id = "combo-box-demo3"
                                options = {["Accident","Other"]}
                                style = {{ width: 190}}
                                onChange={(event, newInputValue) => {
                                    this.setState({
                                        event: newInputValue
                                    })
                                  }}
                                renderInput={(params1) => <TextField {...params1} label="Event" value = {this.state.event} onChange = {this.onchangeevent} variant="outlined"></TextField>}></Autocomplete>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Status Reason</div>
                     <div className = "col-md-9">
                         {/* <TextField className = "block"  label="Claim Status Reason" variant="outlined"></TextField> */}
                         {/* <Select label = "Accident Zone" className = "block">
                             {/* <MenuItem value={"CITY"}>CITY</MenuItem>
                             statreasondata */}
                             {/* {this.renderMenuItem()} */}
                         {/* </Select> */}
                         {content}
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Abbreviation</div>
                     <div className = "col-md-9">{abbdata}</div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Offered Status</div>
                     <div className = "col-md-9">{offdata}</div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Vehicle Type</div>
                            <div className = "col-md-9">{vhldata}</div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Claim Damage</div>
                     <div className = "col-md-9"><TextField value = {this.state.claimdamage} onChange = {this.onchangeclaimdamage} className = "block"  label="Claim Damage" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Damage Grouping Category</div>
                     <div className = "col-md-9">{damdata}</div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Customer SMS Send</div>
                     <div className = "col-md-9">
                         <Select className = "block" value = {this.state.customerssmssend} onChange = {this.onchangecustomerssmssend}>
                             <MenuItem key = "Y" value = "Y">Y</MenuItem>
                             <MenuItem key = "N" value = "N">N</MenuItem>
                         </Select>
                     </div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">SMS Document Number</div>
                     <div className = "col-md-9"><TextField value = {this.state.smsdocumentnumber} onChange = {this.onchangesmsdocumentnumber} className = "block"  label="SMS Document Number" variant="outlined"></TextField></div>
                 </div>

                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>Other Information</h3>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driving License Number</div>
                     <div className = "col-md-9"><TextField value = {this.state.drivinglicensenumber} onChange = {this.onchangedrivinglicensenumber} color = "secondary" className = "block"  label="Driving License Number" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driver Name</div>
                     <div className = "col-md-9"><TextField value = {this.state.drivername} onChange = {this.onchangedrivername} className = "block"  label="Driver Name" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Driver Address</div>
                     <div className = "col-md-9"><TextField value = {this.state.driveraddress} onChange = {this.onchangedriveraddress} className = "block"  label="Driver Address" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Owner Contact</div>
                     <div className = "col-md-9"><TextField value = {this.state.customerssmssend} onChange = {this.onchangecustomerssmssend} className = "block"  label="Owner Contact" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Owner Relationship</div>
                     <div className = "col-md-9"><TextField value = {this.state.ownerrelationship} onChange = {this.onchangeownerrelationship} className = "block"  label="Owner Relationship" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-12">
                         <h3>3rd Party Information</h3>
                     </div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3"></div>
                     <div className = "col-md-9"></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Name</div>
                     <div className = "col-md-9"><TextField value = {this.state.onchangethrdpartyname} onChange = {this.onchangethrdpartyname} className = "block"  label="Other Party Name" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Address</div>
                     <div className = "col-md-9"><TextField value = {this.state.thrdpartyaddress} onChange = {this.onchangethrdpartyaddress} className = "block"  label="Other Party Address" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Contact Number</div>
                     <div className = "col-md-9"><TextField value = {this.state.thrdpartycontactnumber} onChange = {this.onchangethrdpartycontactnumber} className = "block"  label="Other Party Contact Number" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Vehicle Number</div>
                     <div className = "col-md-6"><TextField value = {this.state.thrdpartyvehiclenumber} onChange = {this.onchangethrdpartyvehiclenumber} className = "block"  label="Other Party Vehicle Number" variant="outlined"></TextField></div>
                     <div className = "col-md-3"><a href = "http://10.10.1.118:8080/advancesearch/" target = "_blank" rel="noopener noreferrer" className = "btn btn-danger block" style = {{height:"100%"}}>3rd party vehicle number</a></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party  Insurer</div>
                     <div className = "col-md-9">
                         <Select value = {this.state.thrdpartyinsurer} onChange = {this.onchangethrdpartyinsurer} className = "block">
                             <MenuItem key = "CEYLINCO" value = "CEYLINCO">CEYLINCO</MenuItem>
                             <MenuItem key = "NON-CEYLINCO" value = "NON-CEYLINCO">NON-CEYLINCO</MenuItem>
                             <MenuItem key = "OTHER" value = "OTHER">OTHER</MenuItem>
                         </Select>
                     </div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Vehicle Type</div>
                            <div className = "col-md-9">{vhldata}</div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Voucher No</div>
                     <div className = "col-md-9"><TextField value = {this.state.thrdpartyvouchernumber} onChange = {this.onchangethrdpartyvouchernumber} className = "block"  label="Other Party Voucher No" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Voucher Value</div>
                     <div className = "col-md-9"><TextField value = {this.state.thrdpartyvouchervalue} onChange = {this.onchangethrdpartyvouchervalue} className = "block"  label="Other Party Voucher Value" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Other Party Renewal Date</div>
                     <div className = "col-md-9"><TextField value = {this.state.thrdpartyrenevaldate} onChange = {this.onchangethrdpartyrenevaldate} className = "block"  label="Other Party Renewal Date" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Policy Station</div>
                     <div className = "col-md-9">{poldata}</div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor</div>
                     <div className = "col-md-5"><TextField value = {this.state.assessorcode} onChange = {this.onchangeassessorcode} disabled id = "sltdassessor" className = "block"  variant="outlined"></TextField></div>
                     <div className = "col-md-4"><TextField value = {this.state.assessorname} onChange = {this.onchangeassessorname} id = "sltdassessorname" className = "block"  variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Reach Date</div>
                     <div className = "col-md-6"><TextField value = {this.state.assessorreachdate} onChange = {this.onchangeassessorreachdate} type="date" className = "block" variant="outlined"></TextField></div>
                     <div className = "col-md-3"><Label>MM/DD/YYYY</Label></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Reach Time</div>
                     <div className = "col-md-9"><TextField value = {this.state.assessorreachtime} onChange = {this.onchangeassessorreachtime} className = "block"  label="Assessor Reach Time" variant="outlined"></TextField></div>
                 </div>
                 <br></br>
                 <div className = "row">
                     <div className = "col-md-3">Assessor Delay Reason</div>
                     <div className = "col-md-9"><TextField value = {this.state.assessordelayreason} onChange = {this.onchangeassessordelayreason} className = "block"  label="Assessor Delay Reason" variant="outlined"></TextField></div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <div className = "col-md-6">
                     <Button
                        //  onClick = {handleSubmit}
                         type="button"
                         fullWidth
                         variant="contained"
                         color="primary">Submit</Button>
                     </div>
                     <div className = "col-md-6">
                     <Button
                        //  onClick = {handleSubmit}
                         type="button"
                         fullWidth
                         variant="contained"
                         color="secondary"
                         className = "btn-danger">Cancel</Button>
                     </div>
                 </div>

                 <br></br>
                 <div className = "row">
                     <hr></hr>
                 </div>

                 <br></br>
             </div>
        );
    }
}