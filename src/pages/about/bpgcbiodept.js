import React from "react";
import aboutbottompng from '../../images/assets/bits-top.jpg';
import biodeptpic from '../../images/biodeptpic.jpg'

const aboutText2 =
  "The department presents learning by means of an interdisciplinary and multifaceted approach. Classroom based lectures, problem-based learning projects, basic hands-on experience for developing laboratory skills, seminars with scope for interactive knowledge sharing are offered here. Courses cover diverse topics of biology with roots in microorganisms, plants and animals with varied outlook through experimental and computational approaches.";
const aboutText3 =
  "The graduates from the department will have distinguished careers in science and engineering. The track record in this regard shows that our alumni have occupied leading positions in top-ranked industries and premier institutes across the globe. The department is deeply involved in research and shares the knowledge and transfers it to the academic and industrial sectors through publications, lectures, collaborations, consultations etc.";

function BPGCBioDept() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "45px" /* marginLeft:"60px", marginTop: "40px" */
      }}
    >
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">Department of Biological Sciences</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <p style={{fontWeight: '400'}} className="about-txt-cnt">
              The&nbsp;
              <a
                class="modern-link"
                href="https://www.bits-pilani.ac.in/goa/mathematics/DepartmentofMathematics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Department of Biological Sciences of BITS Pilani Goa
              </a>
              {" "}
            was established in 2004. The department has competent faculties, researcers and scholars with
            vast knowledge in pure &amp; applied Biological Sciences. Research at the Department of Biological Sciences is multidisciplinary. The topics of exploration burgeon from plants, animals and microorganisms with perspectives from nano, micro and macro level. Efforts towards understanding biological objects and their working, has experimental and computational directions. Basic theories as well as application oriented concepts are being studied here. The teaching and research efforts here range from understanding basic to advanced biology.
          </p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText2}</p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText3}</p>
        </div>
        <img
          src={biodeptpic}
          alt="Scenic Campus View"
          className="about-img-btm"
        />
      </div>
    </div>
  );
}

export default BPGCBioDept;
