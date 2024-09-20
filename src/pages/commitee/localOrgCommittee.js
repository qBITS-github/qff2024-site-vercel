import React from "react";
import BTable from "react-bootstrap/Table";
import { JSONData } from "./localOrgCommitteeData";

const DisplayData = () => {

  // JSONData.sort((a,b) => (a.FirstName > b.FirstName) ? 1 : ((b.FirstName > a.FirstName) ? -1 : 0))

  return JSONData.map(person => (
    <tr>
      <td className= "px-3" align="left">{person["FirstName"]} {person["LastName"]} </td>
    </tr>
  ))
};

function LocalOrgCommittee() {
  return (
    <>

      <div className="titleStyle1"> Local Organizing  </div>
      <div className="titleStyle2"> Committee </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <BTable  striped bordered hover responsive>
        <thead>
          <tr>
            <th align="start">Name</th>
          </tr>
        </thead>
        <tbody>
          <DisplayData/>
        </tbody>
      </BTable>
      <br />
    </>
  );
}
export default LocalOrgCommittee;
