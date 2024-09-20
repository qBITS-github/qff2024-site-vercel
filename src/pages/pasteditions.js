import React from "react";
import { ExcuseCard, Excuses } from "../layouts/excuses";

function PastEditionElement({ link, yearname }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyle">
        <b>{yearname}</b>
      </div>
    </a>
  );
}

function PastEditions() {
  // return (
  //   <div>
  //     <ExcuseCard excuseType={Excuses.TBU} />
  //   </div>
  // );

  return (
    <div
      className="container"
      style={
        {
          /* marginLeft:"60px", marginTop: "40px" */
        }
      }
    >
      <div className="titleStyle1">Previous</div>
      <div className="titleStyle1">Conferences</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          /*marginLeft: '60px', marginRight: '120px',*/ marginTop: "60px",
        }}
      >
        <PastEditionElement
          link="https://sites.google.com/pondiuni.ac.in/ptcai-rapb/"
          yearname="RAPB 2024"
        />
        <PastEditionElement
          link="https://ifans.nabi.res.in/"
          yearname="IFANS 2023"
        /> 
        <PastEditionElement
          link=" http://www.nrcpb.res.in/content/icar-nipb-organizing-international-symposium-%E2%80%9Cadvances-plant-biotechnology-and-nutritional"
          yearname="NRCPB 2022"
        />
        {/* <PastEditionElement
          link="https://iiab.icar.gov.in/"
          yearname="IIAB 2021"
        /> */}
      </div>
    </div>
  );
}

export default PastEditions;
