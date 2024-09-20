import React from 'react'
import BTable from "react-bootstrap/Table";

const spons_text = "Opportunities are available for companies to give advertisements in the abstract book of the symposium, which will contain messages from VIPs and articles from renowned scientists. Interested companies may contact the convener (e-mail) for giving the advertisement. "

const sponsorship = () => {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">Sponsorship</div>
        <div className="titleStyle1">opportunities</div>
        <div class="divider" style={{ marginBottom: "30px" }}></div>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {spons_text}{" "}
              </p>
        <div class="divider" style={{ marginBottom: "10px" , opacity: "0%"}}></div>
        <BTable striped bordered hover responsive>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Sponsor Category</th>
              <th>Rate (INR)</th>
              <th>Privileges</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: "center", justifyContent: "center" }}>
            <tr>
              <td style = {{backgroundColor: "#ffcccc", fontWeight: "bold"}}>Platinum</td>
              <td>2,00,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo at prominent places including
dias/website; Presentation opportunity; Full page advertisement in the abstract book; Area for exhibition stall; Two complementary event registration.
</td>
            </tr>
            <tr>
              <td style = {{backgroundColor: "#ccfff8", fontWeight: "bold"}}>Diamond</td>
              <td>1,00,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo at prominent places including
dias/website; Full page advertisement in the abstract book; Area for exhibition stall; One complementary event registration.</td>
            </tr>

            <tr>
              <td style = {{backgroundColor: "#ffffcc", fontWeight: "bold"}}>Gold</td>
              <td>50,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo at prominent places including
dias/website; Half page advertisement in the abstract book.</td>
            </tr>


            <tr>
              <td style = {{backgroundColor: "#e0e0e0", fontWeight: "bold"}}>Silver</td>
              <td>25,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo on website; Half page advertisement in the abstract book.</td>
            </tr>
            
          </tbody>
        </BTable>
        </div>
    </div>
  )
}

export default sponsorship