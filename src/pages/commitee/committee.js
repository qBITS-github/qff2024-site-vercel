import React from 'react';
import OrgCommittee from "./orgcommitee";
import AdvisoryCommittee from "./advisoryCommittee";
import Patrons from "./patrons";
import LocalOrgCommittee from './localOrgCommittee';

const Committee = () => {
    return (
        <div class="container">
            <br/>
            <Patrons/>
            <br/>
            <br/>
            <OrgCommittee />
            <br/>
            <br/>
            <div className= 'd-flex' style={{position: 'relative'}} >
            <div className='' style={{paddingRight: "200px"}}>
            <AdvisoryCommittee />
            </div>
            <div  style={{paddingLeft: "200px"}}>
            <LocalOrgCommittee/>
            </div>
            
            </div>
        </div>
    );
}

export default Committee;