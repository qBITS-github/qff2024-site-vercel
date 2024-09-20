import React from "react";
import { Link } from "react-router-dom";
import BITSDome from "../images/bdomee.jpeg";
import BITSDClassroom from "../images/bits-d-classroom.jpg";
import BITSAudi from "../images/bits-audi.jpeg";
import Timer from "../layouts/timer";
import Timeline from "./timeline";
import ptcailogo from "../images/icons/ptcai.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ctcpblogo from "../images/icons/ctcpb-logo.png";
import { ListGroup } from "react-bootstrap";

const homepg_text =
  ", a well-known all-India Institute for higher education. In keeping with the tradition of innovation and creativity, a state-of-the-art touch is given to the infrastructure of the entire institute without diminishing, in the least, the natural beauty of Goa surrounding the campus. Spacious labs, classrooms with soundproof acoustics, modern furniture, library and computer labs with internet facility define the infrastructural counters of the institution.";
const homepg_text2 =
  "Department of Biological Sciences, BITS Pilani, K. K. Birla Goa Campus along with Plant Tissue Culture Association (India) invites you for National Symposium. The symposium aims to bring eminent scientists working in the frontier areas of Plant Tissue Culture, Biotechnologist, Genomics, Genetics, Metabolomics, Stress Biology, Developmental Biologist together and provide a forum for sharing their immense experience to encourage and inspire young researchers for exploring the emerging areas of Plant Biotechnology. The conference would address, deliberate and consolidate the issues and technologies aimed to develop climate resilient crops to meet the global food demand.";
const homepg_text3 = 
  "The Plant Tissue Culture Association of India (PTCA(I)), registered in 1976, is an elite body of Plant Tissue Culture Scientists, several of whom are pioneers in this field and while other have established scientific credentials. PTCA(I) has been organizing symposia which facilitated coming together of faculties, students, researchers and NGOs to deliberate on recent advances in plant science and come out with proposals for future line of research."
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
                      fontWeight: "bold",
                      color: "grey",
                      fontSize: "7rem",
                      marginTop: "30px",
                    }}
                  >
                    46<sup>th</sup>
                  </h1>
                </div>
                <div className="d-flex">
                  <h1
                    style={{
                      textAlign: "start",
                      fontWeight: "400",
                      color: "grey",
                      padding: "20px",
                    }}
                  >
                    Annual Meeting of Plant Tissue Culture Association India
                  </h1>
                </div>
              </div>
              <div class="d-flex">
                <h1
                  className=""
                  style={{
                    textAlign: "start",
                    fontWeight: "300",
                    fontSize: "2rem",
                  }}
                >
                  Symposium on Current Trends and Challenges in Plant Biotechnology - 2025
                </h1>
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
                  Flyer <i class="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
              <div class="d-flex" style={{ textAlign: "start" }}>
                <h3 style={{ fontWeight: "300" }}>FEBRUARY 24-26 | 2025</h3>
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
                src={BITSDome}
                alt="Bdome"
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
                Thematic Areas <br />
              </h1>
              <div
                style={{
                  background: "#30cb80",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                }}
              >
                <ListGroup variant="flush">
                  <ListGroup.Item> • Plant Tissue Culture and Enterpreneurship • </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    • Plant Genome and Editing •{" "}
                  </ListGroup.Item>
                  <ListGroup.Item> • Plant Development • </ListGroup.Item>
                  <ListGroup.Item> • Abiotic Stress Biology • </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    • Plant Microbe Interaction •{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    • Plant Metabolites and Nutraceuticals •{" "}
                  </ListGroup.Item>
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
            <img src={ptcailogo} alt="ptcailogo" class="img-fluid" />
          </div>
          <div class="col-lg-8 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light" }}>
                About PTCAI
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {homepg_text3}{" "}
              </p>
              <div class="d-flex" style={{ textAlign: "start" }}>
                <Link to="/about/ptcai/" class="black-button">
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
            <img src={ctcpblogo} alt="ctcpblogo" class="img-fluid" />
          </div>
          <div class="col-lg-8 col-md-12 p-3" style={{ minHeight: "350px" }}>
            <div>
              <h1 class="" style={{ textAlign: "start", fontWeight: "light" }}>
                About the Conference
                <br />
              </h1>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {homepg_text2}{" "}
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
