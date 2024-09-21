import React from "react";
import { Link } from "react-router-dom";
import qffimg from "../images/Sponsored/Blog-Image_01.png";
import BITSDClassroom from "../images/bits-d-classroom.jpg";
import BITSAudi from "../images/bits-audi.jpeg";
import Timer from "../layouts/timer";
import Timeline from "./timeline";
import qbits from "../images/qbits logo.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import qfflogo from "../images/Sponsored/Fall Fest.jpg";
import { ListGroup } from "react-bootstrap";

const homepg_text =
  ", a well-known all-India Institute for higher education. In keeping with the tradition of innovation and creativity, a state-of-the-art touch is given to the infrastructure of the entire institute without diminishing, in the least, the natural beauty of Goa surrounding the campus. Spacious labs, classrooms with soundproof acoustics, modern furniture, library and computer labs with internet facility define the infrastructural counters of the institution.";
const homepg_text2 =
  "Our Quantum Computing Club is dedicated to pushing the boundaries of what’s possible in computing. We actively participate in hackathons, discuss research papers, and organize a range of events throughout the year. Our signature event, the Qiskit Fall Fest, features engaging hackathons, coding challenges, and insightful talks from experts in the field. Whether you’re a seasoned coder or just curious about quantum mechanics, or don’t care at all about physics and computer science our community offers opportunities to learn, collaborate, and innovate and MOST IMPORTANTLY HAVE LOADS OF FUN!!!!!"
function Home() {
  return (
    <div>
      <div class="container">
        <div class="row align-items-around">
          <div class="col-sm-12 col-md-7">
            <div
              class="p-4"
              style={{
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignSelf: "center",
              }}
            >
              <div class="d-flex">
               <div className="d-flex">
                  <h1
                    style={{
                      textAlign: "start",
                      fontWeight: "400",
                      color: "grey",
                      padding: "20px",
                    }}
                  >
                    IBM Qiskit Fall Fest 2024
                  </h1>
                </div>
              </div>
              <div class="d-flex-inline" style={{ textAlign: "start" }}>
                {/* <a
                  download
                  href="documents/CTCPB_2025.pdf"
                  class="black-button m-1"
                >
                  {" "}
                  Schedule <i class="fa fa-download" aria-hidden="true"></i>
                </a> */}
                <a
                  download
                  href="documents/CTCPB_2025.pdf"
                  class="black-button m-1"
                >
                  {" "}
                  Schedule <i class="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
              <div class="d-flex" style={{ textAlign: "start" }}>
                <h3 style={{ fontWeight: "300" }}>November 16-24 | 2024</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 d-flex justify-content-center">
            <div
              class="d-flex align-items-center"
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "auto",
              }}
            >
              <img
                src={qffimg}
                alt="qffimg"
                style={{ paddingBottom: "200px" }}
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <Timer />

      {/* code to add single sponsorship and associated BY */}

      {/* <div className=" d-flex">
        <div class="row">
        <h2 className="my-5 text-center">IN ASSOCIATION WITH</h2>
        <div className="justify-content-center">
          <img
            className="img px-lg-5"
            style={{ height: "300px", alignItems: "center" }}
            src={ptcailogo}
            alt="ptcaiLogo"
          />
        </div>
        </div>

        <div class="row">

        <h2 className="my-5 text-center">SPONSORED BY</h2>
        <div className="justify-content-center">
          <img
            className="img px-lg-5"
            style={{ height: "300px", alignItems: "center" }}
            src={ptcailogo}
            alt="ptcaiLogo"
          />
        </div>
        </div>
        
      </div> */}

 {/* Use the below format if there are multiple associations and sponsers */}

      {/* <section className="section-carousel">
        <h2 className="my-5 text-center">IN ASSOCIATION WITH</h2>
        <div class="container-fluid justify-content-center">
          <OwlCarousel
              items={1}
              className="owl-theme px-5"
              loop
              nav
              margin={15}
            >
          <div className="justify-content-center">
            <img
              className="img px-lg-5"
              style={{ height: "300px", alignItems: "center" }}
              src={ptcailogo}
              alt=""
            />
          </div>
        </OwlCarousel>
        </div>
      </section>

      <section className="section-carousel">
        <h2 className="my-5 text-center">SPONSORED BY</h2>
        <div class="container-fluid test">
          <OwlCarousel
            items={3}
            className="owl-theme px-5"
            loop
            nav
            margin={15}
          >
            <div>
              <img className="img px-lg-5" src={ptcailogo} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </section> */}

      <div class="container my-5 py-0">
        <div class="row  justify-content-center align-middle">
          <div class="col-lg-5 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "center", fontWeight: "light" }}>
                Events Lined up <br />
              </h1>
              <div
                style={{
                  background: "#30cb80",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                }}
              >
                <ListGroup variant="flush">
                  <ListGroup.Item> • Intro to Quantum Computing - Q101 • </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    • Hackathon •{" "}
                  </ListGroup.Item>
                  <ListGroup.Item> • Qiskit Challenges • </ListGroup.Item>
                  <ListGroup.Item> • Talks by Guest Speakers • </ListGroup.Item>
                  
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 py-0">
        <div class="row  justify-content-center align-middle">
          <div class="col-lg-5 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light" }}>
                About the Institute <br />
              </h1>
              <p style={{ fontWeight: "400", textAlign: "justify" }}>
                <a
                  href="https://www.bits-pilani.ac.in/Goa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modern-link"
                >
                  BITS Pilani K. K. Birla Goa Campus
                </a>
                &nbsp;is one of the four campuses of the&nbsp;
                <a
                  href="https://www.bits-pilani.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modern-link"
                >
                  Birla Institute of Technology &amp; Science, Pilani
                </a>
                {homepg_text}
              </p>
              <div class="d-flex" style={{ textAlign: "start" }}>
                <Link to="/venue/bpgc-goa" class="black-button">
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
            <img src={BITSAudi} alt="" class="img-fluid" />
          </div>
          <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
            <img src={BITSDClassroom} alt="" class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="container py-4 my-5">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
            <img src={qbits} alt="ptcailogo" class="img-fluid" />
          </div>
          <div class="col-lg-8 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light" }}>
                About qBITS
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {homepg_text2}{" "}
              </p>
              <div class="d-flex" style={{ textAlign: "start" }}>
                <Link to="qbits/" class="black-button">
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-4 my-5">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
            <img src={qfflogo} alt="ctcpblogo" class="img-fluid" />
          </div>
          <div class="col-lg-8 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light" }}>
                About the Fall Fest
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {homepg_text}{" "}
              </p>
              {/* 
                <div class="d-flex" style={{ textAlign: "start" }}>
                  <Link to="/about/ctcp/" class="black-button">
                    VIEW MORE
                  </Link>
                </div> 
              */}
            </div>
          </div>
        </div>
      </div>

      <Timeline />
    </div>
  );
}

export default Home;
