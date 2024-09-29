import React from "react";
import { Link } from "react-router-dom";
import qffimg from "../images/Sponsored/Blog-Image_01.png";
import BITSDClassroom from "../images/bits-d-classroom.jpg";
import BITSAudi from "../images/bits-audi.jpeg";
import Timer from "../layouts/timer";
import Timeline from "./timeline";
import qbits from "../images/qbits_nobg.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import qfflogo from "../images/Sponsored/QFF_dark.png";
import { ListGroup } from "react-bootstrap";
import qbits_logo from "../images/qbits_nobg.png";
import crqit from "../images/CRQIT.png";

const homepg_text =
  "Qiskit Fall Fest is a collection of quantum computing events that invites students, researchers and industry professionals around the world to participate in a wide array of quantum-themed activities, ranging from quantum challenges, hackathons, and coding competitions to workshops, social events, and more. With each Qiskit Fall Fest, we partner with a select group of university students and other volunteer hosts to help them plan and run the global roster of Fall Fest events. This year's event theme, World of Quantum, celebrates the international scope of the event series and the rapid growth of the global quantum community.";
const homepg_text2 =
  "Our Quantum Computing Club is dedicated to pushing the boundaries of what’s possible in computing. We actively participate in hackathons, discuss research papers, and organize a range of events throughout the year. Our signature event, the Qiskit Fall Fest, features engaging hackathons, coding challenges, and insightful talks from experts in the field. Whether you’re a seasoned coder or just curious about quantum mechanics, or don’t care at all about physics and computer science our community offers opportunities to learn, collaborate, and innovate and MOST IMPORTANTLY HAVE LOADS OF FUN!!!!!"
function Home() {
  return (
    <div>
      <div style={{ 
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${qffimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        
      }}>
      <div class="container" >
        <div  >
          <div class="col-sm-12 col-md-12" >
            <div
              class="p-4"
              
            >
              <div class="d-flex">
              <div className="col-sm-12 col-md-12" style={{
                    minHeight: "100px",
                    display: "flex",
                    flexDirection: "column",
                    //justifyContent: "center", // Center vertically
                    alignItems: "center", // Center horizontally
                   }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img src={qbits_logo} alt="Qubits Logo" style={{ height: "100px" , marginRight: "20px", padding: "10px"}} />
                      <img src={crqit} alt="CRQIT Logo" style={{ height: "80px" }} />
                      
                    </div>
                  <h1
                    style={{
                      textAlign: "center",
                      fontWeight: "300",
                      color: "white",
                      padding: "20px",
                      alignItems: 'center',
                      fontFamily: "IBM Plex Sans, sans-serif",
                    }}
                  >
                    Qiskit Fall Fest 2024
                  </h1>
                  <h3 style={{ fontWeight: "300", color: "white" }}>November 16-24 | 2024</h3>
                </div>
              </div>
              <div class="d-flex-inline" style={{
                    minHeight: "50px",
                    display: "flex",
                    flexDirection: "column",
                    //justifyContent: "center", // Center vertically
                    alignItems: "center",}}>
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe5BJwXmjrvfUy0lVXqc8GhkNiXqQIHdycz3lExkB52pKWNYg/viewform?usp=sf_link"
                  class="black-button m-1"
                >
                  {" "}
                  Register Now! <i  aria-hidden="true"></i>
                </a>
              </div>
              <div class="d-flex" style={{ textAlign: "start" }}>
                
              </div>
            </div>
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



            <div class="container my-5 py-0">
        <div class="row  justify-content-center align-middle">
          <div class="col-lg-5 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "center", fontWeight: "light", color: "white" }}>
          Events Lined up <br />
              </h1>
              <div
          style={{
            backgroundColor: "#0a0c0d",
            fontSize: "1.2rem",
            fontWeight: "400",
          }}
              >
          <ListGroup variant="flush">
            <hr style={{ backgroundColor: 'white' }} />
            <ListGroup.Item style={{ backgroundColor: '#0a0c0d', color: 'white' }}> • Intro to Quantum Computing - Q101 • </ListGroup.Item>
            <hr style={{ backgroundColor: 'white' }} />
            <ListGroup.Item style={{ backgroundColor: '#0a0c0d', color: 'white' }}>
              {" "}
              • Quest - Quantum Hackathon •{" "}
            </ListGroup.Item >
            <hr style={{ backgroundColor: 'white' }} />
            <ListGroup.Item style={{ backgroundColor: '#0a0c0d', color: 'white' }}> • Qiskit Challenges • </ListGroup.Item>
            <hr style={{ backgroundColor: 'white' }} />
            <ListGroup.Item style={{ backgroundColor: '#0a0c0d', color: 'white' }}> • Talks by Guest Speakers • </ListGroup.Item>
            <hr style={{ backgroundColor: 'white' }} />
          </ListGroup>
              </div>
            </div>
          </div>
        </div>
            </div>

            {/*<div class="container my-5 py-0">
        <div class="row  justify-content-center align-middle">
          <div class="col-lg-5 col-md-12 p-3" style={{ minHeight: "350px" ListGr   <div>
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
            </div>*/}

      <div class="container py-4 my-5">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
            <img src={qbits} alt="ptcailogo" class="img-fluid" />
          </div>
          <div class="col-lg-8 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light", color: "white" }}>
                About qBITS
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify", color: "white" }}>
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
              <h1 class="" style={{ textAlign: "start", fontWeight: "light", color: 'white' }}>
                About the Fall Fest
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify", color: 'white' }}>
                {" "}
                {homepg_text}{" "}
              </p>
              
                <div class="d-flex" style={{ textAlign: "start" }}>
                  <Link to="/about/ctcp/" class="black-button">
                    Register Now!
                  </Link>
                </div> 
              
            </div>
          </div>
        </div>
      </div>

      <Timeline />
    </div>
  );
}

export default Home;
