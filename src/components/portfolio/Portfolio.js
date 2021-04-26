import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const projectList = require("../../resources/projects.json");

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        {projectList.Projects.map((project, index) => {
          return <PortfolioCard portfolio={project} key={index} />
        })}
      </div>
    );
  }
}

export default Portfolio;
