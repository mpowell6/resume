import React from "react";
import "./Portfolio.css";
import { Card, Row, Col } from "react-bootstrap";

class PortfolioCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card className="projectCard">
          <a
            href={this.props.portfolio.websiteLink}
            target="_blank"
            rel="noreferrer"
            className="linkTitle"
          >
            {this.props.portfolio.websiteTitle}
          </a>
          <Row className="siteInfo">
            <Col className="projectLogo">
              <img
                src={this.props.portfolio.websiteImgSrc}
                alt={this.props.portfolio.websiteAlt}
              />
            </Col>
            <Col className="projectInfo">
              <p>{this.props.portfolio.websiteDescription}</p>
              <p>
                {this.props.portfolio.websiteSourceCode}
                <a
                  href={this.props.portfolio.websiteSourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="gitHubLink"
                >
                  {this.props.portfolio.websiteSourceTitle}
                </a>
              </p>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default PortfolioCard;
