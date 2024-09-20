import React from "react";
import BTable from "react-bootstrap/Table";
const hotelslink = "https://www.bits-pilani.ac.in/goa/goahotels"

// const accoText = "Note about accomodation. Mention in registration form if hostels are available"

function Accomodation() {
    return (
        <div className="container">
            <div className="titleStyle1"> Accomodation Nearby </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
                <BTable striped bordered hover responsive>
                <thead style={{ textAlign: "center" }}>
                    <tr>
                    <th>Hotel Name</th>
                    <th>Hotel Category</th>
                    <th>Approx Tariff</th>
                    {/* <th>Fare (INR)</th> */}
                    </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    <tr>
                    <td>The HQ</td>
                    <td>4 star</td>
                    <td>4200</td>
                    </tr>

                    <tr>
                    <td> The Flora Grand *</td>
                    <td>3 star</td>
                    <td>3300</td>
                    </tr>

                    <tr>
                    <td>Hotel Royal Altis *</td>
                    <td>3 star</td>
                    <td>3000</td>
                    </tr>

                    <tr>
                    <td>Hotel Supreme Vasco *</td>
                    <td>3 star</td>
                    <td>3000</td>
                    </tr>

                    <tr>
                    <td>Ocean View: The Apartment Hotel (2BHK/3BHK) **</td>
                    <td>3 star</td>
                    <td>3200 / 4400</td>
                    </tr>
                </tbody>
                </BTable>
            <p style={{fontWeight: '400'}} className="about-txt-cnt"><b>Note:</b></p>
            <ul style={{textAlign: "left"}}>
                <li>Hostel accommodation may be provided to Ph.D. students based on availability.</li>
                <li>To and fro free shuttle service will be provided to the participants for the above hotels only.</li>
                <li>* When booking the above hotels, please mention that you are participating in a conference hosted by BITS Pilani, Goa Campus to avail the contracted rates.</li>
                <li>** Shared accomodation for Phd students / RA can be provided at minimal rates</li>
            </ul>
            <a class="black-button" href={hotelslink} target="_blank" rel="nopener noreferrer">CLICK HERE FOR MORE ACCOMODATION DETAILS NEARBY</a>
            <p></p>
            
        </div>
    );
}

export default Accomodation;