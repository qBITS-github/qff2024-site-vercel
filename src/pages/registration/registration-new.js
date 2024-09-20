import React from "react";
// import { Link } from 'react-router-dom';
import { ExcuseCard, Excuses } from "../../layouts/excuses.js";

function RegistrationNew() {
  return (
    <div>
      <section id="registration" class="team section-bg">
        <div class="container">
 
          <div class="section-header">
            <div className="titleStyle1">Conference Registration</div>
            <div class="divider" style={{ marginBottom: "30px" }}></div>
            <div className="titleStyle2">Details </div>
            <><br /></>
            <div>
              <p style={{ textAlign: "justify" }}>
              
                <ul>
                  <li>Registration includes all meals and refreshment breaks for the duration of the conference</li>
                  <li>To register for the Conference at the reduced Student Rate, you must have a valid student ID</li>
                  <li>To register for the Conference as a PTCAI member, you must be a PTCAI member</li>
                </ul>
              </p>
            </div>           

            <div class="divider" style={{ marginBottom: "30px" }}></div>
            <div className="titleStyle2">Abstract Format </div>
            <><br /></>
            <div>
              <p style={{ textAlign: "justify" }}>
                <ul>
                  <li>Title, followed by the name, affiliation and e-mail of the corresponding Author(s). Presenter's name(s) to be underlined</li>
                  <li>Body of the abstract must not be exceeding 300 words</li>
                  <li> Font: Times New Roman</li>
                  <li>Font Size: 12</li>
                  <li>Figures and references should not be included in the abstract</li>
                </ul>
              </p>
            </div>           

            <div class="divider" style={{ marginBottom: "30px" }}></div>
          </div>
          
          <div class="section-header">
            <div className="titleStyle2">Fees</div>
            <div class="divider" style={{ marginBottom: "30px" }}></div>
          </div>


         {/* <div class="my-2">
          {ExcuseCard(Excuses.RegistrationsClosed)}
          </div> */}

          <div class="section-header">
            <div class="cost-table">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr align="center">
                    <th></th>
                    <th colspan="1">Early Bird Registration</th>
                    <th colspan="1">Regular Registration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Participant Category</b>
                    </td>
                    <td align="center">
                      <b>
                        From 15<sup>th</sup> Sep 2024 
                        <br />
                        to 30<sup>th</sup> Oct 2024
                      </b>
                    </td>
                    
                    <td align="center">
                      <b>
                        From 1<sup>st</sup> Nov 2024
                        <br />
                        to 15<sup>th</sup> Dec 2024 
                      </b>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      Student & Post Doctral Fellow
                    </td>
                    <td align="center">Rs. 3,000</td>
                    <td align="center">Rs. 4,000</td>
                  </tr>
                  <tr>
                    <td>
                      Faculty
                    </td>
                    <td align="center">Rs. 6,000</td>
                    <td align="center">Rs. 7,000</td>
                  </tr>
                  <tr>
                    <td>
                      PTCAI Member
                    
                    </td>
                    <td align="center">Rs. 5,000</td>
                    <td align="center">Rs. 6,000</td>
                  </tr>
                  <tr>
                    <td>
                      Industries
                    </td>
                    <td align="center">Rs. 10,000</td>
                    <td align="center">Rs. 15,000</td>
                  </tr>
                  <tr>
                    {/* <td colSpan="3">
                    <a href="https://forms.gle/ToA2DvdVHaq4w3Et6"> Link for Registration </a>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <p style={{ textAlign: "justify" }}>
              <strong>Note:</strong> Note about registration fees and what it includes.
            </p> */}
           
            <a class="black-button" href="https://forms.gle/ToA2DvdVHaq4w3Et6" target="_blank" rel="noopener noreferrer">
                click here to register
            </a>
          </div>

          {/* {ExcuseCard(Excuses.TBU)} */}
          <div class="box" style={{ minHeight: "40px" }}></div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationNew;
