function SpeakerLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyleView">VIEW MORE &#160; &#x2192;</div>
    </a>
  );
}

class SpeakerHelper {
  constructor(
    speakerName, speakerImage, speakerText, speakerLink, speakerLinkStyle
  ) {
    this.speakerName = speakerName;
    this.speakerImage = speakerImage;
    this.speakerText = speakerText;
    this.SpeakerLink = speakerLink;
    this.speakerLinkStyle = speakerLinkStyle;
  }

  static speakerTextStyle = {
    marginTop: "40px",
    flexWrap: "wrap",
    textAlign: "justify",
  };

  static getKeynoteSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv">
          <img
            className="speakerImg"
            src={speaker.speakerImage}
            alt={speaker.speakerName}
          />
          <div className="upperDiv">
            <div className="speakerName">{speaker.speakerName}</div>
            <div className="speakerText">{speaker.speakerText}</div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }

  static getInvitedSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv col-md-4 col-sm-6 col-xs-12">
          <div className="upperDiv">
            <div className="speakerName2">{speaker.speakerName}</div>
            <div className="speakerText" style={{ marginBottom: "40px" }}>
              {speaker.speakerText}
            </div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }
};

const invitedSpeakers = [
  
  
  
];


export { invitedSpeakers, SpeakerHelper };