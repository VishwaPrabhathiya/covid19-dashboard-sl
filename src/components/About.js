import React from "react";
import { Container, Image, Jumbotron, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import ParticlesBg from "particles-bg";
import me from "./assets/me.jpg";

export default function About() {
  return (
    <Container>
      <Jumbotron>
        <ParticlesBg type="color" bg={true} />
        <Container style={{ margin: 0, padding: "20px" }}>
          <Col>
            <Image src={me} roundedCircle />
            <div className="darkRec">
              <h4>Vishwa Prabhathiya</h4>
              <p style={{ padding: 0 }}>
                Undergraduate student at Rajarata University of Sri lanka
              </p>
              <hr />
              <p>HTML/CSS | Bootstrap | React | JavaScript</p>
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vishwa-prabhathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    style={{ fontSize: "3em", color: "white", padding: "8px" }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                  </span>
                </a>
                {/* Github */}
                <a
                  href="https://github.com/VishwaPrabhathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    style={{ fontSize: "3em", color: "white", padding: "8px" }}
                  >
                    <FontAwesomeIcon icon={faGithub} className="github" />
                  </span>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/vprabhathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    style={{ fontSize: "3em", color: "white", padding: "8px" }}
                  >
                    <FontAwesomeIcon icon={faFacebook} className="facebook" />
                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Container>
      </Jumbotron>
    </Container>
  );
}
