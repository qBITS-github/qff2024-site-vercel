import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';
import ctcpblogo from "../images/icons/ctcpb-logo.png"
import ptcaiLogo from "../images/icons/ptcai.png"


let NavWithDropDown = (props) => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle text-dark" href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			{props.name} &nbsp;<i class="fa fa-angle-down" style={{color: 'black'}}></i>
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown" >
				{props.children}
			</div>
		</li>
	)
}

let NavWithoutDropDown = ({link, showname}) => {
	return (
		<li class="nav-item">
			<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
		</li>
	)
}

let DropDownItem = ({link, showname}) => {
	return (
		<Link style={{fontWeight: '400'}} class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
	)
}

function MyNavbar() {

	return (
    <div class="container-fluid">
		<nav class="navbar navbar-light px-3 navbar-expand-lg sticky-top bg-white">
			<div class="container-fluid">

				<a class="navbar-brand my-2" href="/">
					<img src={ctcpblogo} height="90" class="align-top p-1" alt="ctcpblogo" />
				</a>

				<a class="navbar-brand my-2" href="/">
					<img src={NavLogo} height="100" class="align-top p-1" alt="bitslogo" />
				</a>
				
				<a class="navbar-brand my-2" href="/">
					<img src={ptcaiLogo} height="90" class="align-top p-1" alt="ptcailogo" />
				</a>
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

					<div class='collapse navbar-collapse in justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav d-flex flex-wrap main-nav-list justify-content-end borderXwidth">
						<NavWithoutDropDown link={"/"} showname={"Home"} />
				
						<NavWithDropDown name="  About  ">
							<DropDownItem link={"/about/bitspilani"} showname={"University"} />
							<DropDownItem link={"/about/bpgcbiodept"} showname={"Department of Biological Sciences"} />
							<DropDownItem link={"/about/ctcpb"} showname={"CTCPB 2025"} />
							<DropDownItem link={"/about/ptcai"} showname={"PTCAI"} />
						</NavWithDropDown>
				
						<NavWithoutDropDown link={"/sponsorship"} showname={"Sponsors"}  />
				
						<NavWithoutDropDown link={"/speakers"} showname={"Speakers"}  />
				
						<NavWithoutDropDown link={"/committee"} showname={"Committee"}  />
				
						<NavWithoutDropDown link={"/registration"} showname={"Registration"}  />
				
						<NavWithoutDropDown link={"/pasteditions"} showname={"Past Editions"}  />
				
						<NavWithDropDown name="Venue" >
							<DropDownItem link={"/venue/bpgc-goa"} showname={"BITS Goa"} />
							<DropDownItem link={"/venue/howtoreach"} showname={"How to reach?"} />
							<DropDownItem link={"/venue/accomodation"} showname={"Accomodation"} />
						</NavWithDropDown>
				
						<NavWithoutDropDown link={"/contact"} showname={"Contact Us"}  />
					</ul>
				</div>				
			</div>
		</nav>
    </div>
  );
}

export default MyNavbar;
