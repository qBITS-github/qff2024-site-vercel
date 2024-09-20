import React from "react";
import BITSGoaOnGMAP from "../layouts/bits-goa-map";

const contactuslink = "";
const ctcpb_email = "ctcpb2025@gmail.com"

const profContact = [{
    "name": "Prof. Kundan Kumar",
    "phone_text": "+91-832-2580196",
    "profile": "https://universe.bits-pilani.ac.in/goa/kundan/Profile"
}
];

const ProfContact = () => {
    return profContact.map(element => (
    <div class="col-sm-12 col-md-6" style={{marginBottom: '7px'}}>
        <a className="connectstyle2" href={element["profile"]} target="_blank" rel="nopener noreferrer" title="Visit website">{element["name"]} <i class="fa fa-external-link"></i></a> <br/> Office:&nbsp;
        <a className="connectstyle" href={"tel:+91" + element["phone"]} title="Call" >{element["phone_text"]}</a>
    </div>
    ));
};

function Contact() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12" style={{minHeight: "400px"}}>
                <div class="">
                    <div class="contact-content" style={{textAlign: 'start'}}>
                        <div className="titleStyle1"> Contact Information </div>
                        <div class="divider" style={{marginBottom: '20px'}}></div>
                        <strong style={{fontSize: '140%'}}>Birla Institute of Technology &amp; Science</strong>
                        <p class="address" style={{fontWeight: '400'}}>
                            NH 17B, Bypass Road, Zuarinagar, Sancoale, Goa, India - 403726
                        </p>
                        <p style={{fontSize: '140%', fontWeight: 'bold'}}>
                            <i class="fa fa-envelope">&nbsp;</i>
                            <a style={{ color: '#0a9dff', backgroundColor: 'transparent', textDecoration: 'none'}} href={"mailto:" + ctcpb_email}>
                                {ctcpb_email}
                            </a>
                        </p>
                        <div class="row mt-1">
                            <ProfContact />
                        </div>

                    
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-1 gmap-bits-goa" id="bits-goa-on-gmaps" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <BITSGoaOnGMAP height={"400px"} width={"100%"} />
            </div>
        </div>
        <div className="row" style={{minHeight: '40px'}}></div>
    </div>
    );
    }
    
    export default Contact;
