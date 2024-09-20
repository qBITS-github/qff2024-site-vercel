import React from "react";

class CommitteeMember {
  constructor(memberType, name, description, institute,link) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
    this.link = link
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2">
        <a
              href={patron.link}
              target="_blank"
              rel="nopener noreferrer"
              style={{ all: "unset", cursor: "pointer"}}
            >
          <p class="card-name">{patron.name}</p>
          </a>
          <p class="card-description">{patron.description}</p>
          <p class="card-description">{patron.institute}</p>
        </div>
      );
    });
  }

}

const OrganizingChair = [
  new CommitteeMember(
    "Convener",
    "Prof. Kundan Kumar",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus",
    "https://universe.bits-pilani.ac.in/goa/kundan/profile"
  ),
];
const OrganizingSec = [
  new CommitteeMember(
    "Organizing Secretary",
    "Prof. Utpal Roy",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus",
    "https://www.bits-pilani.ac.in/goa/utpal-roy/"
  ),
  
];

const WebsiteTeam = [
  new CommitteeMember(
    "Website Team",
    "Mr. Ashish Pankhedkar",
    "Department of CSIS ,",
    "BITS Pilani K K Birla Goa Campus",
    ""
  ),
  new CommitteeMember(
    "Website Team",
    "Mr. Ojas Kanth",
    "Department of CSIS,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];

function OrgCommittee() {
  return (
    <section style={{ textAlign: "start" }}>
      <div class="titleStyle1">Organizing Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Convenor</h2>
      <div class="row px-3">{CommitteeMember.getCards(OrganizingChair)}</div>
      <h2 class="heading-secondary my-4">Organizing Secretary</h2>
      <div class="row px-3">{CommitteeMember.getCards(OrganizingSec)}</div>
     
    </section>
  );
}

export default OrgCommittee;
