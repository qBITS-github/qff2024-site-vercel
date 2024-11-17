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
  }

  static speakerImageStyle = {
    borderRadius: "50%",
  };

  static getKeynoteSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv" style={{ ...SpeakerHelper.keynoteSpeakerCardStyle, color: "#ffffff", fontFamily: "IBM Plex Sans", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "10px", overflow: "hidden", maxWidth: "300px" }}>
          <img
        className="speakerImg"
        src={speaker.speakerImage}
        alt={speaker.speakerName}
        style={{ ...SpeakerHelper.speakerImageStyle, borderRadius: "50%", marginBottom: "10px", width: "100px", height: "100px" }}
          />
          <div className="speakerName" style={{ color: "#ffffff", fontFamily: "IBM Plex Sans", fontWeight: "bold", marginBottom: "-10px", textAlign: "center" }}>{speaker.speakerName}</div>
          <div className="upperDiv" style={{ textAlign: "center" }}>
        <div className="speakerText" style={{ ...SpeakerHelper.speakerTextStyle, color: "#ffffff", fontFamily: "IBM Plex Sans", textAlign: "center", marginBottom: "10px" }}>
          {speaker.speakerText}
        </div>
        <div style={{ ...speaker.speakerLinkStyle, color: "#ffffff", fontFamily: "IBM Plex Sans", textAlign: "center" }}>
          <SpeakerLink link={speaker.SpeakerLink} />
        </div>
          </div>
        </div>
      );
    });
  }
  static keynoteSpeakerCardStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
  };

  static invitedSpeakerCardStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
  };
  static getInvitedSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv col-md-4 col-sm-6 col-xs-12" style={{ borderRadius: "15px", overflow: "hidden", maxWidth: "100px", margin: "0 auto" }}>
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
  
  
  {
    speakerName: "Sreekuttan L S",
    speakerImage: "https://media.licdn.com/dms/image/v2/D5603AQG5dx0gHk9ksQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724992969900?e=1737590400&v=beta&t=3WktQR4J5WkgYwU3HrDLYtiZpkZh-_GYBLSSsELD9Fo",
    speakerText: " CEO of Bloq Quantum, simplifies quantum adoption with an easy-to-use low-code tool. An IISER Pune graduate, he helps businesses unlock quantum computing's potential for growth and innovation.",
    SpeakerLink: "https://www.linkedin.com/in/sreekuttanls/?originalSubdomain=in",
    speakerLinkStyle: { color: "blue" }
  },
  {
    speakerName: "Guncha Malik",
    speakerImage: "https://media.licdn.com/dms/image/v2/D4D03AQHdkkVVcApoHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669876540289?e=1737590400&v=beta&t=8kLzZHe7sKNHfKJ4axMrQUkKGrWIT6OEzL3CDYr-Knc",
    speakerText: "STSM at IBM Cloud Platform, specializes in secure cloud ecosystems and Quantum Safe Cryptography. She focuses on ethical AI and quantum computing, ensuring secure and innovative technology integration..",
    SpeakerLink: "https://example.com/jane-smith",
    speakerLinkStyle: { color: "green" }
  }
];


export { invitedSpeakers, SpeakerHelper };