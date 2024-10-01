import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';
import qbits from "../images/qbits logo.png"
import qbits_nobg from "../images/2024.png"
import qff from "../images/Sponsored/Fall Fest.jpg"


// let NavWithDropDown = (props) => {
// 	return (
// 		<li class="nav-item dropdown">
// 			<a class="nav-link dropdown-toggle text-light" style={{background: '#111415'}} href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 			{props.name} &nbsp;<i class="fa fa-angle-down" style={{color: 'white'}}></i>
// 			</a>
// 			<div class="dropdown-menu" aria-labelledby="navbarDropdown"  >
// 				{props.children}
// 			</div>
// 		</li>
// 	)
// }

let NavWithoutDropDown = ({link, showname}) => {
	return (
		<li class="nav-item">
			<Link className='nav-link text-light' style={{background: '#111415'}} data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
		</li>
	)
}

// Modify the dropdown menu background to black
let NavWithDropDown = (props) => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle text-light" style={{background: '#111415'}} href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			{props.name} &nbsp;<i class="fa fa-angle-down" style={{color: 'white'}}></i>
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: '#111415'}}>
				{props.children}
			</div>
		</li>
	)
}
let NavWithoutDropDownLinked = ({link, showname}) => {
	return (
		<li class="nav-item">
			<a className='nav-link text-light' style={{background: '#111415'}}  href={link} target="_blank" rel="noopener noreferrer">{showname}</a>
		</li>
	)
}
let DropDownItem = ({link, showname}) => {
	return (
		<Link style={{fontWeight: '400', background: '#111415', color: "white"}} class="dropdown-item text-light" data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
	)
}

let DropDownItemLinked = ({link, showname}) => {
	return (
		<a style={{fontWeight: '400', background: '#111415'}} class="dropdown-item text-light"  href={link} target="_blank" rel="noopener noreferrer">{showname}</a>
	)
}

function MyNavbar() {
	return (
		<div class="container-fluid" style={{background: '#111415'}}>
			<nav class="navbar navbar-dark px-3 navbar-expand-lg sticky-top" style={{background: '#111415'}}>
				<div class="container-fluid d-flex align-items-center">
					<a class="navbar-brand my-2" href="/">
						<img src={qbits_nobg}  class="align-top p-1 img-fluid" alt="qfflogo" style={{maxWidth: '50vw', height: 'auto', maxHeight:"120px", marginLeft:"-50px"}} />
					</a>
					<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class='collapse navbar-collapse justify-content-end' id="navbarSupportedContent"
					//  style={{
          //     position: 'absolute', // Makes the menu float over the body
          //     top: '100%', // Below the navbar
          //     left: '0',
          //     right: '0',
          //     backgroundColor: '#111415', // Same background as navbar
          //     zIndex: 9999, // Ensures it is on top of the rest of the content
					//   }}
					>
						<ul class="navbar-nav d-flex flex-wrap main-nav-list justify-content-end borderXwidth">
							<NavWithoutDropDown link={"/"} showname={"Home"} />
							<NavWithDropDown name="  About  ">
								<DropDownItem link={"/about/bitspilani"} showname={"University"} />
								<DropDownItemLinked link={"https://qbitsbpgc.wordpress.com"} showname={"qBITS-bpgc"} />
							</NavWithDropDown>
							<NavWithoutDropDown link={"/speakers"} showname={"Speakers"} />
							<NavWithoutDropDownLinked link={"https://docs.google.com/forms/d/e/1FAIpQLSe5BJwXmjrvfUy0lVXqc8GhkNiXqQIHdycz3lExkB52pKWNYg/viewform?usp=sf_link"} showname={"Registration"} />
							<NavWithDropDown name="Venue">
								<DropDownItem link={"/venue/bpgc-goa"} showname={"BITS Goa"} />
								<DropDownItem link={"/venue/howtoreach"} showname={"Directions"} />
							</NavWithDropDown>
							<NavWithoutDropDown link={"/contact"} showname={"Contact Us"} />
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default MyNavbar;
