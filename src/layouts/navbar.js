import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';
import qbits from "../images/qbits logo.png"
import qbits_nobg from "../images/qbits_nobg.png"
import qff from "../images/Sponsored/Fall Fest.jpg"


let NavWithDropDown = (props) => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle text-light" style={{background: '#0d1011'}} href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
			<Link className='nav-link text-light' style={{background: '#0d1011'}} data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
		</li>
	)
}
let NavWithoutDropDownLinked = ({link, showname}) => {
	return (
		<li class="nav-item">
			<a className='nav-link text-light' style={{background: '#0d1011'}}  href={link} target="_blank" rel="noopener noreferrer">{showname}</a>
		</li>
	)
}
let DropDownItem = ({link, showname}) => {
	return (
		<Link style={{fontWeight: '400'}} class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
	)
}

let DropDownItemLinked = ({link, showname}) => {
	return (
		<a style={{fontWeight: '400'}} class="dropdown-item"  href={link} target="_blank" rel="noopener noreferrer">{showname}</a>
	)
}

function MyNavbar() {

	return (
    <div class="container-fluid" style={{background: '#0d1011'}}>
		<nav class="navbar navbar-dark px-3 navbar-expand-lg sticky-top " style={{background: '#0d1011'}}>
			<div class="container-fluid">

				<a class="navbar-brand my-2" href="/">
					<img src={qbits_nobg} height="90" class="align-top p-1" alt="ctcpblogo" />
				</a>

				
				
				
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

					<div class='collapse navbar-collapse in justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav d-flex flex-wrap main-nav-list justify-content-end borderXwidth">
						<NavWithoutDropDown link={"/"} showname={"Home"} />
				
						<NavWithDropDown name="  About  ">
							<DropDownItem link={"/about/bitspilani"} showname={"University"} />
							<DropDownItemLinked link={"https://qbitsbpgc.wordpress.com"} showname={"qBITS-bpgc"} />
						</NavWithDropDown>
				
						
						<NavWithoutDropDown link={"/speakers"} showname={"Speakers"}  />
				
				
						<NavWithoutDropDownLinked link={"https://qbitsbpgc.wordpress.com"} showname={"Registration"}  />
				
						
				
						<NavWithDropDown name="Venue" >
							<DropDownItem link={"/venue/bpgc-goa"} showname={"BITS Goa"} />
							<DropDownItem link={"/venue/howtoreach"} showname={"How to reach?"} />
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
