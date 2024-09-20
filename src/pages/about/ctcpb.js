import React from "react";
import logo from "../about/ctcpb-logo.png"
import { ListGroup } from "react-bootstrap";
const aboutText = "Department of Biological Sciences, BITS Pilani, K. K. Birla Goa Campus along with Plant Tissue Culture Association (India) invites you for National Symposium. The symposium aims to bring eminent scientists working in the frontier areas of Plant Tissue Culture, Biotechnologist, Genomics, Genetics, Metabolomics, Stress Biology, Developmental Biologist together and provide a forum for sharing their immense experience to encourage and inspire young researchers for exploring the emerging areas of Plant Biotechnology. The conference would address, deliberate and consolidate the issues and technologies aimed to develop climate resilient crops to meet the global food demand."


function CTCPB() {
    return(
      <div className="container" style={{marginBottom:"20px"}}>
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">
       CTCPB 2025

      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-txt-cnt">
        <div className="about-mid-grid">
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText}</p>
        </div>
      </div>
      <h3 class="" style={{ textAlign: "center", fontWeight: "light" }}>
                Thematic Areas <br />
              </h3>
      <div style={{background: "#30cb80", fontSize: "1.1rem", fontWeight: "400", font: "Segoue"}}>
              <ListGroup variant="flush">
                <ListGroup.Item>Plant Tissue Culture</ListGroup.Item>
                <ListGroup.Item>Plant Genome and Editing</ListGroup.Item>
                <ListGroup.Item>Plant Development </ListGroup.Item>
                <ListGroup.Item>Abiotic Stress Biology</ListGroup.Item>
                <ListGroup.Item>Plant Microbe Interaction</ListGroup.Item>
                <ListGroup.Item>Plant Metabolites and Nutraceuticals</ListGroup.Item>
              </ListGroup>
              </div>
    </div>
   );
}
    
 export default CTCPB;
  
