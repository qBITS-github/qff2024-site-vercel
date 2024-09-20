import adim from "../images/speakers/adim.png";
import aks from "../images/speakers/aks.png";
import akt from "../images/speakers/akt.png";
import ap from "../images/speakers/ap.jpeg";
import ar from "../images/speakers/ar.jpeg";
import jg from "../images/speakers/jg.png";
import jt from "../images/speakers/jt.jpg";
import kam from "../images/speakers/kam.jpg";
import kcb from "../images/speakers/kcb.jpg";
import mp from "../images/speakers/mp.jpg";
import pka from "../images/speakers/pka.jpg";
import pkv from "../images/speakers/pkv.png";
import rc from "../images/speakers/rc.jpg";
import sd from "../images/speakers/sd.jpg";
import sg from "../images/speakers/sg.jpg";
import skm from "../images/speakers/skm.jpg";
import sks from "../images/speakers/sks.jpg";
import slsp from "../images/speakers/slsp.jpg";
import ssb from "../images/speakers/ssb.ashx";
import pd from "../images/speakers/pd.jpg";

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
  
  new SpeakerHelper(
    "Prof. Adinpunya Mitra",
    adim,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IIT 
       <br />
        Kharagpur
      </div>
    ),
    "https://www.iitkgp.ac.in/department/AG/faculty/ag-adin"
  ),

  new SpeakerHelper(
    "Prof. Akhilesh K. Tyagi",
    akt,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        DU South Campus
        <br />
        New Delhi
      </div>
    ),
    "https://www.dpmb.ac.in/index.php?page=AKT"
  ),

  new SpeakerHelper(
    "Dr. Alok K. Sinha",
    aks,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
    "https://nipgr.ac.in/research/dr_asinha.php"
  ),

  new SpeakerHelper(
    "Dr. Amey Redkar",
    ar,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NCBS
        <br />
        Bangalore
      </div>
    ),
    "https://www.ncbs.res.in/faculty/aredkar"
  ),

  new SpeakerHelper(
    "Prof. Ashwani Pareek",
    ap,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NABI
        <br />
        Punjab
      </div>
    ),
    "https://nabi.res.in/profile/scientists?id=MTA%3D"
  ),

  new SpeakerHelper(
    "Dr. Jitendra Giri",
    jg,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
    "https://nipgr.ac.in/research/dr_jgiri.php"
  ),

  new SpeakerHelper(
    "Dr. Jitendra Thakur",
    jt,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICGEB
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/jitendra-thakur/"
  ),

  new SpeakerHelper(
    "Prof. K. C. Bansal",
    kcb,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NAAS
        <br />
        New Delhi
      </div>
    ),
    "https://naas.org.in/detail.php?id=48"
  ),

  new SpeakerHelper(
    "Dr. Kutubuddin Ali Molla",
    kam,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR-NRRI
        <br />
        Cuttack
      </div>
    ),
    "https://icar-nrri.in/wp-content/uploads/2020/03/Kutub_New.pdf"
  ),

  new SpeakerHelper(
    "Prof. Manoj Prasad",
    mp,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        DU South Campus 
        <br />
        New Delhi
      </div>
    ),
  "https://du.irins.org/profile/43175"
  ),
 
  new SpeakerHelper(
    "Prof. Padmanabh Dwivedi",
    pd,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IISc
        <br />
        Bangalore
      </div>
    ),
    "https://bhu.ac.in/Content/FacultyCV/pdwivedi25@rediffmail.com.pdf"
  ),

  new SpeakerHelper(
    "Dr. Pradeep K. Agarwal",
    pka,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR-CSMCRI
        <br />
        Bhavnagar
      </div>
    ),
    "https://www.csmcri.res.in/node/340"
  ),

  new SpeakerHelper(
    "Dr. Praveen Kumar Verma",
    pkv,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        School of Life Sciences
        <br />
        JNU, New Delhi
      </div>
    ),
    "https://www.jnu.ac.in/content/praveenkverma"
  ),
 
  new SpeakerHelper(
    "Prof. Rakhi Chaturvedi",
    rc,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IIT 
        <br />
        Guwahati
      </div>
    ),
    "https://fac.iitg.ac.in/rakhi_chaturvedi/profile.html"
  ),
 
  new SpeakerHelper(
    "Dr. Satendra Kumar Mangrauthia",
    skm,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICAR-IIRR
        <br />
        Hyderabad
      </div>
    ),
    "https://www.icar-iirr.org/index.php/en/about-iirr/staff-iirr/iirr-scientists/crop-improvement/146-dr-satendra-kumar-mangrauthia-senior-scientist"
  ),

  new SpeakerHelper(
    "Dr. Sneh Lata Singla-Pareek",
    slsp,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICGEB
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/sneh-lata-singla-pareek/"
  ),

  new SpeakerHelper(
    "Dr. Sourav Datta",
    sd,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IISER 
        <br />
        Bhopal
      </div>
    ),
    "https://bio.iiserb.ac.in/Home/faculty_details/1367"
  ),

  new SpeakerHelper(
    "Prof. S. S. Bhojwani",
    ssb,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        DayalBagh Educational Institute
        <br />
        Agra
      </div>
    ),
    "https://www.schandpublishing.com/author-details/s-sbhojwani"
  ),
 
  new SpeakerHelper(
    "Prof. Sudhir K. Sopory",
    sks,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        ICGEB
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/sudhir-k-sopory/"
  ),

  new SpeakerHelper(
    "Dr. Sumit Ghosh",
    sg,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR - CIMAP
        <br />
        Lucknow
      </div>
    ),
    "https://www.cimap.res.in/EmployeeProfile/EmployeeProfile.aspx?id=661"
  ),
 
  
];


export { invitedSpeakers, SpeakerHelper };