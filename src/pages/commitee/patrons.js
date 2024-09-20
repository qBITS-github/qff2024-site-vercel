import React from "react";
import patron1 from "../../images/speakers/patron1.jpg";
import patron2 from "../../images/speakers/patron2.jpg";

class CommitteeMember {
  constructor(memberType, name, description, institute, link, img) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
    this.link = link;
    this.img = img;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class=" btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2 mx-3">
          <img className="patronImg" src={patron.img}></img>

          <div style={{ marginTop: "15px" }}>
            <a
              href={patron.link}
              target="_blank"
              rel="nopener noreferrer"
              style={{ all: "unset", cursor: "pointer" }}
            >
              <p class="card-name">{patron.name}</p>
            </a>
            <p class="card-description">{patron.description}</p>
            <p class="card-description">{patron.institute}</p>
          </div>
        </div>
      );
    });
  }
}

const ChiefPatron = [
  new CommitteeMember(
    "Chief Patron",
    "Prof. V Ramgopal Rao",
    "Vice Chancellor,",
    "Birla Institute of Technology and Science, Pilani",
    "https://www.bits-pilani.ac.in/pilani/v-ramgopal-rao/",
    patron1
  ),
  new CommitteeMember(
    "Patron",
    "Prof. Suman Kundu",
    "Director,",
    "BITS Pilani K K Birla Goa Campus",
    "https://www.bits-pilani.ac.in/goa/suman-kundu/",
    patron2
  ),
];

function Patrons() {
  return (
    <div style={{ textAlign: "start" }}>
      <div class="titleStyle1">Commitee Members</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Chief Patron</h2>
      <div class="row px-3">{CommitteeMember.getCards(ChiefPatron)}</div>
    </div>
  );
}

export default Patrons;
