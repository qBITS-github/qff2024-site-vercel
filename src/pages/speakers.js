// import React from "react";
import './speakers.css';

import { ExcuseCard, Excuses } from "../layouts/excuses";
import { invitedSpeakers, SpeakerHelper } from "./speakerData.js";

function Speakers() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "50px",
        backgroundColor: "#111415",
        borderRadius: "10px", // Added rounded corners
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
      }}
    >
      <div className="titleStyle1" style={{ color: "white", borderRadius: "10px" }}>
        Invited Speakers
      </div>
      <div className="divider" style={{ marginBottom: "30px", borderRadius: "10px" }}></div>
      <div
        className="speakers-grid"
        style={{
          display: "grid",
          gap: "20px",
          position: "relative",
          borderRadius: "10px", // Added rounded corners
          justifyContent: "center", // Center horizontally
        }}
      >
        {SpeakerHelper.getKeynoteSpeakerCards(invitedSpeakers)}
      </div>
    </div>
  );
}
document.body.style.backgroundColor = "#111415";
export default Speakers;
