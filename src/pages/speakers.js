// import React from "react";

import { ExcuseCard, Excuses } from "../layouts/excuses";
import { invitedSpeakers, SpeakerHelper } from "./speakerData.js";

function Speakers() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "50px",
        backgroundColor: "111415",
        borderRadius: "10px", // Added rounded corners
      }}
    >
      <div className="titleStyle1" style={{color: "white", borderRadius: "10px"}}>Invited Speakers</div>
      <div className="divider" style={{ marginBottom: "30px", borderRadius: "10px" }}></div>
      <div
        className="flex speakers-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          position: "relative",
          borderRadius: "10px", // Added rounded corners
        }}
      >
      {SpeakerHelper.getKeynoteSpeakerCards(invitedSpeakers)}
      </div>
    </div>
  );
}
document.body.style.backgroundColor = "#111415";
export default Speakers;
