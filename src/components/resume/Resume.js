import React from "react";
import "./Resume.css";
import { Card, Button } from "react-bootstrap";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file : "/resources/files/mPowellResume.pdf"
    }
  }

  downloadFile = () => {
    window.location.href = this.state.file
  }

  render() {
    return (
      <div className="Resume">
        <Card>
          <div className="content">
            <h2 className="resumeTitle">Education</h2>
            <h4>
              Tennessee Technological University <br />
              B.S. Business and Information Technology
            </h4>
            <h5>
              Minored in Leadership <br />
              Cookeville, TN <br />
              Graduated December 2015
            </h5>
            <p>
              Majored in Business Information Technology with a minor in
              Military Science and Leadership. Course work was heavily focused
              on C# application development and database integration.
            </p>
          </div>
        </Card>
        <Card>
          <div className="content">
            <h2 className="resumeTitle">Experience</h2>
            <h4>
              Jan 2016 - Current <br />
              Technical Analyst - CGI Federal
            </h4>
            <p>Responsibilities included but were not limited to:</p>
            <ul>
              <li key="0">
                Worked as a full stack developer for contracted websites
                utilizing HTML, CSS, and Node.JS
              </li>
              <li key="1">
                Worked on various technical proof-of-concepts transitioning to
                other technology stacks such as AngularJS and ReactJS
              </li>
              <li key="2">
                Created processes to manage source data collection and automate
                database loading with ETL packages as the technical project SME
              </li>
              <li key="3">
                Managed dynamic data for front-end requests through REST APIs
              </li>
            </ul>
            <br />
            <h4>
              Jun 2018 - Jun 2019 <br />
              Platoon Leader/Maintenance Control Officer - Army National Guard
            </h4>
            <p>Responsibilities included but were not limited to:</p>
            <ul>
              <li key="0">
                Managed a platoon of 35 soldiers while operating as the
                Battalion Maintenance Control Officer while deployed across
                Poland
              </li>
              <li key="1">
                Planned for daily operations, managed Soldier’s needs,
                wellbeing, and yearly training requirements
              </li>
              <li key="2">
                Worked with outside agencies as a liaison to expedite supplies
                and repair parts for the Battalion Maintenance Program
              </li>
              <li key="3">
                Tracked equipment changes, repair job status, and shipping order
                statuses for each company’s vehicles to ensure success to the
                Battalion Maintenance Program daily utilizing the GCSSArmy SAP
                System
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="content">
            <h2 className="resumeTitle">Key Skills</h2>
            <ul className="keySkills">
              <li key="0">LEADERSHIP</li>
              <li key="1">MS SQL SERVER</li>
              <li key="2">MYSQL</li>
              <li key="3">ETL</li>
              <li key="4">JAVASCRIPT</li>
              <li key="5">NODE.JS</li>
              <li key="6">REACTJS</li>
              <li key="7">GITHUB</li>
              <li key="8">HTML</li>
              <li key="9">CSS</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="content">
            <h2 className="resumeTitle">Awards</h2>
            <ul>
              <li key="0">TN ARMY COMMENDATION MEDAL</li>
              <li key="1">ARMY ACHIEVEMENT MEDAL</li>
              <li key="2">
                GERMAN ARMED FORCES PROFICIENCY BADGE – GOLD STANDARD
              </li>
            </ul>
          </div>
        </Card>
        <Button className="btn btn-primary" onClick={this.downloadFile}>
          Download Resume
        </Button>
      </div>
    );
  }
}

export default Resume;
