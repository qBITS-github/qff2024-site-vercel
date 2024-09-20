import React from "react";
import logo from "../../images/icons/ptcai.png"

const aboutText = "The Plant Tissue Culture Association of India (PTCA(I)) registered in 1976, is an elite body of Plant Tissue Culture Scientists, several of whom are pioneers in this field and while other have established scientific credentials.PTCA(I) has been organizing symposia which facilitated coming together of faculties, students, researchers and NGOs to deliberate on recent advances in plant science and come out with proposals for future line of research."


function PTCAI() {
    return(
      <div className="container" style={{marginBottom:"20px"}}>
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">
      Plant Tissue Culture Association of India 

      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <img
            src={logo}
            alt="CTCPB logo"
            className="about-img-logo"
           style={{height: "100px", marginTop: "0px"}} 
          />
          <p> </p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText}</p>
        </div>
      </div>
    </div>
   );
}
    
 export default PTCAI;
  
