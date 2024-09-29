import React from "react";
import BITSGoaOnGMAP from "../layouts/bits-goa-map";

const contactuslink = "";
const qbits_email = "qbits.bitsgoa@gmail.com"

const profContact = [{
    "name": "Nakul Bhachawat",
    "phone_text": "+91-6262602441",
    "profile": "linkedin.com/nakul-bhachawat"
}, 
    {
        "name": "Shreyas Keskar",
        "phone_text": "+91-9404913723",
        "profile": "linkedin.com/shreyas-keskar"
    },
    {
        "name": "Harsha",
        "phone_text": "+91-6360832022",
        "profile": "linkedin.com/harsha-tau"
    }
];

const ProfContact = () => {
    return profContact.map(element => (
    <div class="col-sm-12 col-md-6" style={{marginBottom: '7px'}}>
        <a className="connectstyle" href={element["profile"]} target="_blank" rel="nopener noreferrer" title="Visit website">{element["name"]} <i class="fa fa-external-link"></i></a> <br/> WhatsApp:&nbsp;
        <a className="connectstyle" href={"tel:+91" + element["phone"]} title="Call" >{element["phone_text"]}</a>
    </div>
    ));
};

function Contact() {
    return (
    <div class="container" style={{ color: 'white' }}>
        <div class="row">
            <div class="col-lg-6 col-md-12" style={{minHeight: "400px"}}>
                <div class="">
                    <div class="contact-content" style={{textAlign: 'start', color: 'white'}}>
                        <div className="titleStyle1" style={{ color: 'white' }}> Contact Information </div>
                        <div class="divider" style={{marginBottom: '20px', color: 'white'}}></div>
                        <strong style={{fontSize: '140%', color: 'white'}}>Birla Institute of Technology &amp; Science</strong>
                        <p class="address" style={{fontWeight: '400', color: 'white'}}>
                            NH 17B, Bypass Road, Zuarinagar, Sancoale, Goa, India - 403726
                        </p>
                        <p style={{fontSize: '140%', fontWeight: 'bold', color: 'white'}}>
                            <i class="fa fa-envelope" style={{ color: 'white' }}>&nbsp;</i>
                            <a style={{ color: 'white', backgroundColor: 'transparent', textDecoration: 'none'}} href={"mailto:" + qbits_email}>
                                {qbits_email}
                            </a>
                        </p>
                        <div class="row mt-1" style={{ color: 'white' }}>
                            <ProfContact />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-1 gmap-bits-goa" id="bits-goa-on-gmaps" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <BITSGoaOnGMAP height={"400px"} width={"100%"} />
            </div>
        </div>
        <div className="row" style={{minHeight: '40px', color: 'white'}}></div>
    </div>
    );
    }
    
    export default Contact;
