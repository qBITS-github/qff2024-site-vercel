// import React from "react";

import { ExcuseCard, Excuses } from "../layouts/excuses";
import { invitedSpeakers, SpeakerHelper } from "./speakerData.js";

function Speakers() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="titleStyle1">Invited Speakers</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <div
        className="flex speakers-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          position: "relative",
        }}
      >
      {SpeakerHelper.getKeynoteSpeakerCards(invitedSpeakers)}
      </div>
    </div>
  );
}

export default Speakers;
