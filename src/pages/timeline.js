import React from "react";
import { Link } from "react-router-dom";
import "../timeline.css";
import { ExcuseCard, Excuses } from "../layouts/excuses";

class timelineEvent {
  constructor(date, name) {
    this.name = name;
    this.date = date;
  }

  static getCards(eventList) {
    return eventList.map(function (event, index) {
      return (
        <li>
          <div class={index % 2 ? "direction-r" : "direction-l" }>
            <div class="flag-wrapper">
              <span class="flag">{event.date}</span>
            </div>
            <div class="desc">{event.name}</div>
          </div>
        </li>
      );
    });
  }
}

const eventList = [
  new timelineEvent("15th Sept 2024", "Early Bird Registration Starts"),
  new timelineEvent("30th Oct 2024", "Early Bird Registration Ends"),
  new timelineEvent("1st Nov 2024", "Normal Registration Starts"),
  new timelineEvent("15th Dec 2024", "Normal Registration Ends"),
  new timelineEvent("31st Dec 2024", "Abstract Acceptance Notification"),
];

function Timeline() {
  return (
    // <div className="container">
    //    <div className="titleStyle1">Timeline</div>
    // <div className="titleStyle2">Of Events</div>
    // <ExcuseCard excuseType={Excuses.TBU} />

    // </div>
    <div class="container">
      <div className="titleStyle1">Timeline</div>
      <div className="titleStyle2">Of Events</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <section class="section-timeline">
        <div class="scale">
          <ul class="timeline">{timelineEvent.getCards(eventList)}</ul>
          <div className="center-fix">
            <Link class="black-button mg-tp" to="/contact">
              CONTACT US <span> REGARDING ANY OTHER DETAILS </span>
            </Link>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
