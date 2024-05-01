
import React from 'react'
// import Sidebar from '../admin component/Sidebar';
// import Navbar from '../leadgen components/Navbar';
import AdminSidebar from '../admin components/AdminSidebar';
const AdminHome = () => {
    return (
        
        <div className="wrapper">
            
            <div className="adminsidebar">
                
            
            <div><AdminSidebar/></div>
            <div className="head">
                {/* <div className="headerr"><AdminNavbar/></div> */}
                {/* <div><h1>Chromagen Commercial</h1></div> */}
            </div>
            <div class="clearfix"></div>
		<br/>
		
		<div class="col-div-3">
			<div class="box">
				<p>4.51%<br/><span>Already Installed</span></p>
				<i class="fa fa-check-circle box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>31.27%<br/><span>Callback</span></p>
				<i class="fa fa-phone box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>2.30%<br/><span>Do Not Call</span></p>
				<i class="fa fa-trash box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>15.20%<br/><span>Email</span></p>
				<i class="fa fa-envelope box-icon"></i>
			</div>
		</div>
		<div class="clearfix"></div>
		<br/><br/>
        <div class="col-div-3">
			<div class="box">
				<p>11.62%<br/><span>No Answer</span></p>
				<i class="fa fa-minus box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>21.62%<br/><span>Not Interested</span></p>
				<i class="fa fa-thumbs-down box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>0.05%<br/><span>Residential</span></p>
				<i class="fa fa-home box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>1.23%<br/><span>Voicemail</span></p>
				<i class="fa fa-microphone box-icon"></i>
			</div>
		</div>
        <div class="clearfix"></div>
		<br/><br/> 
        <div class="col-div-3">
			<div class="box">
				<p>1.23%<br/><span>Not Working</span></p>
				<i class="fa fa-times-circle box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>0.39%<br/><span>Booked</span></p>
				<i class="fa fa-trophy box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>0.15%<br/><span>Warm Lead</span></p>
				<i class="fa fa-bell box-icon"></i>
			</div>
		</div>
        <div class="col-div-3">
			<div class="box">
				<p>3.00<br/><span>Warm Lead</span></p>
				<i class="fa fa-bell box-icon"></i>
			</div>
		</div>
        </div>
        </div>
    );
}

export default AdminHome