import React from 'react';
import { Link } from 'react-router-dom';

const links = {
    "instagram": "https://www.instagram.com/qbits.bitsgoa/",
    "youtube": "https://www.youtube.com/qbits/videos",
    "linkedin": "https://www.linkedin.com/school/birla-institute-of-technology-and-science-pilani---goa-campus/?originalSubdomain=in"
}

let SocialLinks = ({fontawesomename, link}) => {
    return (
        <a href={link} target="_blank" rel="nopener noreferrer" id="connect">
            <i className={fontawesomename} aria-hidden="true"></i> </a>
    )
}

let FooterNav = ({navigateTo, name}) => {
    return (
        <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white footer-navigations' to={navigateTo}>{name}</Link>
    )
}

function MyFooter() {

    return (
        <div class="footer text-white py-3 px-2 container-fluid" style={{marginTop: "auto"}}>
            <div class="container">
                <div class="row my-3 justify-content-around">
                    <div class="col-md-3 col-sm-12">
                        <h5 class="my-3 justify-content-center-md" style={{fontWeight: 'bold', textAlign: 'start'}}> 2025</h5>
                        <div class="">
                            <FooterNav navigateTo={"/"} name="Home" />
                            <FooterNav navigateTo={"/speakers"} name="Speakers" />
                            
                            <FooterNav navigateTo={"/contact"} name="Contact Us" />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <h5 class="my-3" style={{fontWeight: 'bold', textAlign: 'start'}}>Contact</h5>
                        <p style={{textAlign: 'start'}}>

                        </p>
                        <p style={{textAlign: 'start'}}><a style={{textDecoration: 'none'}} href="mailto:ctcpb2025@gmail.com" class="text-white">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            &nbsp; qbits.bitsgoa@gmail.com</a>
                        </p>                    
                    </div>
                    <div class="col-md-4 col-sm-12 justify-content-center align-middle">
                    <h5 class="mb-3 mt-sm-4" style={{fontWeight: 'bold', textAlign: 'center'}}>Connect with Us</h5>
                    <p style={{textAlign: 'center'}}>
                        <SocialLinks link={links["instagram"]} fontawesomename="fa fa-instagram" />
                        <SocialLinks link={links["youtube"]} fontawesomename="fa fa-youtube" />
                        <SocialLinks link={links["linkedin"]} fontawesomename="fa fa-linkedin" />
                    </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    &copy; 2025 All Rights Reserved<br />
                    Designed &amp; Developed by Department of Biology, BITS Pilani Goa
                </div>
            </div>
        </div>
    );

}

export default MyFooter;
