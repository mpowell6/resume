import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="imgHeader">
          <img src="/resources/images/self.jpg" alt="Mitchell" />
        </div>
        <Container className="about">
          <h3>About me</h3>
          <p>
            I'm a Knoxville based Web Developer. After graduating from Tennessee
            Technological University with a B.S. in Information Technology, I've
            spent the last 5 years fostering and developing my skills in web
            development. With a background in leadership with the military, I'm
            highly driven to challenge myself in expanding my skillset while
            always continuosly improving on what I've learned already. I've been
            a developer for 5 years, initally starting with C# and SQL and
            developed my skills from being a back-end developer to a full-stack
            developer. Over the years, I worked with multiple technology stacks
            to include:
          </p>
          <ul>
            <li key="0">HTML5</li>
            <li key="1">CSS</li>
            <li key="2">JavaScript</li>
            <li key="3">Node.JS</li>
            <li key="4">ReactJS</li>
            <li key="5">Microsoft SQL Server</li>
            <li key="6">MySQL</li>
            <li key="7">MongoDB</li>
          </ul>
          <p>
            During my free time, I'm honing my current developer skills to
            continuously improve on what I've learned, playing with my dogs, and
            listening to music.
          </p>
        </Container>
        <Container className="links">
          <a
            href="https://github.com/mpowell6"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/powellmitchell/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:powell.mitchell.d@gmail.com">
            <FaEnvelopeSquare />
          </a>
        </Container>
      </div>
    );
  }
}

export default Home;
